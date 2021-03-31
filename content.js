let dashBoardEnabled;
let dashBoardIntervalTime;
let viewsEnabled;
let viewsIntervalTime;

function setIntervals() {
	setInterval(() => {
		if (dashBoardEnabled && $("a[data-test-id='home-tab']").hasClass("active-product-link")) {
			$("a[data-test-id='home-tab']").click();
			console.debug("refreshed dashboard");
		}
	}, dashBoardIntervalTime * 1000);

	setInterval(() => {
		if (viewsEnabled && $("a[data-original-title='Views']").hasClass("active-product-link")) {
			if ($("li:contains('1')").length > 0) { // Only click if we are on the first page, could not find an easier selector.
				if (!$("li:contains('1')").hasClass("LRfn")) {
					$("button[data-test-id='views_views-list_header-refresh']").click();
					console.debug("refreshed views");
				}
			} else {
				$("button[data-test-id='views_views-list_header-refresh']").click();
				console.debug("refreshed views");
			}
		}
	}, viewsIntervalTime * 1000);
}

function loadOptionsAndStartIntervals() {
		chrome.storage.sync.get({
		dashBoardEnabled: true,
		dashBoardIntervalTime: 60,
		viewsEnabled: true,
		viewsIntervalTime: 60
	}, items => {
		dashBoardEnabled = items.dashBoardEnabled;
		dashBoardIntervalTime = items.dashBoardIntervalTime;
		viewsEnabled = items.viewsEnabled;
		viewsIntervalTime = items.viewsIntervalTime;

		console.log("dashBoardEnabled: " + dashBoardEnabled +
				", dashBoardIntervalTime: " + dashBoardIntervalTime +
				", viewsEnabled: " + viewsEnabled +
				", viewsIntervalTime: " + viewsIntervalTime
		);
		setIntervals();
	});

}

loadOptionsAndStartIntervals();