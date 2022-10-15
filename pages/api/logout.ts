import type { NextApiRequest, NextApiResponse } from "next";
import { deleteCookie } from "cookies-next";

type Data = {};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	try {
		deleteCookie("token", { req, res });
		deleteCookie("refresh", { req, res });

		res.status(200).json({ message: "successful" });
	} catch (err: any) {
		res.status(404).json({ message: err.message });
	}
}
