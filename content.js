let dashBoardEnabled;
let dashBoardIntervalTime;
let viewsEnabled;
let viewsIntervalTime;
let customerListsEnabled;
let customerListsIntervalTime;

function setIntervals() {
	setInterval(() => {
		if (dashBoardEnabled && $(".nav-tab-list li:eq(0) a").hasClass("active-product-link"))
			$(".nav-tab-list li:eq(0) a")[0].click();
	}, dashBoardIntervalTime * 1000);
	
	setInterval(() => {
		if (viewsEnabled && $(".nav-tab-list li:eq(1) a").hasClass("active-product-link"))
			$('#main_panes .filters :button:has(.icon-refresh)')[0].click();
	}, viewsIntervalTime * 1000);

	setInterval(() => {
		if (customerListsEnabled && $(".nav-tab-list li:eq(2) a").hasClass("active-product-link"))
			$('#main_panes .user_filters :button:has(.icon-refresh)')[0].click();
	}, customerListsIntervalTime * 1000);
}

function loadOptionsAndStartIntervals() {
		chrome.storage.sync.get({
		dashBoardEnabled: true,
		dashBoardIntervalTime: 60,
		viewsEnabled: true,
		viewsIntervalTime: 60,
		customerListsEnabled: true,
		customerListsIntervalTime: 60
	}, items => {
		dashBoardEnabled = items.dashBoardEnabled;
		dashBoardIntervalTime = items.dashBoardIntervalTime;
		viewsEnabled = items.viewsEnabled;
		viewsIntervalTime = items.viewsIntervalTime;
		customerListsEnabled = items.customerListsEnabled;
		customerListsIntervalTime = items.customerListsIntervalTime;

		console.log("dashBoardEnabled: " + dashBoardEnabled +
				", dashBoardIntervalTime: " + dashBoardIntervalTime +
				", viewsEnabled: " + viewsEnabled +
				", viewsIntervalTime: " + viewsIntervalTime +
				", customerListsEnabled: " + customerListsEnabled +
				", customerListsIntervalTime: " + customerListsIntervalTime
		);
		setIntervals();
	});
	
}

loadOptionsAndStartIntervals();