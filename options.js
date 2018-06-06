function saveOptions() {
	let dashBoardEnabled = document.getElementById('dashboard').checked;
	let dashBoardIntervalTime = document.getElementById('dashboardInterval').value;
	let viewsEnabled = document.getElementById('views').checked;
	let viewsIntervalTime = document.getElementById('viewsInterval').value;
	let customerListsEnabled = document.getElementById('customerViews').checked;
	let customerListsIntervalTime = document.getElementById('customerViewsInterval').value;
	chrome.storage.sync.set({
		dashBoardEnabled: dashBoardEnabled,
		dashBoardIntervalTime: notSmallerThanOne(dashBoardIntervalTime),
		viewsEnabled: viewsEnabled,
		viewsIntervalTime: notSmallerThanOne(viewsIntervalTime),
		customerListsEnabled: customerListsEnabled,
		customerListsIntervalTime: notSmallerThanOne(customerListsIntervalTime)
	}, () => {
		loadOptions();
		document.getElementById('status').innerHTML = 'Options updated. <br/>Please refresh any tabs that have zendesk open.';
	});
}

function notSmallerThanOne(num) {
	return num >= 1 ? num : 1;
}

function loadOptions() {
	chrome.storage.sync.get({
		dashBoardEnabled: true,
		dashBoardIntervalTime: 60,
		viewsEnabled: true,
		viewsIntervalTime: 60,
		customerListsEnabled: true,
		customerListsIntervalTime: 60
	}, items => {
		document.getElementById('dashboard').checked = items.dashBoardEnabled;
		document.getElementById('dashboardInterval').value = items.dashBoardIntervalTime;
		document.getElementById('views').checked = items.viewsEnabled;
		document.getElementById('viewsInterval').value = items.viewsIntervalTime;
		document.getElementById('customerViews').checked = items.customerListsEnabled;
		document.getElementById('customerViewsInterval').value = items.customerListsIntervalTime;
	});
}

document.addEventListener('DOMContentLoaded', loadOptions);
document.getElementById('saveOptions').addEventListener('click', saveOptions);