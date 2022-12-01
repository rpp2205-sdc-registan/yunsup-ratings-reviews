const home = (req, res) => {
	res.json({ sdc: "API service" });
};

const getReview = (req, res) => {
	res.json({ get: "Reviews by Product" });
};

const getMetaReview = (req, res) => {
	res.json({ get: "Reviews(Meta) by Product" });
};

const postReview = (req, res) => {
	res.json({ post: "Post Review for Product" });
};

module.exports = {
	home,
	getReview,
	getMetaReview,
	postReview,
};
