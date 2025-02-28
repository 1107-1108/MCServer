/**
 * Modify item tooltips
 */
ItemEvents.tooltip((event) => {
  event.addAdvanced(
    [
      'shadowlands:upgrade_station',
      'yakurum:fading_dagger',
      'yakurum:cobweb_wand',
      'yakurum:tnt_wand',
      'yakurum:curse_sword',
      'yakurum:night_sword',
      'yakurum:launcher_sword'
    ],
    (item, advanced, text) => {
      // if (event.shift) {
      text.add(Text.gray(Text.translate(`tooltip.${item.id.replace(':', '.')}`)));
      // }
    }
  );
});
