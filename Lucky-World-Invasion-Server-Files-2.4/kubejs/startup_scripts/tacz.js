const replaceRecipes = {
    'emxarms:gun/emx_pmg90': JSON.stringify({
        materials: [
            { item: { tag: 'forge:gems/diamond' }, count: 16 },
            { item: { item: 'shadowlands:creeper_alloy' }, count: 40 },
            { item: { item: 'minecraft:netherite_scrap' }, count: 16 },
            { item: { item: 'shadowlands:emerald_ingot' }, count: 10 },
            { item: { item: 'minecraft:iron_ingot' }, count: 320 },
            { item: { item: 'shadowlands:ghostmetal_ingot' }, count: 100 }
        ],
        result: {
            type: 'gun',
            id: 'emxarms:emx_pmg90',
            attachments: {
                scope: 'emxarms:sight_emx_array',
                extended_mag: 'emxarms:emx_lightweight_mag_2'
            }
        },
    }),
    'emxarms:ammo/1045x103': JSON.stringify({
        materials: [
            { item: { item: 'shadowlands:shadowmetalingot' }, count: 3 },
            { item: { item: 'minecraft:iron_ingot' }, count: 6 }
        ],
        result: { type: 'ammo', id: 'emxarms:1045x103', count: 24 }
    }),
    'emxarms:ammo/1045x103belt': JSON.stringify({
        materials: [
            {
                item: {
                    type: 'forge:partial_nbt',
                    item: 'tacz:ammo',
                    nbt: { AmmoId: 'emxarms:1045x103' }
                },
                count: 10
            },
            { item: { item: 'shadowlands:shadowmetalingot' }, count: 2 },
            { item: { item: 'minecraft:blaze_powder' }, count: 1 }
        ],
        result: { type: 'ammo', id: 'emxarms:1045x103belt', count: 10 }
    }),
    'emxarms:ammo/339x57': JSON.stringify({
        materials: [
            { item: { item: 'shadowlands:shadowmetalingot' }, count: 4 },
            { item: { item: 'minecraft:iron_ingot' }, count: 4 },
            { item: { item: 'minecraft:coal' }, count: 4 }
        ],
        result: { type: 'ammo', id: 'emxarms:339x57', count: 60 }
    }),
    'emxarms:ammo/x16he': JSON.stringify({
        materials: [
            { item: { item: 'shadowlands:shadowmetalingot' }, count: 3 },
            { item: { item: 'minecraft:charcoal' }, count: 3 },
            { item: { item: 'minecraft:iron_ingot' }, count: 2 },
            { item: { item: 'minecraft:gunpowder' }, count: 1 }
        ],
        result: { type: 'ammo', id: 'emxarms:x16he', count: 30 }
    }),
    'emxarms:ammo/x16sg': JSON.stringify({
        materials: [
            { item: { item: 'shadowlands:shadowmetalingot' }, count: 3 },
            { item: { item: 'minecraft:iron_nugget' }, count: 20 },
            { item: { item: 'minecraft:coal' }, count: 4 },
            { item: { item: 'minecraft:gunpowder' }, count: 1 }
        ],
        result: { type: 'ammo', id: 'emxarms:x16sg', count: 20 }
    }),
    'emxarms:ammo/410x57ap': JSON.stringify({
        materials: [
            { item: { item: 'shadowlands:shadowmetalingot' }, count: 3 },
            { item: { item: 'minecraft:iron_ingot' }, count: 3 },
            { item: { item: 'minecraft:blaze_powder' }, count: 1 },
            { item: { item: 'minecraft:coal' }, count: 3 }
        ],
        result: { type: 'ammo', id: 'emxarms:410x57ap', count: 40 }
    }),
    'emxarms:ammo/339x57x': JSON.stringify({
        materials: [
            {
                item: {
                    type: 'forge:partial_nbt',
                    item: 'tacz:ammo',
                    nbt: { AmmoId: 'emxarms:339x57' }
                },
                count: 240
            },
            { item: { item: 'minecraft:netherite_ingot' }, count: 1 },
            { item: { item: 'minecraft:iron_ingot' }, count: 16 },
            { item: { item: 'minecraft:blaze_rod' }, count: 16 }
        ],
        result: { type: 'ammo', id: 'emxarms:339x57x', count: 240 }
    }),
    'emxarms:ammo/402x31': JSON.stringify({
        materials: [
            { item: { item: 'shadowlands:shadowmetalingot' }, count: 3 },
            { item: { item: 'minecraft:coal' }, count: 3 },
            { item: { item: 'minecraft:iron_ingot' }, count: 6 }
        ],
        result: { type: 'ammo', id: 'emxarms:402x31', count: 45 }
    }),
    'emxarms:ammo/402x31rip': JSON.stringify({
        materials: [
            {
                item: {
                    type: 'forge:partial_nbt',
                    item: 'tacz:ammo',
                    nbt: { AmmoId: 'emxarms:402x31' }
                },
                count: 60
            },
            { item: { item: 'minecraft:iron_ingot' }, count: 2 }
        ],
        result: { type: 'ammo', id: 'emxarms:402x31rip', count: 60 }
    }),
    // 'emxarms:ammo/emx_tediore': JSON.stringify({
    //     materials: [
    //         { item: { item: 'shadowlands:creepmetal_ingot' }, count: 3 },
    //         { item: { item: 'minecraft:clay_ball' }, count: 2 },
    //         { item: { item: 'minecraft:glass' }, count: 1 }
    //     ],
    //     result: { type: 'ammo', id: 'emxarms:emx_tediore', count: 30 }
    // }),
    'applied_armorer:gun/moritz_mg_hmg22': JSON.stringify({
        materials: [
            { item: { tag: 'forge:ingots/iron' }, count: 80 },
            { item: { tag: 'forge:ingots/gold' }, count: 8 },
            { item: { tag: 'forge:rods/blaze' }, count: 4 }
        ],
        result: { type: 'gun', id: 'applied_armorer:moritz_mg_hmg22' }
    }),
    'create_armorer:gun/mg_platemag_flywheel': JSON.stringify({
        materials: [
            { item: { tag: 'forge:ingots/iron' }, count: 40 },
            { item: { tag: 'forge:ingots/copper' }, count: 8 },
            { item: { item: 'shadowlands:pyrite_ingot' }, count: 20 },
            { item: { item: 'super_block_world:pull_block' }, count: 4 }
        ],
        result: { type: 'gun', id: 'create_armorer:mg_platemag_flywheel' }
    }),
    'helldiver2:gun/sg225_breaker': JSON.stringify({
        materials: [
            { item: { tag: 'forge:ingots/iron' }, count: 48 },
            { item: { item: 'shadowlands:blue_gem' }, count: 10 },
            { item: { tag: 'forge:dyes/cyan' }, count: 4 },
            { item: { item: 'minecraft:end_crystal' }, count: 20 }
        ],
        result: { type: 'gun', id: 'helldiver2:sg225_breaker' }
    }),
    'helldiver2:gun/sg225ie_breaker': JSON.stringify({
        materials: [
            { item: { tag: 'forge:ingots/iron' }, count: 48 },
            { item: { tag: 'forge:dusts/redstone' }, count: 32 },
            { item: { tag: 'forge:dyes/orange' }, count: 4 },
            { item: { item: 'minecraft:flint_and_steel' }, count: 2 },
            { item: { item: 'shadowlands:ultraflame_ingot' }, count: 8 }
        ],
        result: { type: 'gun', id: 'helldiver2:sg225ie_breaker' }
    }),
    'emxarms:gun/emx_mk951lmg': JSON.stringify({
        materials: [
            { item: { tag: 'forge:gems/diamond' }, count: 7 },
            { item: { item: 'minecraft:copper_ingot' }, count: 125 },
            { item: { item: 'minecraft:netherite_scrap' }, count: 40 },
            { item: { item: 'minecraft:lime_dye' }, count: 4 },
            { item: { item: 'minecraft:iron_ingot' }, count: 90 }
        ],
        result: { type: 'gun', id: 'emxarms:emx_mk951lmg' }
    }),
    'emxarms:gun/emx_pulsex2': JSON.stringify({
        materials: [
            { item: { item: 'minecraft:copper_ingot' }, count: 60 },
            { item: { item: 'minecraft:lime_dye' }, count: 4 },
            { item: { item: 'minecraft:quartz' }, count: 20 },
            { item: { item: 'minecraft:diamond' }, count: 4 },
            { item: { item: 'minecraft:iron_ingot' }, count: 60 },
            { item: { item: 'shadowlands:creepmetal_ingot' }, count: 30 }
        ],
        result: { type: 'gun', id: 'emxarms:emx_pulsex2' }
    }),
    'applied_armorer:gun/moritz_sniper_semi_k30': JSON.stringify({
        materials: [
            { item: { item: 'shadowlands:brutallium_ingot' }, count: 20 },
            { item: { tag: 'forge:ingots/iron' }, count: 120 },
            { item: { tag: 'forge:gems/diamond' }, count: 4 },
            { item: { tag: 'forge:rods/blaze' }, count: 6 }
        ],
        result: { type: 'gun', id: 'applied_armorer:moritz_sniper_semi_k30' }
    }),
    'arip:attachment/vicissitude': JSON.stringify({
        materials: [
            { item: { item: 'shadowlands:ultraflame_ingot' }, count: 100 },
            { item: { tag: 'forge:ingots/netherite' }, count: 8 },
            { item: { item: 'minecraft:crying_obsidian' }, count: 8 },
            { item: { tag: 'minecraft:music_discs' }, count: 8 },
            { item: { item: 'minecraft:chorus_flower' }, count: 8 },
            { item: { item: 'minecraft:conduit' }, count: 4 },
            { item: { item: 'minecraft:trident' }, count: 4 },
            { item: { item: 'minecraft:dragon_breath' }, count: 8 },
            { item: { tag: 'forge:nether_stars' }, count: 1 }
        ],
        result: { type: 'attachment', id: 'arip:vicissitude' }
    }),
    'arip:attachment/coercion': JSON.stringify({
        materials: [
            { item: { item: 'shadowlands:ultraflame_ingot' }, count: 50 },
            { item: { tag: 'forge:nether_stars' }, count: 2 },
            { item: { item: 'minecraft:end_crystal' }, count: 2 },
            { item: { tag: 'forge:ingots/netherite' }, count: 8 },
            { item: { item: 'minecraft:crying_obsidian' }, count: 8 },
            { item: { item: 'minecraft:dragon_breath' }, count: 8 },
            { item: { tag: 'forge:rods/blaze' }, count: 8 },
            { item: { tag: 'forge:gems/lapis' }, count: 8 },
            { item: { tag: 'forge:gems/quartz' }, count: 8 }
        ],
        result: { type: 'attachment', id: 'arip:coercion' }
    }),
    'arip:attachment/aa12ex': JSON.stringify({
        materials: [
            { item: { item: 'shadowlands:ultraflame_ingot' }, count: 30 },
            { item: { tag: 'forge:ingots/netherite' }, count: 4 },
            { item: { item: 'minecraft:crying_obsidian' }, count: 8 },
            { item: { tag: 'forge:gems/diamond' }, count: 32 },
            { item: { tag: 'forge:dusts/redstone' }, count: 8 },
            { item: { tag: 'forge:rods/blaze' }, count: 4 },
            { item: { tag: 'forge:nether_stars' }, count: 1 }
        ],
        result: { type: 'attachment', id: 'arip:aa12ex' }
    })
};

const removeRecipes = [
    'applied_armorer:gun/moritz_mg_emg_prototype',
    'emxarms:gun/emx_sf7b'
]

TaCZStartupEvents.recipeLoad(event => {
    const id = event.getId().toString();
    // console.log(event.getStdJson());

    if (Object.keys(replaceRecipes).indexOf(id.replace('attachments', 'attachment')) != -1 || removeRecipes.indexOf(id) != -1) {
        event.removeRecipe();
    }
});

TaCZStartupEvents.recipeLoadEnd(event => {
    for (const [key, value] of Object.entries(replaceRecipes)) {
        event.addRecipe(new ResourceLocation(key), value);
    }
});

// TaCZStartupEvents.gunIndexLoad(event => {
//     switch (event.getId().toString()) {
//         case 'emxarms:emx_nikana':
//             event.removeGun();
//             break;
//         default:
//             break;
//     }
// });
