<?php declare(strict_types = 1);

namespace MailPoet\EmailEditor\Integrations\Core\Renderer\Blocks;

if (!defined('ABSPATH')) exit;


use MailPoet\EmailEditor\Engine\Renderer\BlockRenderer;
use MailPoet\EmailEditor\Engine\SettingsController;

// We have to avoid using keyword `List`
class ListBlock implements BlockRenderer {
  public function render(string $blockContent, array $parsedBlock, SettingsController $settingsController): string {
    $html = new \WP_HTML_Tag_Processor($blockContent);
    $tagName = ($parsedBlock['attrs']['ordered'] ?? false) ? 'ol' : 'ul';
    if ($html->next_tag(['tag_name' => $tagName])) {
      $styles = $html->get_attribute('style') ?? '';
      $styles = $settingsController->parseStylesToArray($styles);
      $styles = array_merge($styles, $parsedBlock['email_attrs'] ?? []);

      // List block does not need width specification and it can cause issues for nested lists
      unset($styles['width'] );

      // Use font-size from email theme when those properties are not set
      $themeData = $settingsController->getTheme()->get_data();
      if (!isset($styles['font-size'])) {
        $styles['font-size'] = $themeData['styles']['typography']['fontSize'];
      }

      $html->set_attribute('style', $settingsController->convertStylesToString($styles));
      $blockContent = $html->get_updated_html();
    }

    $wrapperStyle = $settingsController->convertStylesToString([
      'margin-top' => $parsedBlock['email_attrs']['margin-top'] ?? '0px',
    ]);

    // \WP_HTML_Tag_Processor escapes the content, so we have to replace it back
    $blockContent = str_replace('&#039;', "'", $blockContent);
    $blockContent = str_replace('{listContent}', $blockContent, $this->getMarkup());
    $blockContent = str_replace('{wrapperStyle}', $wrapperStyle, $blockContent);
    return $blockContent;
  }

  private function getMarkup(): string {
    return '
      <div style="{wrapperStyle}">
            {listContent}
      </div>';
  }
}
