StartupEvents.modifyCreativeTab('kubejs:tab', (event) => {
  event.setIcon('lucky:lucky_world_invasion_lucky_block');
  event.setDisplayName(Text.translate('kubejs.title'));

  event.add(Ingredient.of('@lucky').getStacks());
});
