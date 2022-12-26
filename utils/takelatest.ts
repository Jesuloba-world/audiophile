type cancelablePromise = {
	promise: Promise<any>;
	cancel: () => boolean;
} | null;

const cancelable = (promise: Promise<any>) => {
	let hasCancelled = false;

	return {
		promise: promise.then((v: any) => {
			if (hasCancelled) {
				throw { isCancelled: true };
			}

			return v;
		}),
		cancel: () => (hasCancelled = true),
	};
};

const createTakeLatest = () => {
	let cancelablePromise: cancelablePromise = null;

	const takeLatest = (promise: Promise<any>) => {
		if (cancelablePromise) {
			cancelablePromise.cancel();
			cancelablePromise = cancelable(promise);
		} else {
			cancelablePromise = cancelable(promise);
		}

		return cancelablePromise.promise;
	};

	return takeLatest;
};

export default createTakeLatest;
