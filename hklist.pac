const __USERRULES__ = [
'2021hkcharter.com',
'2ip.io',
'8964museum.com',
'8964tiananmen.com',
'astrill.com',
'au.dk',
'auth.openai.com',
'auth0.openai.com',
'bard.google.com',
'blockedbyhk.com',
'cachedview.com',
'cdn.oaistatic.com',
'chat.openai.com',
'chatgpt.com',
'claude.ai',
'coinbase.com',
'dpp.org.tw',
'ecu.peopleadmin.com',
'eu-browse.startpage.com',
'gdh1995.cn',
'gemini.google.com',
'goarmy.com',
'googlevideo.com',
'gov.taipei',
'gqqnbig.me',
'hkchronicles.com',
'hkdc.us',
'hongkongwatch.org',
'ipfs.io',
'ipfs.tech',
'jobs.cmich.edu',
'libgen.is',
'libgen.rs',
'libgen.st',
'library.lol',
'pct.org.tw',
'sci-hub.se',
'spinroot.com',
'subvod.fr',
'surfshark.com',
'torontomu.ca',
'twtjcdb.nhrm.gov.tw',
'ump.edu.pl',
'ut.ee',
'yewtu.be',
'youtube.com',
];

let proxy;
if ('__PROXY__'.startsWith('PROXY ')) proxy = '__PROXY__';
else proxy = eval('__PROXY__');
const direct = 'DIRECT';

const userrules = __USERRULES__;

function FindProxyForURL(url, host) {
	for (let i = 0; i < userrules.length; i += 1) {
		if (host=="google.com") return proxy;
		if (host=="www.google.com") return proxy;
		if (host.endsWith(userrules[i])) return proxy;
	}

	return direct;
}
