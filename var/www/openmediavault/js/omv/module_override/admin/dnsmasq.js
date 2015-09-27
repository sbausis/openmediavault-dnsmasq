
// require("js/omv/WorkspaceManager.js")

OMV.WorkspaceManager.registerNode({
	id: "networking",
	path: "/",
	text: _("Networking"),
	position: 15
});

OMV.WorkspaceManager.registerNodeOverride({
	newpath : "/networking",
    id      : "dnsmasq",
    path    : "/service"
});

OMV.WorkspaceManager.registerPanelOverride({
	newpath   : "/networking/dnsmasq",
    id        : "settings",
    path      : "/service/dnsmasq"
});

OMV.WorkspaceManager.registerPanelOverride({
	newpath   : "/networking/dnsmasq",
    id        : "static",
    path      : "/service/dnsmasq"
});

OMV.WorkspaceManager.registerPanelOverride({
	newpath   : "/networking/dnsmasq",
    id        : "leases",
    path      : "/service/dnsmasq"
});
