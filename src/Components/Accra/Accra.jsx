import React, { useState } from "react";
import "../../../src/index.css";
import branches from "../../Data/Accra";
import { Link } from "react-router-dom";

const Accra = () => {
	const [selectedRegion, setSelectedRegion] = useState("");

	const ghanaRegions = [
		{ name: "Ashanti Region", capital: "Kumasi", established: 1959 },
		{ name: "Bono Region", capital: "Sunyani", established: 2019 },
		{ name: "Bono East Region", capital: "Techiman", established: 2019 },
		{ name: "Central Region", capital: "Cape Coast", established: 1959 },
		{ name: "Eastern Region", capital: "Koforidua", established: 1959 },
		{ name: "Greater Accra Region", capital: "Accra", established: 1959 },
		{ name: "Northern Region", capital: "Tamale", established: 1959 },
		{ name: "North East Region", capital: "Nalerigu", established: 2019 },
		{ name: "Oti Region", capital: "Dambai", established: 2019 },
		{ name: "Savannah Region", capital: "Damongo", established: 2019 },
		{ name: "Upper East Region", capital: "Bolgatanga", established: 1959 },
		{ name: "Upper West Region", capital: "Wa", established: 1983 },
		{ name: "Volta Region", capital: "Ho", established: 1959 },
		{ name: "Western Region", capital: "Sekondi-Takoradi", established: 1959 },
		{ name: "Western North Region", capital: "Sefwi Wiawso", established: 2019 },
		{ name: "Ahafo Region", capital: "Goaso", established: 2019 },
	];

	const handleRegionClick = (regionName) => {
		setSelectedRegion(regionName);
	};

	const filteredBranches = branches.filter((branch) =>
		selectedRegion ? branch.region ===  selectedRegion.toUpperCase() : true
	);

	return (
		<>
			<div className="flex flex-col items-center mt-36">
				<h1 className="text-3xl mb-8">Regions of Ghana</h1>
				<div className="flex flex-wrap justify-center gap-4">
					{ghanaRegions.map(({ name }) => (
						<button
							key={name}
							className={`px-4 py-2 rounded-md ${
								selectedRegion === name ? "bg-primary text-white" : "bg-gray-200"
							} hover:bg-primary hover:text-white`}
							onClick={() => handleRegionClick(name)}>
							{name}
						</button>
					))}
				</div>

				<h2 className="text-3xl mt-12">Branches</h2>
				<div className="flex flex-wrap justify-center mt-8 gap-14">
					{filteredBranches.map(({ name, coordinates }) => (
						<div
							key={name}
							className="flex justify-center items-center bg-white w-72 shadow-card px-5 py-10 rounded-lg">
							<div className="flex flex-col items-center text-center">
								<h3 className="text-xl font-bold">{name}</h3>
								<Link to="/map">
									<button
										className="mt-3 w-full text-white px-8 py-2 bg-primary rounded-sm"
										onClick={() => {
											sessionStorage.setItem(
												"map",
												`https://maps.google.com/maps?q=${coordinates.latitude},${coordinates.longitude}&z=15&output=embed`
											);
											sessionStorage.setItem("loc", name);
										}}>
										{"Reade more"}
									</button>
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Accra;
