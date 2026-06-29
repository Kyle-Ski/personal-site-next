import { V as require_react, Y as __toESM, n as require_jsx_runtime } from "../../index.js";
import { n as dataset, r as projectId, t as apiVersion } from "./env-BhBWvmep.js";
import { defineArrayMember, defineConfig, defineField, defineType } from "sanity";
import { visionTool } from "@sanity/vision";
import { structureTool } from "sanity/structure";
import { codeInput } from "@sanity/code-input";
//#region node_modules/@sanity/icons/dist/index.js
var import_jsx_runtime = require_jsx_runtime(), import_react = /* @__PURE__ */ __toESM(require_react(), 1), ClipboardImageIcon = /* @__PURE__ */ (0, import_react.forwardRef)(function(props, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		"data-sanity-icon": "clipboard-image",
		width: "1em",
		height: "1em",
		viewBox: "0 0 25 25",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		...props,
		ref,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M8 5.5H6.5V19.5H10.5M17 5.5H18.5V11.5M10.5 18.5L12.73 15.8983C13.1327 15.4285 13.8613 15.4335 14.2575 15.909L15.299 17.1588C15.6754 17.6105 16.3585 17.6415 16.7743 17.2257L16.9903 17.0097C17.2947 16.7053 17.7597 16.6298 18.1447 16.8223L20.5 18M10.5 11.5H20.5V21.5H10.5V11.5ZM12.5 3C11.5 3 11.5 4.5 11 4.5C10 4.5 9.5 5 9.5 6.5H15.6C15.6 5 15 4.5 14 4.5C13.5 4.5 13.5 3 12.5 3Z",
			stroke: "currentColor",
			strokeWidth: 1.2,
			strokeLinejoin: "round"
		})
	});
}), CodeIcon = /* @__PURE__ */ (0, import_react.forwardRef)(function(props, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		"data-sanity-icon": "code",
		width: "1em",
		height: "1em",
		viewBox: "0 0 25 25",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		...props,
		ref,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M11 16L7.5 12.5L11 9M14 9L17.5 12.5L14 16",
			stroke: "currentColor",
			strokeWidth: 1.2,
			strokeLinejoin: "round"
		})
	});
}), DocumentIcon = /* @__PURE__ */ (0, import_react.forwardRef)(function(props, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		"data-sanity-icon": "document",
		width: "1em",
		height: "1em",
		viewBox: "0 0 25 25",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		...props,
		ref,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M11.5 4.5V9.5H6.5",
			stroke: "currentColor",
			strokeWidth: 1.2,
			strokeLinejoin: "round"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M18.5 20.5H6.5V9.5L11.5 4.5H18.5V20.5Z",
			stroke: "currentColor",
			strokeWidth: 1.2,
			strokeLinejoin: "round"
		})]
	});
}), DocumentTextIcon = /* @__PURE__ */ (0, import_react.forwardRef)(function(props, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		"data-sanity-icon": "document-text",
		width: "1em",
		height: "1em",
		viewBox: "0 0 25 25",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		...props,
		ref,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M11.5 4.5V9.5H6.5",
			stroke: "currentColor",
			strokeWidth: 1.2,
			strokeLinejoin: "round"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M16 13H9M14 16H9M11.5 4.5H18.5V20.5H6.5V9.5L11.5 4.5Z",
			stroke: "currentColor",
			strokeWidth: 1.2,
			strokeLinejoin: "round"
		})]
	});
}), ImageIcon = /* @__PURE__ */ (0, import_react.forwardRef)(function(props, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		"data-sanity-icon": "image",
		width: "1em",
		height: "1em",
		viewBox: "0 0 25 25",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		...props,
		ref,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M5.5 15.5L8.79289 12.2071C9.18342 11.8166 9.81658 11.8166 10.2071 12.2071L12.8867 14.8867C13.2386 15.2386 13.7957 15.2782 14.1938 14.9796L15.1192 14.2856C15.3601 14.1049 15.6696 14.0424 15.9618 14.1154L19.5 15M5.5 6.5H19.5V18.5H5.5V6.5ZM15.5 10.5C15.5 11.0523 15.0523 11.5 14.5 11.5C13.9477 11.5 13.5 11.0523 13.5 10.5C13.5 9.94772 13.9477 9.5 14.5 9.5C15.0523 9.5 15.5 9.94772 15.5 10.5Z",
			stroke: "currentColor",
			strokeWidth: 1.2,
			strokeLinejoin: "round"
		})
	});
}), StarIcon = /* @__PURE__ */ (0, import_react.forwardRef)(function(props, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		"data-sanity-icon": "star",
		width: "1em",
		height: "1em",
		viewBox: "0 0 25 25",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		...props,
		ref,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M12.5 5L14.3956 9.89092L19.6329 10.1824L15.5672 13.4966L16.9084 18.5676L12.5 15.725L8.09161 18.5676L9.43284 13.4966L5.36708 10.1824L10.6044 9.89092L12.5 5Z",
			stroke: "currentColor",
			strokeWidth: 1.2,
			strokeLinejoin: "round"
		})
	});
}), TagIcon = /* @__PURE__ */ (0, import_react.forwardRef)(function(props, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		"data-sanity-icon": "tag",
		width: "1em",
		height: "1em",
		viewBox: "0 0 25 25",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		...props,
		ref,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M12.5 20L5 20L5 12.5L12.5 5L20 12.5L12.5 20Z",
			stroke: "currentColor",
			strokeWidth: 1.2,
			strokeLinejoin: "round"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M11 15.5C11 16.3284 10.3284 17 9.5 17C8.67157 17 8 16.3284 8 15.5C8 14.6716 8.67157 14 9.5 14C10.3284 14 11 14.6716 11 15.5Z",
			stroke: "currentColor",
			strokeWidth: 1.2,
			strokeLinejoin: "round"
		})]
	});
}), UserIcon = /* @__PURE__ */ (0, import_react.forwardRef)(function(props, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		"data-sanity-icon": "user",
		width: "1em",
		height: "1em",
		viewBox: "0 0 25 25",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg",
		...props,
		ref,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			d: "M8 14.5C7 15 5.5 16 5.5 19.5H19.5C19.5 16 18.3416 15.1708 17 14.5C16 14 14 14 14 12.5C14 11 15 10.25 15 8.25C15 6.25 14 5.25 12.5 5.25C11 5.25 10 6.25 10 8.25C10 10.25 11 11 11 12.5C11 14 9 14 8 14.5Z",
			stroke: "currentColor",
			strokeWidth: 1.2,
			strokeLinejoin: "round"
		})
	});
});
//#endregion
//#region sanity/schemaTypes/index.ts
var schema = { types: [
	defineType({
		title: "Block Content",
		name: "blockContent",
		type: "array",
		of: [
			defineArrayMember({
				type: "block",
				styles: [
					{
						title: "Normal",
						value: "normal"
					},
					{
						title: "H1",
						value: "h1"
					},
					{
						title: "H2",
						value: "h2"
					},
					{
						title: "H3",
						value: "h3"
					},
					{
						title: "H4",
						value: "h4"
					},
					{
						title: "Quote",
						value: "blockquote"
					}
				],
				lists: [{
					title: "Bullet",
					value: "bullet"
				}],
				marks: {
					decorators: [{
						title: "Strong",
						value: "strong"
					}, {
						title: "Emphasis",
						value: "em"
					}],
					annotations: [{
						title: "URL",
						name: "link",
						type: "object",
						fields: [{
							title: "URL",
							name: "href",
							type: "url"
						}]
					}]
				}
			}),
			defineArrayMember({
				type: "code",
				title: "Code block",
				icon: CodeIcon,
				options: {
					withFilename: true,
					languageAlternatives: [
						{
							title: "JavaScript",
							value: "javascript"
						},
						{
							title: "TypeScript",
							value: "typescript"
						},
						{
							title: "JSON",
							value: "json"
						},
						{
							title: "HTML",
							value: "html"
						},
						{
							title: "CSS",
							value: "css"
						},
						{
							title: "Bash",
							value: "bash"
						},
						{
							title: "SQL",
							value: "sql"
						}
					],
					language: "javascript"
				}
			}),
			defineArrayMember({
				type: "image",
				icon: ImageIcon,
				options: { hotspot: true },
				fields: [
					{
						name: "alt",
						type: "string",
						title: "Alternative Text",
						description: "Important for accessibility and SEO"
					},
					{
						name: "caption",
						type: "string",
						title: "Caption",
						description: "Caption text to display below the image"
					},
					{
						name: "credit",
						type: "object",
						title: "Photo Credit",
						description: "Photographer or source attribution",
						fields: [{
							name: "name",
							type: "string",
							title: "Credit Text",
							description: "e.g., \"Photo by John Doe\" or \"Kyle Czajkowski\"",
							validation: (Rule) => Rule.required()
						}, {
							name: "url",
							type: "url",
							title: "Link URL (optional)",
							description: "Instagram, website, or other social media link"
						}]
					}
				]
			})
		]
	}),
	defineType({
		name: "category",
		title: "Category",
		type: "document",
		icon: TagIcon,
		fields: [
			defineField({
				name: "title",
				type: "string",
				validation: (Rule) => Rule.required()
			}),
			defineField({
				name: "slug",
				type: "slug",
				options: { source: "title" },
				validation: (Rule) => Rule.required()
			}),
			defineField({
				name: "description",
				type: "text"
			}),
			defineField({
				name: "color",
				type: "string",
				title: "Category Color",
				options: { list: [
					{
						title: "Green (Outdoor)",
						value: "green"
					},
					{
						title: "Blue (Tech)",
						value: "blue"
					},
					{
						title: "Orange (General)",
						value: "orange"
					},
					{
						title: "Purple (Personal)",
						value: "purple"
					}
				] },
				initialValue: "green"
			}),
			defineField({
				name: "isOutdoor",
				type: "boolean",
				title: "Outdoor Category",
				description: "Check if this is an outdoor/adventure category",
				initialValue: false
			})
		],
		preview: {
			select: {
				title: "title",
				color: "color",
				isOutdoor: "isOutdoor"
			},
			prepare(selection) {
				const { color, isOutdoor } = selection;
				return {
					...selection,
					subtitle: `${color} ${isOutdoor ? "• Outdoor" : "• Tech"}`
				};
			}
		}
	}),
	defineType({
		name: "post",
		title: "Post",
		type: "document",
		icon: DocumentTextIcon,
		fields: [
			defineField({
				name: "title",
				type: "string",
				validation: (Rule) => Rule.required()
			}),
			defineField({
				name: "slug",
				type: "slug",
				options: { source: "title" },
				validation: (Rule) => Rule.required()
			}),
			defineField({
				name: "author",
				type: "reference",
				to: { type: "author" }
			}),
			defineField({
				name: "excerpt",
				type: "text",
				title: "Brief Description",
				description: "This will appear in previews and search results",
				rows: 3
			}),
			defineField({
				name: "mainImage",
				type: "image",
				options: { hotspot: true },
				fields: [{
					name: "alt",
					type: "string",
					title: "Alternative text"
				}]
			}),
			defineField({
				name: "categories",
				type: "array",
				of: [defineArrayMember({
					type: "reference",
					to: { type: "category" }
				})],
				validation: (Rule) => Rule.required().min(1)
			}),
			defineField({
				name: "publishedAt",
				type: "datetime",
				validation: (Rule) => Rule.required()
			}),
			defineField({
				name: "featured",
				type: "boolean",
				title: "Featured Post",
				description: "Feature this post on the homepage",
				initialValue: false
			}),
			defineField({
				name: "outdoorData",
				type: "object",
				title: "Outdoor Activity Data",
				description: "Fill this out if this is an outdoor/adventure post",
				fields: [
					{
						name: "location",
						type: "string",
						title: "Location"
					},
					{
						name: "coordinates",
						type: "geopoint",
						title: "GPS Coordinates"
					},
					{
						name: "elevation",
						type: "number",
						title: "Elevation (ft)"
					},
					{
						name: "distance",
						type: "number",
						title: "Distance (miles)"
					},
					{
						name: "difficulty",
						type: "string",
						title: "Difficulty",
						options: { list: [
							{
								title: "Easy",
								value: "easy"
							},
							{
								title: "Moderate",
								value: "moderate"
							},
							{
								title: "Difficult",
								value: "difficult"
							},
							{
								title: "Expert",
								value: "expert"
							}
						] }
					}
				]
			}),
			defineField({
				name: "includeInRSS",
				type: "boolean",
				title: "Include in RSS Feed",
				description: "Toggle this when ready to notify RSS subscribers",
				initialValue: false
			}),
			defineField({
				name: "body",
				type: "blockContent"
			})
		],
		preview: {
			select: {
				title: "title",
				author: "author.name",
				media: "mainImage",
				categories: "categories"
			},
			prepare(selection) {
				const { author, categories } = selection;
				const categoryList = categories?.map((cat) => cat.title).join(", ") || "";
				return {
					...selection,
					subtitle: `${author ? `by ${author}` : ""} ${categoryList ? `• ${categoryList}` : ""}`
				};
			}
		}
	}),
	defineType({
		name: "author",
		title: "Author",
		type: "document",
		icon: UserIcon,
		fields: [
			defineField({
				name: "name",
				type: "string"
			}),
			defineField({
				name: "slug",
				type: "slug",
				options: { source: "name" }
			}),
			defineField({
				name: "image",
				type: "image",
				options: { hotspot: true }
			}),
			defineField({
				name: "bio",
				type: "array",
				of: [defineArrayMember({
					type: "block",
					styles: [{
						title: "Normal",
						value: "normal"
					}],
					lists: []
				})]
			})
		],
		preview: { select: {
			title: "name",
			media: "image"
		} }
	}),
	defineType({
		name: "tripReport",
		title: "Trip Report",
		type: "document",
		icon: ClipboardImageIcon,
		fields: [
			defineField({
				name: "title",
				type: "string",
				title: "Trip Title",
				validation: (Rule) => Rule.required()
			}),
			defineField({
				name: "slug",
				type: "slug",
				options: { source: "title" },
				validation: (Rule) => Rule.required()
			}),
			defineField({
				name: "contentType",
				type: "string",
				options: { list: [
					{
						title: "Trip Report",
						value: "trip-report"
					},
					{
						title: "Route Guide",
						value: "route-guide"
					},
					{
						title: "Gear Guide",
						value: "gear-guide"
					},
					{
						title: "Planning Guide",
						value: "planning-guide"
					},
					{
						title: "Skills Guide",
						value: "skills-guide"
					},
					{
						title: "Conditions Report",
						value: "conditions-report"
					}
				] }
			}),
			defineField({
				name: "gpxFile",
				title: "GPX Route File",
				type: "file",
				options: { accept: ".gpx" },
				description: "Upload GPX file for route tracking and elevation profile"
			}),
			defineField({
				name: "excerpt",
				type: "text",
				title: "Brief Description",
				rows: 3
			}),
			defineField({
				name: "achievement",
				type: "object",
				title: "Special Achievement",
				description: "Mark if this trip represents a special milestone or achievement",
				fields: [
					{
						name: "type",
						type: "string",
						title: "Achievement Type",
						options: { list: [
							{
								title: "Final Peak in Series",
								value: "final-peak"
							},
							{
								title: "First Peak/Route",
								value: "first-peak"
							},
							{
								title: "Personal Record",
								value: "personal-record"
							},
							{
								title: "Anniversary Climb",
								value: "anniversary"
							},
							{
								title: "Milestone Distance",
								value: "milestone-distance"
							},
							{
								title: "Highest Peak Achieved",
								value: "highest-peak"
							},
							{
								title: "Technical Achievement",
								value: "technical-achievement"
							},
							{
								title: "Group/Family Milestone",
								value: "group-achievement"
							},
							{
								title: "Weather Challenge",
								value: "weather-challenge"
							},
							{
								title: "Multi-Day Record",
								value: "multi-day-record"
							},
							{
								title: "Comeback/Return",
								value: "comeback"
							},
							{
								title: "Other",
								value: "other"
							}
						] }
					},
					{
						name: "title",
						type: "string",
						title: "Achievement Title",
						description: "e.g., \"All 58 Colorado 14ers Complete!\", \"First Technical Alpine Route\"",
						validation: (Rule) => Rule.max(100)
					},
					{
						name: "description",
						type: "text",
						title: "Achievement Details",
						description: "Optional: Additional context about this achievement",
						rows: 2
					}
				]
			}),
			defineField({
				name: "mainImage",
				type: "image",
				title: "Hero Image",
				options: { hotspot: true },
				fields: [{
					name: "alt",
					type: "string",
					title: "Alternative text"
				}]
			}),
			defineField({
				name: "date",
				type: "date",
				title: "Trip Date",
				validation: (Rule) => Rule.required()
			}),
			defineField({
				name: "location",
				type: "string",
				title: "Location/Peak Name",
				validation: (Rule) => Rule.required()
			}),
			defineField({
				name: "coordinates",
				type: "geopoint",
				title: "GPS Coordinates",
				description: "Pin the location on the map"
			}),
			defineField({
				name: "elevation",
				type: "number",
				title: "Peak Elevation (ft)",
				description: "Elevation in feet"
			}),
			defineField({
				name: "distance",
				type: "number",
				title: "Total Distance (miles)",
				description: "Round trip distance in miles"
			}),
			defineField({
				name: "elevationGain",
				type: "number",
				title: "Elevation Gain (ft)",
				description: "Total elevation gain in feet"
			}),
			defineField({
				name: "difficulty",
				type: "string",
				title: "Difficulty Rating",
				options: { list: [
					{
						title: "Easy",
						value: "easy"
					},
					{
						title: "Moderate",
						value: "moderate"
					},
					{
						title: "Difficult",
						value: "difficult"
					},
					{
						title: "Expert",
						value: "expert"
					}
				] }
			}),
			defineField({
				name: "activities",
				type: "array",
				title: "Activities",
				of: [{
					type: "string",
					options: { list: [
						{
							title: "Hiking",
							value: "hiking"
						},
						{
							title: "Backpacking",
							value: "backpacking"
						},
						{
							title: "Trail Running",
							value: "trail-running"
						},
						{
							title: "Backcountry Skiing",
							value: "backcountry-skiing"
						},
						{
							title: "Alpine Climbing",
							value: "alpine-climbing"
						},
						{
							title: "Rock Climbing",
							value: "rock-climbing"
						},
						{
							title: "Mountaineering",
							value: "mountaineering"
						}
					] }
				}]
			}),
			defineField({
				name: "weather",
				type: "object",
				title: "Weather Conditions",
				fields: [{
					name: "conditions",
					type: "string",
					title: "Weather",
					options: { list: [
						{
							title: "Clear",
							value: "clear"
						},
						{
							title: "Partly Cloudy",
							value: "partly-cloudy"
						},
						{
							title: "Overcast",
							value: "overcast"
						},
						{
							title: "Rain",
							value: "rain"
						},
						{
							title: "Snow",
							value: "snow"
						},
						{
							title: "Wind",
							value: "wind"
						},
						{
							title: "Storm",
							value: "storm"
						}
					] }
				}, {
					name: "temperature",
					type: "object",
					title: "Temperature Range",
					fields: [{
						name: "low",
						type: "number",
						title: "Low (°F)"
					}, {
						name: "high",
						type: "number",
						title: "High (°F)"
					}]
				}]
			}),
			defineField({
				name: "gearUsed",
				type: "array",
				title: "Key Gear Used",
				of: [{
					type: "object",
					fields: [
						{
							name: "name",
							type: "string",
							title: "Gear Name",
							validation: (Rule) => Rule.required()
						},
						{
							name: "category",
							type: "string",
							title: "Category",
							options: { list: [
								{
									title: "⛺ Shelter & Sleep System",
									value: "shelter"
								},
								{
									title: "👕 Clothing & Layers",
									value: "clothing"
								},
								{
									title: "🧭 Navigation & Safety",
									value: "navigation"
								},
								{
									title: "🍳 Food & Cooking",
									value: "food"
								},
								{
									title: "💧 Water & Hydration",
									value: "water"
								},
								{
									title: "🎒 Pack & Organization",
									value: "pack"
								},
								{
									title: "🔧 Tools & Repair",
									value: "tools"
								},
								{
									title: "📦 Other Gear",
									value: "other"
								}
							] },
							validation: (Rule) => Rule.required()
						},
						{
							name: "description",
							type: "text",
							title: "Why you liked it",
							description: "Short explanation of why this gear was valuable",
							rows: 2
						}
					],
					preview: { select: {
						title: "name",
						subtitle: "category"
					} }
				}],
				description: "List the most important gear for this trip with categories and notes"
			}),
			defineField({
				name: "routeNotes",
				type: "text",
				title: "Route Notes",
				description: "Important navigation notes, waypoints, hazards, etc.",
				rows: 4
			}),
			defineField({
				name: "includeInRSS",
				type: "boolean",
				title: "Include in RSS Feed",
				description: "Toggle this when ready to notify RSS subscribers",
				initialValue: false
			}),
			defineField({
				name: "body",
				type: "blockContent",
				title: "Trip Report Content"
			}),
			defineField({
				name: "author",
				type: "reference",
				to: { type: "author" }
			}),
			defineField({
				name: "publishedAt",
				type: "datetime"
			}),
			defineField({
				name: "tags",
				type: "array",
				title: "Tags",
				of: [defineArrayMember({
					type: "reference",
					to: { type: "category" }
				})]
			})
		],
		preview: {
			select: {
				title: "title",
				location: "location",
				date: "date",
				media: "mainImage"
			},
			prepare(selection) {
				const { location, date } = selection;
				return {
					...selection,
					subtitle: `${location} • ${date ? new Date(date).toLocaleDateString() : "No date"}`
				};
			}
		}
	}),
	defineType({
		name: "gearReview",
		title: "Gear Review",
		type: "document",
		icon: StarIcon,
		fields: [
			defineField({
				name: "title",
				type: "string",
				title: "Review Title",
				description: "e.g., \"Patagonia Houdini Jacket Review\"",
				validation: (Rule) => Rule.required()
			}),
			defineField({
				name: "slug",
				type: "slug",
				options: { source: "title" },
				validation: (Rule) => Rule.required()
			}),
			defineField({
				name: "author",
				type: "reference",
				to: { type: "author" },
				validation: (Rule) => Rule.required()
			}),
			defineField({
				name: "mainImage",
				type: "image",
				title: "Main Product Image",
				options: { hotspot: true },
				fields: [{
					name: "alt",
					type: "string",
					title: "Alternative text"
				}]
			}),
			defineField({
				name: "gallery",
				type: "array",
				title: "Additional Images",
				of: [defineArrayMember({
					type: "image",
					options: { hotspot: true },
					fields: [{
						name: "alt",
						type: "string",
						title: "Alternative text"
					}, {
						name: "caption",
						type: "string",
						title: "Caption"
					}]
				})]
			}),
			defineField({
				name: "gearName",
				type: "string",
				title: "Gear Name",
				description: "Official product name",
				validation: (Rule) => Rule.required()
			}),
			defineField({
				name: "brand",
				type: "string",
				title: "Brand",
				validation: (Rule) => Rule.required()
			}),
			defineField({
				name: "model",
				type: "string",
				title: "Model/Version"
			}),
			defineField({
				name: "price",
				type: "number",
				title: "Price (USD)",
				description: "Price at time of review"
			}),
			defineField({
				name: "overallRating",
				type: "number",
				title: "Overall Rating",
				description: "Rating out of 5",
				validation: (Rule) => Rule.min(1).max(5).required(),
				options: {
					layout: "radio",
					list: [
						{
							title: "1 - Poor",
							value: 1
						},
						{
							title: "2 - Fair",
							value: 2
						},
						{
							title: "3 - Good",
							value: 3
						},
						{
							title: "4 - Very Good",
							value: 4
						},
						{
							title: "5 - Excellent",
							value: 5
						}
					]
				}
			}),
			defineField({
				name: "gearCategories",
				type: "array",
				title: "Gear Categories",
				of: [defineArrayMember({
					type: "reference",
					to: { type: "category" }
				})],
				description: "What type of gear is this? (Hiking, Camping, Climbing, etc.)"
			}),
			defineField({
				name: "seasons",
				type: "array",
				title: "Recommended Seasons",
				of: [{ type: "string" }],
				options: { list: [
					{
						title: "Spring",
						value: "spring"
					},
					{
						title: "Summer",
						value: "summer"
					},
					{
						title: "Fall",
						value: "fall"
					},
					{
						title: "Winter",
						value: "winter"
					},
					{
						title: "Year-round",
						value: "year-round"
					}
				] }
			}),
			defineField({
				name: "activities",
				type: "array",
				title: "Recommended Activities",
				of: [{ type: "string" }],
				options: { list: [
					{
						title: "Hiking",
						value: "hiking"
					},
					{
						title: "Backpacking",
						value: "backpacking"
					},
					{
						title: "Climbing",
						value: "climbing"
					},
					{
						title: "Mountaineering",
						value: "mountaineering"
					},
					{
						title: "Trail Running",
						value: "trail-running"
					},
					{
						title: "Camping",
						value: "camping"
					},
					{
						title: "Skiing",
						value: "skiing"
					},
					{
						title: "Snowboarding",
						value: "snowboarding"
					}
				] }
			}),
			defineField({
				name: "excerpt",
				type: "text",
				title: "Short Summary",
				description: "Brief summary of your review",
				validation: (Rule) => Rule.max(200)
			}),
			defineField({
				name: "pros",
				type: "array",
				title: "Pros",
				of: [{ type: "string" }],
				description: "What you liked about this gear"
			}),
			defineField({
				name: "cons",
				type: "array",
				title: "Cons",
				of: [{ type: "string" }],
				description: "What could be improved"
			}),
			defineField({
				name: "detailedRatings",
				type: "object",
				title: "Detailed Ratings",
				fields: [
					{
						name: "durability",
						type: "number",
						title: "Durability",
						validation: (Rule) => Rule.min(1).max(5),
						options: {
							layout: "radio",
							list: [
								1,
								2,
								3,
								4,
								5
							]
						}
					},
					{
						name: "comfort",
						type: "number",
						title: "Comfort",
						validation: (Rule) => Rule.min(1).max(5),
						options: {
							layout: "radio",
							list: [
								1,
								2,
								3,
								4,
								5
							]
						}
					},
					{
						name: "performance",
						type: "number",
						title: "Performance",
						validation: (Rule) => Rule.min(1).max(5),
						options: {
							layout: "radio",
							list: [
								1,
								2,
								3,
								4,
								5
							]
						}
					},
					{
						name: "valueForMoney",
						type: "number",
						title: "Value for Money",
						validation: (Rule) => Rule.min(1).max(5),
						options: {
							layout: "radio",
							list: [
								1,
								2,
								3,
								4,
								5
							]
						}
					}
				]
			}),
			defineField({
				name: "specifications",
				type: "object",
				title: "Technical Specifications",
				fields: [
					{
						name: "weight",
						type: "string",
						title: "Weight",
						description: "e.g., \"1.2 lbs\" or \"540g\""
					},
					{
						name: "dimensions",
						type: "string",
						title: "Dimensions"
					},
					{
						name: "materials",
						type: "array",
						title: "Materials",
						of: [{ type: "string" }]
					},
					{
						name: "features",
						type: "array",
						title: "Key Features",
						of: [{ type: "string" }]
					}
				]
			}),
			defineField({
				name: "testingConditions",
				type: "text",
				title: "Testing Conditions",
				description: "Where and how you tested this gear"
			}),
			defineField({
				name: "timeUsed",
				type: "string",
				title: "Time Used",
				description: "How long you've been using this gear",
				options: { list: [
					{
						title: "Less than 1 month",
						value: "<1-month"
					},
					{
						title: "1-6 months",
						value: "1-6-months"
					},
					{
						title: "6 months - 1 year",
						value: "6-12-months"
					},
					{
						title: "1-2 years",
						value: "1-2-years"
					},
					{
						title: "2+ years",
						value: "2+-years"
					}
				] }
			}),
			defineField({
				name: "purchaseLinks",
				type: "array",
				title: "Where to Buy",
				of: [defineArrayMember({
					type: "object",
					fields: [
						{
							name: "retailer",
							type: "string",
							title: "Retailer Name"
						},
						{
							name: "url",
							type: "url",
							title: "Purchase Link"
						},
						{
							name: "currentPrice",
							type: "number",
							title: "Current Price"
						}
					]
				})]
			}),
			defineField({
				name: "recommendedFor",
				type: "text",
				title: "Recommended For",
				description: "Who would you recommend this gear to?"
			}),
			defineField({
				name: "alternatives",
				type: "text",
				title: "Alternatives to Consider",
				description: "Similar products worth considering"
			}),
			defineField({
				name: "includeInRSS",
				type: "boolean",
				title: "Include in RSS Feed",
				description: "Toggle this when ready to notify RSS subscribers",
				initialValue: false
			}),
			defineField({
				name: "body",
				type: "blockContent",
				title: "Detailed Review",
				description: "Your comprehensive review"
			}),
			defineField({
				name: "publishedAt",
				type: "datetime",
				title: "Published Date",
				validation: (Rule) => Rule.required()
			}),
			defineField({
				name: "updatedAt",
				type: "datetime",
				title: "Last Updated",
				description: "When you last updated this review"
			})
		],
		preview: {
			select: {
				title: "gearName",
				brand: "brand",
				rating: "overallRating",
				media: "mainImage"
			},
			prepare(selection) {
				const { brand, rating } = selection;
				const stars = "★".repeat(rating || 0) + "☆".repeat(5 - (rating || 0));
				return {
					...selection,
					subtitle: `${brand} • ${stars} (${rating}/5)`
				};
			}
		}
	}),
	defineType({
		name: "guide",
		title: "Guide",
		type: "document",
		icon: DocumentIcon,
		fields: [
			defineField({
				name: "title",
				type: "string",
				title: "Guide Title",
				validation: (Rule) => Rule.required()
			}),
			defineField({
				name: "slug",
				type: "slug",
				options: { source: "title" },
				validation: (Rule) => Rule.required()
			}),
			defineField({
				name: "guideType",
				type: "string",
				title: "Guide Type",
				options: { list: [
					{
						title: "Route Guide",
						value: "route-guide"
					},
					{
						title: "Gear Guide",
						value: "gear-guide"
					},
					{
						title: "Planning Guide",
						value: "planning-guide"
					},
					{
						title: "Skills Guide",
						value: "skills-guide"
					}
				] },
				validation: (Rule) => Rule.required()
			}),
			defineField({
				name: "excerpt",
				type: "text",
				title: "Brief Description",
				rows: 3,
				validation: (Rule) => Rule.required()
			}),
			defineField({
				name: "publishedAt",
				type: "datetime",
				title: "Published at",
				description: "This can be used to schedule post for publishing"
			}),
			defineField({
				name: "mainImage",
				type: "image",
				title: "Main image",
				options: { hotspot: true },
				fields: [{
					name: "alt",
					type: "string",
					title: "Alternative Text"
				}]
			}),
			defineField({
				name: "body",
				type: "blockContent",
				title: "Body"
			}),
			defineField({
				name: "activities",
				type: "array",
				title: "Activities",
				description: "Activities this guide covers",
				of: [{
					type: "string",
					options: { list: [
						{
							title: "Hiking",
							value: "hiking"
						},
						{
							title: "Backpacking",
							value: "backpacking"
						},
						{
							title: "Trail Running",
							value: "trail-running"
						},
						{
							title: "Backcountry Skiing",
							value: "backcountry-skiing"
						},
						{
							title: "Alpine Climbing",
							value: "alpine-climbing"
						},
						{
							title: "Rock Climbing",
							value: "rock-climbing"
						},
						{
							title: "Mountaineering",
							value: "mountaineering"
						},
						{
							title: "Ski Touring",
							value: "ski-touring"
						},
						{
							title: "Winter Hiking",
							value: "winter-hiking"
						}
					] }
				}]
			}),
			defineField({
				name: "tags",
				type: "array",
				title: "Tags",
				description: "Tags for categorization and search",
				of: [{
					type: "reference",
					to: { type: "category" }
				}]
			}),
			defineField({
				name: "routeNotes",
				type: "text",
				title: "Planning Notes",
				description: "Key information, tips, warnings, or planning notes",
				rows: 4
			}),
			defineField({
				name: "routeInfo",
				type: "object",
				title: "Route Information",
				description: "Fill this out for route guides",
				hidden: ({ document }) => document?.guideType !== "route-guide",
				fields: [
					{
						name: "location",
						type: "string",
						title: "Location",
						description: "General area (e.g., \"Mount Washington, New Hampshire\")"
					},
					{
						name: "trailhead",
						type: "string",
						title: "Trailhead",
						description: "Specific starting point"
					},
					{
						name: "coordinates",
						type: "object",
						title: "GPS Coordinates",
						description: "Trailhead or key location coordinates",
						fields: [{
							name: "lat",
							type: "number",
							title: "Latitude"
						}, {
							name: "lng",
							type: "number",
							title: "Longitude"
						}]
					},
					{
						name: "distance",
						type: "number",
						title: "Distance (miles)",
						description: "Total trip distance in miles"
					},
					{
						name: "elevation",
						type: "number",
						title: "Peak Elevation (ft)",
						description: "Highest point elevation in feet"
					},
					{
						name: "elevationGain",
						type: "number",
						title: "Elevation Gain (ft)",
						description: "Total elevation gain in feet"
					},
					{
						name: "difficulty",
						type: "string",
						title: "Difficulty Rating",
						options: { list: [
							{
								title: "Easy",
								value: "easy"
							},
							{
								title: "Moderate",
								value: "moderate"
							},
							{
								title: "Difficult",
								value: "difficult"
							},
							{
								title: "Expert",
								value: "expert"
							}
						] }
					},
					{
						name: "seasons",
						type: "array",
						title: "Best Seasons",
						description: "When is this route best?",
						of: [{
							type: "string",
							options: { list: [
								{
									title: "Spring",
									value: "spring"
								},
								{
									title: "Summer",
									value: "summer"
								},
								{
									title: "Fall",
									value: "fall"
								},
								{
									title: "Winter",
									value: "winter"
								}
							] }
						}]
					}
				]
			}),
			defineField({
				name: "gpxFile",
				title: "GPX Route File",
				type: "file",
				description: "Upload GPX file for route tracking and elevation profile",
				hidden: ({ document }) => document?.guideType !== "route-guide",
				options: { accept: ".gpx" }
			}),
			defineField({
				name: "weather",
				type: "object",
				title: "Weather Information",
				description: "Typical weather conditions and considerations",
				hidden: ({ document }) => document?.guideType !== "route-guide",
				fields: [{
					name: "conditions",
					type: "string",
					title: "Typical Conditions",
					options: { list: [
						{
							title: "Clear",
							value: "clear"
						},
						{
							title: "Partly Cloudy",
							value: "partly-cloudy"
						},
						{
							title: "Variable",
							value: "variable"
						},
						{
							title: "Afternoon Storms",
							value: "afternoon-storms"
						},
						{
							title: "High Winds",
							value: "high-winds"
						},
						{
							title: "Snow Possible",
							value: "snow-possible"
						}
					] }
				}, {
					name: "temperature",
					type: "object",
					title: "Temperature Range",
					fields: [{
						name: "low",
						type: "number",
						title: "Typical Low (°F)"
					}, {
						name: "high",
						type: "number",
						title: "Typical High (°F)"
					}]
				}]
			}),
			defineField({
				name: "gearUsed",
				type: "array",
				title: "Key Gear & Equipment",
				description: "Essential and recommended gear for this guide",
				of: [{
					type: "object",
					fields: [
						{
							name: "name",
							type: "string",
							title: "Gear Name",
							validation: (Rule) => Rule.required()
						},
						{
							name: "category",
							type: "string",
							title: "Category",
							options: { list: [
								{
									title: "Footwear",
									value: "footwear"
								},
								{
									title: "Clothing",
									value: "clothing"
								},
								{
									title: "Backpack",
									value: "backpack"
								},
								{
									title: "Shelter",
									value: "shelter"
								},
								{
									title: "Navigation",
									value: "navigation"
								},
								{
									title: "Safety",
									value: "safety"
								},
								{
									title: "Cooking",
									value: "cooking"
								},
								{
									title: "Hydration",
									value: "hydration"
								},
								{
									title: "Electronics",
									value: "electronics"
								},
								{
									title: "Climbing",
									value: "climbing"
								},
								{
									title: "Ski Gear",
									value: "ski-gear"
								},
								{
									title: "Winter Gear",
									value: "winter-gear"
								}
							] }
						},
						{
							name: "description",
							type: "text",
							title: "Description/Notes",
							description: "Why this gear is recommended or usage notes",
							rows: 2
						},
						{
							name: "essential",
							type: "boolean",
							title: "Essential Item",
							description: "Mark if this gear is absolutely necessary",
							initialValue: false
						}
					]
				}]
			}),
			defineField({
				name: "achievement",
				type: "object",
				title: "Special Achievement",
				description: "Mark if this guide represents a special milestone or achievement",
				fields: [
					{
						name: "type",
						type: "string",
						title: "Achievement Type",
						options: { list: [
							{
								title: "Final Peak in Series",
								value: "final-peak"
							},
							{
								title: "First Peak/Route",
								value: "first-peak"
							},
							{
								title: "Personal Record",
								value: "personal-record"
							},
							{
								title: "Technical Achievement",
								value: "technical-achievement"
							},
							{
								title: "Milestone Route",
								value: "milestone-route"
							}
						] }
					},
					{
						name: "title",
						type: "string",
						title: "Achievement Title"
					},
					{
						name: "description",
						type: "text",
						title: "Description",
						rows: 2
					}
				]
			}),
			defineField({
				name: "author",
				type: "reference",
				title: "Author",
				to: [{ type: "author" }]
			}),
			defineField({
				name: "includeInRSS",
				type: "boolean",
				title: "Include in RSS Feed",
				description: "Toggle this when ready to notify RSS subscribers",
				initialValue: false
			})
		],
		preview: {
			select: {
				title: "title",
				guideType: "guideType",
				media: "mainImage"
			},
			prepare(selection) {
				const { title, guideType } = selection;
				return {
					title,
					subtitle: {
						"route-guide": "Route Guide",
						"gear-guide": "Gear Guide",
						"planning-guide": "Planning Guide",
						"skills-guide": "Skills Guide"
					}[guideType] || guideType,
					media: selection.media
				};
			}
		}
	})
] };
//#endregion
//#region sanity/structure.ts
var structure = (S) => S.list().title("Blog").items([
	S.documentTypeListItem("post").title("Posts"),
	S.documentTypeListItem("category").title("Categories"),
	S.documentTypeListItem("author").title("Authors"),
	S.divider(),
	...S.documentTypeListItems().filter((item) => item.getId() && ![
		"post",
		"category",
		"author"
	].includes(item.getId()))
]);
//#endregion
//#region sanity.config.ts
/**
* This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
*/
var sanity_config_default = defineConfig({
	basePath: "/studio",
	projectId,
	dataset,
	schema,
	plugins: [
		structureTool({ structure }),
		visionTool({ defaultApiVersion: apiVersion }),
		codeInput()
	]
});
//#endregion
export { sanity_config_default as default };
