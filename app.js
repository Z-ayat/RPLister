let qtyMission = document.getElementById('qty')
let submitMission = document.getElementById('submitMission');
let missionsContainer = document.getElementById('missionsContainer');

submitMission.addEventListener('click',function () { 
    var missionContainer = document.createElement('div');
    missionContainer.classList.add('card');
    missionsContainer.appendChild(missionContainer);
    // img
    var imgTr = document.createElement('img');
    imgTr.classList.add('img-fluid,rounded-circle');
    imgTr.setAttribute("src","images/photosnap.svg");
    missionContainer.appendChild(imgTr);

    // textwrapper
    var missionTextWrapper = document.createElement('div');
    missionTextWrapper.classList.add('text-wrapper');
    missionContainer.appendChild(missionTextWrapper);

    // whereto
    var whereToWrapper = document.createElement('div');
    whereToWrapper.classList.add('whereto');
    missionTextWrapper.appendChild(whereToWrapper);

    // spans
    var mapMissions = document.createElement('span');
    mapMissions.classList.add('map');
    let mapMissionsSelected = document.querySelector('#map').value;
    mapMissions.innerText = mapMissionsSelected;
    whereToWrapper.appendChild(mapMissions);
    var modeMissions = document.createElement('span');
    modeMissions.classList.add('mode');
    let modeMissionSelected = document.querySelector('input[name="mode"]:checked').value;
    modeMissions.innerText = modeMissionSelected;
    whereToWrapper.appendChild(modeMissions);


    // mission
    var missionsType = document.createElement('h3')
    missionsType.innerText = missionType.value +  specMission.value + ' in ' ;
    missionType.value = "";
    missionTextWrapper.appendChild(missionsType);
    
    // qty
    let qtyMissionEnd = document.createElement('div');
    qtyMissionEnd.classList.add('howMuch');
    let achMissions = document.getElementById('ach')
    let qtyMissions = document.getElementById('qty')
    qtyMissionEnd.innerText = achMissions.value + ' / ' + qtyMissions.value;
    missionTextWrapper.appendChild(qtyMissionEnd);
})
console.log(missionsContainer);
