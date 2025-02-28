/**
 * Recipes config
 */
ServerEvents.recipes((event) => {
  event.remove([
    'lucky:lucky_block',
    'lucky:elewind_lucky_block',
    'lucky:elergy_lucky_block',
    'lucky:eleice_lucky_block',
    'lucky:elefire_lucky_block',
    'lucky:desert_lucky_block',
    'lucky:amongus_lucky_block',
    'lucky:summer_lucky_block',
    'lucky:fire_lucky_block',
    'lucky:morbius_lucky_block',
    'lucky:pink_lucky_block',
    'lucky:tacz_lucky_block',
    // 'tacz:gun_smith_table',
    'expandedstorage:obsidian_to_netherite_conversion_kit'
  ]);

  event.shaped('kubejs:lucky_gem_pickaxe_imitation', [
    'IGI',
    ' M ',
    ' G '
  ], {
    M: 'shadowlands:enhanced_shadowmetal',
    G: 'shadowlands:neon_gem',
    I: 'shadowlands:ghostmetal_ingot'
  });

  event.shaped('shadowlands:cloud_helmet', [
    'MMM',
    'M M'
  ], {
    M: 'shadowlands:solid_cloud'
  });

  event.shaped('shadowlands:cloud_chestplate', [
    'M M',
    'MMM',
    'MMM'
  ], {
    M: 'shadowlands:solid_cloud'
  });

  event.shaped('shadowlands:cloud_leggings', [
    'MMM',
    'M M',
    'M M'
  ], {
    M: 'shadowlands:solid_cloud'
  });

  event.shaped('shadowlands:cloud_boots', [
    'M M',
    'M M'
  ], {
    M: 'shadowlands:solid_cloud'
  });

  event.shaped('shadowlands:enhanced_shadowmetal_helmet', [
    'MMM',
    'M M'
  ], {
    M: 'shadowlands:enhanced_shadowmetal'
  });

  event.shaped('shadowlands:enhanced_shadowmetal_chestplate', [
    'M M',
    'MMM',
    'MMM'
  ], {
    M: 'shadowlands:enhanced_shadowmetal'
  });

  event.shaped('shadowlands:enhanced_shadowmetal_leggings', [
    'MMM',
    'M M',
    'M M'
  ], {
    M: 'shadowlands:enhanced_shadowmetal'
  });

  event.shaped('shadowlands:enhanced_shadowmetal_boots', [
    'M M',
    'M M'
  ], {
    M: 'shadowlands:enhanced_shadowmetal'
  });

  event.shaped('esotericreforging:esoteric_reforging_table', [
    ' S ',
    'ATA',
    'BBB'
  ], {
    S: 'apotheotic_additions:esoteric_material',
    A: 'apotheotic_additions:heirloom_material',
    B: 'shadowlands:deep_greenstone',
    T: 'ancientreforging:ancient_reforging_table'
  });

  // event.smelting('minecraft:leather', 'minecraft:rotten_flesh', 0.1, 100);

  event.smithing(
    'expandedstorage:obsidian_to_netherite_conversion_kit',
    'minecraft:obsidian',
    'minecraft:netherite_ingot'
  );

});
