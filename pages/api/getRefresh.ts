import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
	refresh: string;
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const refresh = req.cookies.refresh;

	res.status(200).json({ refresh: refresh ? refresh : "" });
}
