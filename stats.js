campaignParameters = {
	campaignProjection: {
		donationTarget: 9700000,
    	updatedAt: '2023-11-13',
		donationSumBase: 3100000,
		donationCountBase: 117449,
		donationAmountPerMinute: 87.358,
		donationCountPerMinute: 3.291,
		averageAmountPerDonation: 22.25
	},
    millionImpressionsPerDay: 5,
    startDate: '2023-10-30',
    endDate: '2023-12-31',
    numberOfMembers: 73832,
	isLateProgress: false
};

// Legacy values to display pre-2023 banners, delete at some point
GlobalBannerSettings = {
	'donations-date-base': campaignParameters.campaignProjection.updatedAt,
	'donations-collected-base': campaignParameters.campaignProjection.donationSumBase,
	'donators-base': campaignParameters.campaignProjection.donationCountBase,
	'appr-donations-per-minute': campaignParameters.campaignProjection.donationAmountPerMinute,
	'appr-donators-per-minute': campaignParameters.campaignProjection.donationCountPerMinute,
	'impressions-per-day-in-million': campaignParameters.millionImpressionsPerDay,
	'campaign-start-date': campaignParameters.startDate,
	'campaign-end-date': campaignParameters.endDate,
	'banner-close-track-ratio': 1,
	'goalDonationSum': campaignParameters.campaignProjection.donationTarget,
	'numberOfMembers': campaignParameters.numberOfMembers
};
