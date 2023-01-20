import React from "react";
import { InfinitySpin } from "react-loader-spinner";

export const Loading = () => (
	<div className="flex justify-center items-center ">
		<InfinitySpin type="Puff" color="#00BFFF" height={900} width={200} />
	</div>
);
