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

function getDatabaseUsername(): string {
	const username = process.env["DATABASE_USERNAME"];
	if(!username) { die("No database username was provided (add DATABASE_USERNAME=USERNAME_HERE to your .env file)"); }
	else { return username; }
}

function getDatabasePassword(): string {
	const password = process.env["DATABASE_PASSWORD"];
	if(!password) { die("No database password was provided (add DATABASE_PASSWORD=PASSWORD_HERE to your .env file)"); }
	else { return password; }
}

function getDatabaseHost(): string {
	const host = process.env["DATABASE_HOST"];
	if(!host) { die("No database host was provided (add DATABASE_HOST=HOST_HERE to your .env file)"); }
	else { return host; }
}

export default {
	TARGET_URL: getTargetUrl(),
	DATABASE_USERNAME: getDatabaseUsername(),
	DATABASE_PASSWORD: getDatabasePassword(),
	DATABASE_HOST: getDatabaseHost()
};
