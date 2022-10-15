import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
	refresh: string;
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	try {
		const refresh = req.cookies.refresh;
		res.status(200).json({ refresh: refresh ? refresh : "" });
	} catch (err) {
		res.status(404).json({ refresh: "null" });
	}
}
