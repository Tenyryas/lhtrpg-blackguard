import {fetch_JsonData} from "/systems/lhtrpg/module/lhtrpg.mjs"

Hooks.on(`init`, () => {
    const jobs = ["Blackguard"];
    fetch_JsonData("modules/lhtrpg-blackguard/json/", jobs, "jobs");
});

/**
 * Populates the CONFIG variables LHTRPG.Jobs, LHTRPG.JobNames or LHTRPG.Races and LHTRPG.RaceNames by pulling the JSON names listed in the settings
 * @param {String} path     The relative path to the JSON folder (root is FoundryVTT's Data folder)
 * @param {Array} array     The array of names used to pull the right JSONs from the folder
 * @param {String} fileType The type of JSON pulled, either "jobs" or "races"
 * @returns {Void}
 */
// function fetch_JsonData(path, array, fileType) {
//     $.ajaxSetup({
//         async: false
//     });
//     for (const key of array) {
//         const filepath = path + key + ".json";
//         const data = $.getJSON(filepath).responseJSON;

//         if (data != undefined) {

//             // if the JSON doesn't have a localization key for the class/race, fallback to the key
//             if(!game.i18n.has(data["name"], true)){
//                 data["name"] = key;
//             }

//             if (fileType === "jobs") {
//                 CONFIG.LHTRPG.Jobs[key.toLowerCase()] = data;
//                 CONFIG.LHTRPG.JobNames[key.toLowerCase()] = data["name"];
//             }
//             if (fileType === "races") {
//                 CONFIG.LHTRPG.Races[key.toLowerCase()] = data;
//                 CONFIG.LHTRPG.RaceNames[key.toLowerCase()] = data["name"];
//             }
//         }
//     }
//     $.ajaxSetup({
//         async: true
//     });
// }