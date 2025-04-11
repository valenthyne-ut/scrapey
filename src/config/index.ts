import "dotenv/config";

function die(reason: string): never {
	console.error(`[FATAL]  ${reason}`);
	process.exit(1);
}

function getTargetUrl(): string {
	const url = process.env["TARGET_URL"];
	if(!url) { die("No target URL was provided (add TARGET_URL=URL_HERE to your .env file)"); }
	else { return url; }
}

export default {
	TARGET_URL: getTargetUrl()
};
