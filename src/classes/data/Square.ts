class Square {
	neLat: number;
	neLng: number;
	swLat: number;
	swLng: number;

	constructor(neLat: number, neLng: number, swLat: number, swLng: number) {
		if(neLat < -90 || neLat > 90) {
			throw new RangeError("(North-eastern) latitude must be inbetween -90 and 90 degrees inclusive.");
		}
		this.neLat = neLat;

		if(swLat < -90 || swLat > 90) {
			throw new RangeError("(South-western) latitude must be inbetween -90 and 90 degrees inclusive.");
		}
		this.swLat = swLat;

		if(neLng < -180 || neLng > 180) {
			throw new RangeError("(North-eastern) longitude must be inbetween -180 and 180 degrees inclusive.");
		}
		this.neLng = neLng;

		if(swLng < -180 || swLng > 180) {
			throw new RangeError("(South-western) longitude must be inbetween -180 and 180 degrees inclusive.");
		}
		this.swLng = swLng;
	}

	toParams() {
		const params = new URLSearchParams();
		params.set("ne_lat", this.neLat.toString());
		params.set("ne_lng", this.neLng.toString());
		params.set("sw_lat", this.swLat.toString());
		params.set("sw_lng", this.swLng.toString());
		return params;
	}
}

export { Square };
