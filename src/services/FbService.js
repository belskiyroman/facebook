

class FbService {
	constructor(appId) {
		const ID_FB = 'facebook-jssdk'
		window.fbAsyncInit = this._fbAsyncInit.bind(this, appId);

		if (document.getElementById(ID_FB)) {
			return;
		}

		const lastScript = document.getElementsByTagName('script')[0];
		const js = document.createElement('script');
		js.id = ID_FB;
		js.src = "//connect.facebook.net/en_US/sdk.js";
		lastScript.parentNode.insertBefore(js, lastScript);
	}

	init(appId) {
		this.fb.init({
			appId : appId,
			autoLogAppEvents : true,
			xfbml : true,
			version : 'v2.10'
		});
	}

	login(payload) {
		const permissions = payload && payload.join ? payload.join(',') : 'publish_actions';
		const promise = new Promise((resolve, reject) => {
			this.fb.login(
				this._result.bind(this, resolve, reject),
				{scope: permissions}
			);
		});

		return promise;
	};

	getAlbums() {
		const promise = new Promise((resolve, reject) => {
			this.fb.api(
				'/me/albums',
				this._result.bind(this, resolve, reject)
			);
		});

		return promise;
	};

	getPhoto(id) {
		const promise = new Promise((resolve, reject) => {
			this.fb.api(
				`/${id}/photos`,
				this._result.bind(this, resolve, reject)
			);
		});

		return promise.then((res) => {
			return res.data.map(photo => console.log(photo) && this._getPhotoURl(photo.id))
		});
	};

	_getPhotoURl(id) {
		const promise = new Promise((resolve, reject) => {
			this.fb.api(
				`/${id}`,
				this._result.bind(this, resolve, reject)
			);
		});

		return promise;
	}

	/* private */

	_fbAsyncInit(appId) {
		this.fb = window.FB;
		// delete window.FB;

		if (appId) {
			this.init(appId);
		}
	}

	_result(resolve, reject, res) {
		res && res.error ? reject(res.error) : resolve(res);
	}
}
export default FbService;
