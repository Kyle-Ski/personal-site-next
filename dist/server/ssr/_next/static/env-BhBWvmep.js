//#region sanity/env.ts
var apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-12-31";
var dataset = assertValue("production", "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET");
var projectId = assertValue("be82egj8", "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID");
function assertValue(v, errorMessage) {
	if (v === void 0) throw new Error(errorMessage);
	return v;
}
//#endregion
export { dataset as n, projectId as r, apiVersion as t };
