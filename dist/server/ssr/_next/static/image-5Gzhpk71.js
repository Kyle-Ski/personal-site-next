import { G as __commonJSMin, V as require_react, Y as __toESM, n as require_jsx_runtime, q as __exportAll, t as require_react_dom } from "../../index.js";
//#endregion
//#region node_modules/vinext/dist/shims/image-config.js
var import_ipaddr = /* @__PURE__ */ __toESM((/* @__PURE__ */ __commonJSMin(((exports, module) => {
	(function(root) {
		"use strict";
		const ipv4Part = "(0?\\d+|0x[a-f0-9]+)";
		const ipv4Regexes = {
			fourOctet: new RegExp(`^${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}$`, "i"),
			threeOctet: new RegExp(`^${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}$`, "i"),
			twoOctet: new RegExp(`^${ipv4Part}\\.${ipv4Part}$`, "i"),
			longValue: new RegExp(`^${ipv4Part}$`, "i")
		};
		const octalRegex = new RegExp(`^0[0-7]+$`, "i");
		const hexRegex = new RegExp(`^0x[a-f0-9]+$`, "i");
		const zoneIndex = "%[0-9a-z]{1,}";
		const ipv6Part = "(?:[0-9a-f]+::?)+";
		const ipv6Regexes = {
			zoneIndex: new RegExp(zoneIndex, "i"),
			"native": new RegExp(`^(::)?(${ipv6Part})?([0-9a-f]+)?(::)?(${zoneIndex})?$`, "i"),
			deprecatedTransitional: new RegExp(`^(?:::)(${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}(${zoneIndex})?)$`, "i"),
			transitional: new RegExp(`^((?:${ipv6Part})|(?:::)(?:${ipv6Part})?)${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}\\.${ipv4Part}(${zoneIndex})?$`, "i")
		};
		function expandIPv6(string, parts) {
			if (string.indexOf("::") !== string.lastIndexOf("::")) return null;
			let colonCount = 0;
			let lastColon = -1;
			let zoneId = (string.match(ipv6Regexes.zoneIndex) || [])[0];
			let replacement, replacementCount;
			if (zoneId) {
				zoneId = zoneId.substring(1);
				string = string.replace(/%.+$/, "");
			}
			while ((lastColon = string.indexOf(":", lastColon + 1)) >= 0) colonCount++;
			if (string.substr(0, 2) === "::") colonCount--;
			if (string.substr(-2, 2) === "::") colonCount--;
			if (colonCount > parts) return null;
			replacementCount = parts - colonCount;
			replacement = ":";
			while (replacementCount--) replacement += "0:";
			string = string.replace("::", replacement);
			if (string[0] === ":") string = string.slice(1);
			if (string[string.length - 1] === ":") string = string.slice(0, -1);
			parts = (function() {
				const ref = string.split(":");
				const results = [];
				for (let i = 0; i < ref.length; i++) results.push(parseInt(ref[i], 16));
				return results;
			})();
			return {
				parts,
				zoneId
			};
		}
		function matchCIDR(first, second, partSize, cidrBits) {
			if (first.length !== second.length) throw new Error("ipaddr: cannot match CIDR for objects with different lengths");
			let part = 0;
			let shift;
			while (cidrBits > 0) {
				shift = partSize - cidrBits;
				if (shift < 0) shift = 0;
				if (first[part] >> shift !== second[part] >> shift) return false;
				cidrBits -= partSize;
				part += 1;
			}
			return true;
		}
		function parseIntAuto(string) {
			if (hexRegex.test(string)) return parseInt(string, 16);
			if (string[0] === "0" && !isNaN(parseInt(string[1], 10))) {
				if (octalRegex.test(string)) return parseInt(string, 8);
				throw new Error(`ipaddr: cannot parse ${string} as octal`);
			}
			return parseInt(string, 10);
		}
		function padPart(part, length) {
			while (part.length < length) part = `0${part}`;
			return part;
		}
		const ipaddr = {};
		ipaddr.IPv4 = (function() {
			function IPv4(octets) {
				if (octets.length !== 4) throw new Error("ipaddr: ipv4 octet count should be 4");
				let i, octet;
				for (i = 0; i < octets.length; i++) {
					octet = octets[i];
					if (!(0 <= octet && octet <= 255)) throw new Error("ipaddr: ipv4 octet should fit in 8 bits");
				}
				this.octets = octets;
			}
			IPv4.prototype.SpecialRanges = {
				unspecified: [[new IPv4([
					0,
					0,
					0,
					0
				]), 8]],
				broadcast: [[new IPv4([
					255,
					255,
					255,
					255
				]), 32]],
				multicast: [[new IPv4([
					224,
					0,
					0,
					0
				]), 4]],
				linkLocal: [[new IPv4([
					169,
					254,
					0,
					0
				]), 16]],
				loopback: [[new IPv4([
					127,
					0,
					0,
					0
				]), 8]],
				carrierGradeNat: [[new IPv4([
					100,
					64,
					0,
					0
				]), 10]],
				"private": [
					[new IPv4([
						10,
						0,
						0,
						0
					]), 8],
					[new IPv4([
						172,
						16,
						0,
						0
					]), 12],
					[new IPv4([
						192,
						168,
						0,
						0
					]), 16]
				],
				reserved: [
					[new IPv4([
						192,
						0,
						0,
						0
					]), 24],
					[new IPv4([
						192,
						0,
						2,
						0
					]), 24],
					[new IPv4([
						192,
						88,
						99,
						0
					]), 24],
					[new IPv4([
						198,
						18,
						0,
						0
					]), 15],
					[new IPv4([
						198,
						51,
						100,
						0
					]), 24],
					[new IPv4([
						203,
						0,
						113,
						0
					]), 24],
					[new IPv4([
						240,
						0,
						0,
						0
					]), 4]
				],
				as112: [[new IPv4([
					192,
					175,
					48,
					0
				]), 24], [new IPv4([
					192,
					31,
					196,
					0
				]), 24]],
				amt: [[new IPv4([
					192,
					52,
					193,
					0
				]), 24]]
			};
			IPv4.prototype.kind = function() {
				return "ipv4";
			};
			IPv4.prototype.match = function(other, cidrRange) {
				let ref;
				if (cidrRange === void 0) {
					ref = other;
					other = ref[0];
					cidrRange = ref[1];
				}
				if (other.kind() !== "ipv4") throw new Error("ipaddr: cannot match ipv4 address with non-ipv4 one");
				return matchCIDR(this.octets, other.octets, 8, cidrRange);
			};
			IPv4.prototype.prefixLengthFromSubnetMask = function() {
				let cidr = 0;
				let stop = false;
				const zerotable = {
					0: 8,
					128: 7,
					192: 6,
					224: 5,
					240: 4,
					248: 3,
					252: 2,
					254: 1,
					255: 0
				};
				let i, octet, zeros;
				for (i = 3; i >= 0; i -= 1) {
					octet = this.octets[i];
					if (octet in zerotable) {
						zeros = zerotable[octet];
						if (stop && zeros !== 0) return null;
						if (zeros !== 8) stop = true;
						cidr += zeros;
					} else return null;
				}
				return 32 - cidr;
			};
			IPv4.prototype.range = function() {
				return ipaddr.subnetMatch(this, this.SpecialRanges);
			};
			IPv4.prototype.toByteArray = function() {
				return this.octets.slice(0);
			};
			IPv4.prototype.toIPv4MappedAddress = function() {
				return ipaddr.IPv6.parse(`::ffff:${this.toString()}`);
			};
			IPv4.prototype.toNormalizedString = function() {
				return this.toString();
			};
			IPv4.prototype.toString = function() {
				return this.octets.join(".");
			};
			return IPv4;
		})();
		ipaddr.IPv4.broadcastAddressFromCIDR = function(string) {
			try {
				const cidr = this.parseCIDR(string);
				const ipInterfaceOctets = cidr[0].toByteArray();
				const subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
				const octets = [];
				let i = 0;
				while (i < 4) {
					octets.push(parseInt(ipInterfaceOctets[i], 10) | parseInt(subnetMaskOctets[i], 10) ^ 255);
					i++;
				}
				return new this(octets);
			} catch (e) {
				throw new Error("ipaddr: the address does not have IPv4 CIDR format");
			}
		};
		ipaddr.IPv4.isIPv4 = function(string) {
			return this.parser(string) !== null;
		};
		ipaddr.IPv4.isValid = function(string) {
			try {
				new this(this.parser(string));
				return true;
			} catch (e) {
				return false;
			}
		};
		ipaddr.IPv4.isValidCIDR = function(string) {
			try {
				this.parseCIDR(string);
				return true;
			} catch (e) {
				return false;
			}
		};
		ipaddr.IPv4.isValidFourPartDecimal = function(string) {
			if (ipaddr.IPv4.isValid(string) && string.match(/^(0|[1-9]\d*)(\.(0|[1-9]\d*)){3}$/)) return true;
			else return false;
		};
		ipaddr.IPv4.isValidCIDRFourPartDecimal = function(string) {
			const match = string.match(/^(.+)\/(\d+)$/);
			if (!ipaddr.IPv4.isValidCIDR(string) || !match) return false;
			return ipaddr.IPv4.isValidFourPartDecimal(match[1]);
		};
		ipaddr.IPv4.networkAddressFromCIDR = function(string) {
			let cidr, i, ipInterfaceOctets, octets, subnetMaskOctets;
			try {
				cidr = this.parseCIDR(string);
				ipInterfaceOctets = cidr[0].toByteArray();
				subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
				octets = [];
				i = 0;
				while (i < 4) {
					octets.push(parseInt(ipInterfaceOctets[i], 10) & parseInt(subnetMaskOctets[i], 10));
					i++;
				}
				return new this(octets);
			} catch (e) {
				throw new Error("ipaddr: the address does not have IPv4 CIDR format");
			}
		};
		ipaddr.IPv4.parse = function(string) {
			const parts = this.parser(string);
			if (parts === null) throw new Error("ipaddr: string is not formatted like an IPv4 Address");
			return new this(parts);
		};
		ipaddr.IPv4.parseCIDR = function(string) {
			let match;
			if (match = string.match(/^(.+)\/(\d+)$/)) {
				const maskLength = parseInt(match[2]);
				if (maskLength >= 0 && maskLength <= 32) {
					const parsed = [this.parse(match[1]), maskLength];
					Object.defineProperty(parsed, "toString", { value: function() {
						return this.join("/");
					} });
					return parsed;
				}
			}
			throw new Error("ipaddr: string is not formatted like an IPv4 CIDR range");
		};
		ipaddr.IPv4.parser = function(string) {
			let match, part, value;
			if (match = string.match(ipv4Regexes.fourOctet)) return (function() {
				const ref = match.slice(1, 6);
				const results = [];
				for (let i = 0; i < ref.length; i++) {
					part = ref[i];
					results.push(parseIntAuto(part));
				}
				return results;
			})();
			else if (match = string.match(ipv4Regexes.longValue)) {
				value = parseIntAuto(match[1]);
				if (value > 4294967295 || value < 0) throw new Error("ipaddr: address outside defined range");
				return (function() {
					const results = [];
					let shift;
					for (shift = 0; shift <= 24; shift += 8) results.push(value >> shift & 255);
					return results;
				})().reverse();
			} else if (match = string.match(ipv4Regexes.twoOctet)) return (function() {
				const ref = match.slice(1, 4);
				const results = [];
				value = parseIntAuto(ref[1]);
				if (value > 16777215 || value < 0) throw new Error("ipaddr: address outside defined range");
				results.push(parseIntAuto(ref[0]));
				results.push(value >> 16 & 255);
				results.push(value >> 8 & 255);
				results.push(value & 255);
				return results;
			})();
			else if (match = string.match(ipv4Regexes.threeOctet)) return (function() {
				const ref = match.slice(1, 5);
				const results = [];
				value = parseIntAuto(ref[2]);
				if (value > 65535 || value < 0) throw new Error("ipaddr: address outside defined range");
				results.push(parseIntAuto(ref[0]));
				results.push(parseIntAuto(ref[1]));
				results.push(value >> 8 & 255);
				results.push(value & 255);
				return results;
			})();
			else return null;
		};
		ipaddr.IPv4.subnetMaskFromPrefixLength = function(prefix) {
			prefix = parseInt(prefix);
			if (prefix < 0 || prefix > 32) throw new Error("ipaddr: invalid IPv4 prefix length");
			const octets = [
				0,
				0,
				0,
				0
			];
			let j = 0;
			const filledOctetCount = Math.floor(prefix / 8);
			while (j < filledOctetCount) {
				octets[j] = 255;
				j++;
			}
			if (filledOctetCount < 4) octets[filledOctetCount] = Math.pow(2, prefix % 8) - 1 << 8 - prefix % 8;
			return new this(octets);
		};
		ipaddr.IPv6 = (function() {
			function IPv6(parts, zoneId) {
				let i, part;
				if (parts.length === 16) {
					this.parts = [];
					for (i = 0; i <= 14; i += 2) this.parts.push(parts[i] << 8 | parts[i + 1]);
				} else if (parts.length === 8) this.parts = parts;
				else throw new Error("ipaddr: ipv6 part count should be 8 or 16");
				for (i = 0; i < this.parts.length; i++) {
					part = this.parts[i];
					if (!(0 <= part && part <= 65535)) throw new Error("ipaddr: ipv6 part should fit in 16 bits");
				}
				if (zoneId) this.zoneId = zoneId;
			}
			IPv6.prototype.SpecialRanges = {
				unspecified: [new IPv6([
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					0
				]), 128],
				linkLocal: [new IPv6([
					65152,
					0,
					0,
					0,
					0,
					0,
					0,
					0
				]), 10],
				multicast: [new IPv6([
					65280,
					0,
					0,
					0,
					0,
					0,
					0,
					0
				]), 8],
				loopback: [new IPv6([
					0,
					0,
					0,
					0,
					0,
					0,
					0,
					1
				]), 128],
				uniqueLocal: [new IPv6([
					64512,
					0,
					0,
					0,
					0,
					0,
					0,
					0
				]), 7],
				ipv4Mapped: [new IPv6([
					0,
					0,
					0,
					0,
					0,
					65535,
					0,
					0
				]), 96],
				deprecatedSiteLocal: [new IPv6([
					65216,
					0,
					0,
					0,
					0,
					0,
					0,
					0
				]), 10],
				discard: [new IPv6([
					256,
					0,
					0,
					0,
					0,
					0,
					0,
					0
				]), 64],
				rfc6145: [new IPv6([
					0,
					0,
					0,
					0,
					65535,
					0,
					0,
					0
				]), 96],
				rfc6052: [[new IPv6([
					100,
					65435,
					0,
					0,
					0,
					0,
					0,
					0
				]), 96], [new IPv6([
					100,
					65435,
					1,
					0,
					0,
					0,
					0,
					0
				]), 48]],
				"6to4": [new IPv6([
					8194,
					0,
					0,
					0,
					0,
					0,
					0,
					0
				]), 16],
				teredo: [new IPv6([
					8193,
					0,
					0,
					0,
					0,
					0,
					0,
					0
				]), 32],
				benchmarking: [new IPv6([
					8193,
					2,
					0,
					0,
					0,
					0,
					0,
					0
				]), 48],
				amt: [new IPv6([
					8193,
					3,
					0,
					0,
					0,
					0,
					0,
					0
				]), 32],
				as112v6: [[new IPv6([
					8193,
					4,
					274,
					0,
					0,
					0,
					0,
					0
				]), 48], [new IPv6([
					9760,
					79,
					32768,
					0,
					0,
					0,
					0,
					0
				]), 48]],
				deprecatedOrchid: [new IPv6([
					8193,
					16,
					0,
					0,
					0,
					0,
					0,
					0
				]), 28],
				orchid2: [new IPv6([
					8193,
					32,
					0,
					0,
					0,
					0,
					0,
					0
				]), 28],
				droneRemoteIdProtocolEntityTags: [new IPv6([
					8193,
					48,
					0,
					0,
					0,
					0,
					0,
					0
				]), 28],
				segmentRouting: [new IPv6([
					24320,
					0,
					0,
					0,
					0,
					0,
					0,
					0
				]), 16],
				reserved: [
					[new IPv6([
						8193,
						0,
						0,
						0,
						0,
						0,
						0,
						0
					]), 23],
					[new IPv6([
						8193,
						3512,
						0,
						0,
						0,
						0,
						0,
						0
					]), 32],
					[new IPv6([
						16383,
						0,
						0,
						0,
						0,
						0,
						0,
						0
					]), 20]
				]
			};
			IPv6.prototype.isIPv4MappedAddress = function() {
				return this.range() === "ipv4Mapped";
			};
			IPv6.prototype.kind = function() {
				return "ipv6";
			};
			IPv6.prototype.match = function(other, cidrRange) {
				let ref;
				if (cidrRange === void 0) {
					ref = other;
					other = ref[0];
					cidrRange = ref[1];
				}
				if (other.kind() !== "ipv6") throw new Error("ipaddr: cannot match ipv6 address with non-ipv6 one");
				return matchCIDR(this.parts, other.parts, 16, cidrRange);
			};
			IPv6.prototype.prefixLengthFromSubnetMask = function() {
				let cidr = 0;
				let stop = false;
				const zerotable = {
					0: 16,
					32768: 15,
					49152: 14,
					57344: 13,
					61440: 12,
					63488: 11,
					64512: 10,
					65024: 9,
					65280: 8,
					65408: 7,
					65472: 6,
					65504: 5,
					65520: 4,
					65528: 3,
					65532: 2,
					65534: 1,
					65535: 0
				};
				let part, zeros;
				for (let i = 7; i >= 0; i -= 1) {
					part = this.parts[i];
					if (part in zerotable) {
						zeros = zerotable[part];
						if (stop && zeros !== 0) return null;
						if (zeros !== 16) stop = true;
						cidr += zeros;
					} else return null;
				}
				return 128 - cidr;
			};
			IPv6.prototype.range = function() {
				return ipaddr.subnetMatch(this, this.SpecialRanges);
			};
			IPv6.prototype.toByteArray = function() {
				let part;
				const bytes = [];
				const ref = this.parts;
				for (let i = 0; i < ref.length; i++) {
					part = ref[i];
					bytes.push(part >> 8);
					bytes.push(part & 255);
				}
				return bytes;
			};
			IPv6.prototype.toFixedLengthString = function() {
				const addr = (function() {
					const results = [];
					for (let i = 0; i < this.parts.length; i++) results.push(padPart(this.parts[i].toString(16), 4));
					return results;
				}).call(this).join(":");
				let suffix = "";
				if (this.zoneId) suffix = `%${this.zoneId}`;
				return addr + suffix;
			};
			IPv6.prototype.toIPv4Address = function() {
				if (!this.isIPv4MappedAddress()) throw new Error("ipaddr: trying to convert a generic ipv6 address to ipv4");
				const ref = this.parts.slice(-2);
				const high = ref[0];
				const low = ref[1];
				return new ipaddr.IPv4([
					high >> 8,
					high & 255,
					low >> 8,
					low & 255
				]);
			};
			IPv6.prototype.toNormalizedString = function() {
				const addr = (function() {
					const results = [];
					for (let i = 0; i < this.parts.length; i++) results.push(this.parts[i].toString(16));
					return results;
				}).call(this).join(":");
				let suffix = "";
				if (this.zoneId) suffix = `%${this.zoneId}`;
				return addr + suffix;
			};
			IPv6.prototype.toRFC5952String = function() {
				const regex = /((^|:)(0(:|$)){2,})/g;
				const string = this.toNormalizedString();
				let bestMatchIndex = 0;
				let bestMatchLength = -1;
				let match;
				while (match = regex.exec(string)) if (match[0].length > bestMatchLength) {
					bestMatchIndex = match.index;
					bestMatchLength = match[0].length;
				}
				if (bestMatchLength < 0) return string;
				return `${string.substring(0, bestMatchIndex)}::${string.substring(bestMatchIndex + bestMatchLength)}`;
			};
			IPv6.prototype.toString = function() {
				return this.toRFC5952String();
			};
			return IPv6;
		})();
		ipaddr.IPv6.broadcastAddressFromCIDR = function(string) {
			try {
				const cidr = this.parseCIDR(string);
				const ipInterfaceOctets = cidr[0].toByteArray();
				const subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
				const octets = [];
				let i = 0;
				while (i < 16) {
					octets.push(parseInt(ipInterfaceOctets[i], 10) | parseInt(subnetMaskOctets[i], 10) ^ 255);
					i++;
				}
				return new this(octets);
			} catch (e) {
				throw new Error(`ipaddr: the address does not have IPv6 CIDR format (${e})`);
			}
		};
		ipaddr.IPv6.isIPv6 = function(string) {
			return this.parser(string) !== null;
		};
		ipaddr.IPv6.isValid = function(string) {
			if (typeof string === "string" && string.indexOf(":") === -1) return false;
			try {
				const addr = this.parser(string);
				new this(addr.parts, addr.zoneId);
				return true;
			} catch (e) {
				return false;
			}
		};
		ipaddr.IPv6.isValidCIDR = function(string) {
			if (typeof string === "string" && string.indexOf(":") === -1) return false;
			try {
				this.parseCIDR(string);
				return true;
			} catch (e) {
				return false;
			}
		};
		ipaddr.IPv6.networkAddressFromCIDR = function(string) {
			let cidr, i, ipInterfaceOctets, octets, subnetMaskOctets;
			try {
				cidr = this.parseCIDR(string);
				ipInterfaceOctets = cidr[0].toByteArray();
				subnetMaskOctets = this.subnetMaskFromPrefixLength(cidr[1]).toByteArray();
				octets = [];
				i = 0;
				while (i < 16) {
					octets.push(parseInt(ipInterfaceOctets[i], 10) & parseInt(subnetMaskOctets[i], 10));
					i++;
				}
				return new this(octets);
			} catch (e) {
				throw new Error(`ipaddr: the address does not have IPv6 CIDR format (${e})`);
			}
		};
		ipaddr.IPv6.parse = function(string) {
			const addr = this.parser(string);
			if (addr.parts === null) throw new Error("ipaddr: string is not formatted like an IPv6 Address");
			return new this(addr.parts, addr.zoneId);
		};
		ipaddr.IPv6.parseCIDR = function(string) {
			let maskLength, match, parsed;
			if (match = string.match(/^(.+)\/(\d+)$/)) {
				maskLength = parseInt(match[2]);
				if (maskLength >= 0 && maskLength <= 128) {
					parsed = [this.parse(match[1]), maskLength];
					Object.defineProperty(parsed, "toString", { value: function() {
						return this.join("/");
					} });
					return parsed;
				}
			}
			throw new Error("ipaddr: string is not formatted like an IPv6 CIDR range");
		};
		ipaddr.IPv6.parser = function(string) {
			let addr, i, match, octet, octets, zoneId;
			if (match = string.match(ipv6Regexes.deprecatedTransitional)) return this.parser(`::ffff:${match[1]}`);
			if (ipv6Regexes.native.test(string)) return expandIPv6(string, 8);
			if (match = string.match(ipv6Regexes.transitional)) {
				zoneId = match[6] || "";
				addr = match[1];
				if (!match[1].endsWith("::")) addr = addr.slice(0, -1);
				addr = expandIPv6(addr + zoneId, 6);
				if (addr.parts) {
					octets = [
						parseInt(match[2]),
						parseInt(match[3]),
						parseInt(match[4]),
						parseInt(match[5])
					];
					for (i = 0; i < octets.length; i++) {
						octet = octets[i];
						if (!(0 <= octet && octet <= 255)) return null;
					}
					addr.parts.push(octets[0] << 8 | octets[1]);
					addr.parts.push(octets[2] << 8 | octets[3]);
					return {
						parts: addr.parts,
						zoneId: addr.zoneId
					};
				}
			}
			return null;
		};
		ipaddr.IPv6.subnetMaskFromPrefixLength = function(prefix) {
			prefix = parseInt(prefix);
			if (prefix < 0 || prefix > 128) throw new Error("ipaddr: invalid IPv6 prefix length");
			const octets = [
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			];
			let j = 0;
			const filledOctetCount = Math.floor(prefix / 8);
			while (j < filledOctetCount) {
				octets[j] = 255;
				j++;
			}
			if (filledOctetCount < 16) octets[filledOctetCount] = Math.pow(2, prefix % 8) - 1 << 8 - prefix % 8;
			return new this(octets);
		};
		ipaddr.fromByteArray = function(bytes) {
			const length = bytes.length;
			if (length === 4) return new ipaddr.IPv4(bytes);
			else if (length === 16) return new ipaddr.IPv6(bytes);
			else throw new Error("ipaddr: the binary input is neither an IPv6 nor IPv4 address");
		};
		ipaddr.isValid = function(string) {
			return ipaddr.IPv6.isValid(string) || ipaddr.IPv4.isValid(string);
		};
		ipaddr.isValidCIDR = function(string) {
			return ipaddr.IPv6.isValidCIDR(string) || ipaddr.IPv4.isValidCIDR(string);
		};
		ipaddr.parse = function(string) {
			if (ipaddr.IPv6.isValid(string)) return ipaddr.IPv6.parse(string);
			else if (ipaddr.IPv4.isValid(string)) return ipaddr.IPv4.parse(string);
			else throw new Error("ipaddr: the address has neither IPv6 nor IPv4 format");
		};
		ipaddr.parseCIDR = function(string) {
			try {
				return ipaddr.IPv6.parseCIDR(string);
			} catch (e) {
				try {
					return ipaddr.IPv4.parseCIDR(string);
				} catch (e2) {
					throw new Error("ipaddr: the address has neither IPv6 nor IPv4 CIDR format");
				}
			}
		};
		ipaddr.process = function(string) {
			const addr = this.parse(string);
			if (addr.kind() === "ipv6" && addr.isIPv4MappedAddress()) return addr.toIPv4Address();
			else return addr;
		};
		ipaddr.subnetMatch = function(address, rangeList, defaultName) {
			let i, rangeName, rangeSubnets, subnet;
			if (defaultName === void 0 || defaultName === null) defaultName = "unicast";
			for (rangeName in rangeList) if (Object.prototype.hasOwnProperty.call(rangeList, rangeName)) {
				rangeSubnets = rangeList[rangeName];
				if (rangeSubnets[0] && !(rangeSubnets[0] instanceof Array)) rangeSubnets = [rangeSubnets];
				for (i = 0; i < rangeSubnets.length; i++) {
					subnet = rangeSubnets[i];
					if (address.kind() === subnet[0].kind() && address.match.apply(address, subnet)) return rangeName;
				}
			}
			return defaultName;
		};
		if (typeof module !== "undefined" && module.exports) module.exports = ipaddr;
		else root.ipaddr = ipaddr;
	})(exports);
})))(), 1);
/**
* Convert a glob pattern (with `*` and `**`) to a RegExp.
*
* For hostnames, segments are separated by `.`:
*   - `*` matches a single segment (no dots): [^.]+
*   - `**` matches any number of segments: .+
*
* For pathnames, segments are separated by `/`:
*   - `*` matches a single segment (no slashes): [^/]+
*   - `**` matches any number of segments (including empty): .*
*
* Literal characters are escaped for regex safety.
*/
function globToRegex(pattern, separator) {
	let regexStr = "^";
	const doubleStar = separator === "." ? ".+" : ".*";
	const singleStar = separator === "." ? "[^.]+" : "[^/]+";
	const parts = pattern.split("**");
	for (let i = 0; i < parts.length; i++) {
		if (i > 0) regexStr += doubleStar;
		const subParts = parts[i].split("*");
		for (let j = 0; j < subParts.length; j++) {
			if (j > 0) regexStr += singleStar;
			regexStr += subParts[j].replace(/[.+?^${}()|[\]\\]/g, "\\$&");
		}
	}
	regexStr += "$";
	return new RegExp(regexStr);
}
/**
* Check whether a URL matches a single remote pattern.
* Follows the same semantics as Next.js's matchRemotePattern().
*/
function matchRemotePattern(pattern, url) {
	if (pattern.protocol !== void 0) {
		if (pattern.protocol.replace(/:$/, "") !== url.protocol.replace(/:$/, "")) return false;
	}
	if (pattern.port !== void 0) {
		if (pattern.port !== url.port) return false;
	}
	if (!globToRegex(pattern.hostname, ".").test(url.hostname)) return false;
	if (pattern.search !== void 0) {
		if (pattern.search !== url.search) return false;
	}
	if (!globToRegex(pattern.pathname ?? "**", "/").test(url.pathname)) return false;
	return true;
}
/**
* Check whether a URL matches any configured remote pattern or legacy domain.
*/
function hasRemoteMatch(domains, remotePatterns, url) {
	return domains.some((domain) => url.hostname === domain) || remotePatterns.some((p) => matchRemotePattern(p, url));
}
/**
* Determine whether a string is a private (non-routable) IP address.
* Works for IPv4 and IPv6, including bracketed and IPv4-mapped forms.
*
* Uses ipaddr.js with range() !== 'unicast' — the same approach Next.js
* takes (via packages/next/src/server/is-private-ip.ts). This covers all
* IETF non-unicast ranges (CGNAT, benchmarking, multicast, reserved,
* teredo, documentation, discard, NAT64, etc.) without hand-rolling CIDR
* prefix checks that are easy to get wrong.
*
* https://github.com/vercel/next.js/blob/canary/packages/next/src/server/is-private-ip.ts
*/
function isPrivateIp(ip) {
	if (ip.startsWith("[") && ip.endsWith("]")) ip = ip.slice(1, -1);
	try {
		const parsed = import_ipaddr.default.parse(ip);
		if (parsed instanceof import_ipaddr.default.IPv6 && parsed.isIPv4MappedAddress()) return parsed.toIPv4Address().range() !== "unicast";
		return parsed.range() !== "unicast";
	} catch {
		return false;
	}
}
//#endregion
//#region node_modules/vinext/dist/shims/use-merged-ref.js
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
function useMergedRef(refA, refB) {
	const cleanupA = (0, import_react.useRef)(null);
	const cleanupB = (0, import_react.useRef)(null);
	return (0, import_react.useCallback)((current) => {
		if (current === null) {
			const cleanupFnA = cleanupA.current;
			if (cleanupFnA) {
				cleanupA.current = null;
				cleanupFnA();
			}
			const cleanupFnB = cleanupB.current;
			if (cleanupFnB) {
				cleanupB.current = null;
				cleanupFnB();
			}
		} else {
			if (refA) cleanupA.current = applyRef(refA, current);
			if (refB) cleanupB.current = applyRef(refB, current);
		}
	}, [refA, refB]);
}
function applyRef(refA, current) {
	if (typeof refA === "function") {
		const cleanup = refA(current);
		if (typeof cleanup === "function") return cleanup;
		else return () => refA(null);
	} else {
		refA.current = current;
		return () => {
			refA.current = null;
		};
	}
}
//#endregion
//#region node_modules/@unpic/react/dist/chunk-VTEFGNYT.mjs
var import_jsx_runtime = require_jsx_runtime();
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom(), 1);
var nestedKeys = /* @__PURE__ */ new Set(["style"]);
var fixedMap = {
	srcset: "srcSet",
	fetchpriority: "use" in import_react ? "fetchPriority" : "fetchpriority"
};
var camelize = (key) => {
	if (key.startsWith("data-") || key.startsWith("aria-")) return key;
	return fixedMap[key] || key.replace(/-./g, (suffix) => suffix[1].toUpperCase());
};
function camelizeProps(props) {
	return Object.fromEntries(Object.entries(props).map(([k, v]) => [camelize(k), nestedKeys.has(k) && v && typeof v !== "string" ? camelizeProps(v) : v]));
}
//#endregion
//#region node_modules/@unpic/core/dist/chunk-7DG3H6KO.mjs
var getSizes = (width, layout) => {
	if (!width || !layout) return;
	switch (layout) {
		case `constrained`: return `(min-width: ${width}px) ${width}px, 100vw`;
		case `fixed`: return `${width}px`;
		case `fullWidth`: return `100vw`;
		default: return;
	}
};
var pixelate = (value) => value || value === 0 ? `${value}px` : void 0;
var getStyle = ({ width, height, aspectRatio, layout, objectFit = "cover", background }) => {
	const styleEntries = [["object-fit", objectFit]];
	if (background?.startsWith("https:") || background?.startsWith("http:") || background?.startsWith("data:") || background?.startsWith("/")) {
		styleEntries.push(["background-image", `url(${background})`]);
		styleEntries.push(["background-size", "cover"]);
		styleEntries.push(["background-repeat", "no-repeat"]);
	} else styleEntries.push(["background", background]);
	if (layout === "fixed") {
		styleEntries.push(["width", pixelate(width)]);
		styleEntries.push(["height", pixelate(height)]);
	}
	if (layout === "constrained") {
		styleEntries.push(["max-width", pixelate(width)]);
		styleEntries.push(["max-height", pixelate(height)]);
		styleEntries.push(["aspect-ratio", aspectRatio ? `${aspectRatio}` : void 0]);
		styleEntries.push(["width", "100%"]);
	}
	if (layout === "fullWidth") {
		styleEntries.push(["width", "100%"]);
		styleEntries.push(["aspect-ratio", aspectRatio ? `${aspectRatio}` : void 0]);
		styleEntries.push(["height", pixelate(height)]);
	}
	return Object.fromEntries(styleEntries.filter(([, value]) => value));
};
var DEFAULT_RESOLUTIONS = [
	6016,
	5120,
	4480,
	3840,
	3200,
	2560,
	2048,
	1920,
	1668,
	1280,
	1080,
	960,
	828,
	750,
	640
];
var LOW_RES_WIDTH = 24;
var getBreakpoints = ({ width, layout, resolutions = DEFAULT_RESOLUTIONS }) => {
	if (layout === "fullWidth") return resolutions;
	if (!width) return [];
	const doubleWidth = width * 2;
	if (layout === "fixed") return [width, doubleWidth];
	if (layout === "constrained") return [
		width,
		doubleWidth,
		...resolutions.filter((w) => w < doubleWidth)
	];
	return [];
};
var getSrcSetEntries = ({ src, width, layout = "constrained", height, aspectRatio, breakpoints, format }) => {
	breakpoints ||= getBreakpoints({
		width,
		layout
	});
	return breakpoints.sort((a, b) => a - b).map((bp) => {
		let transformedHeight;
		if (height && aspectRatio) transformedHeight = Math.round(bp / aspectRatio);
		return {
			url: src,
			width: bp,
			height: transformedHeight,
			format
		};
	});
};
var getSrcSet = (options) => {
	let { src, transformer, operations } = options;
	if (!transformer) return "";
	return getSrcSetEntries(options).map(({ url: _, ...transform }) => {
		return `${transformer(src, {
			...operations,
			...transform
		}, options.options)?.toString()} ${transform.width}w`;
	}).join(",\n");
};
function transformSharedProps({ width, height, priority, layout = "constrained", aspectRatio, ...props }) {
	width = width && Number(width) || void 0;
	height = height && Number(height) || void 0;
	if (priority) {
		props.loading ||= "eager";
		props.fetchpriority ||= "high";
	} else {
		props.loading ||= "lazy";
		props.decoding ||= "async";
	}
	if (props.alt === "") props.role ||= "presentation";
	if (aspectRatio) {
		if (width) if (height) {} else height = Math.round(width / aspectRatio);
		else if (height) width = Math.round(height * aspectRatio);
		else if (layout !== "fullWidth") {}
	} else if (width && height) aspectRatio = width / height;
	else if (layout !== "fullWidth") {}
	return {
		width,
		height,
		aspectRatio,
		layout,
		...props
	};
}
function transformBaseImageProps(props) {
	let { src, transformer, background, layout, objectFit, breakpoints, width, height, aspectRatio, unstyled, operations, options, ...transformedProps } = transformSharedProps(props);
	if (transformer && background === "auto") {
		const lowResHeight = aspectRatio ? Math.round(LOW_RES_WIDTH / aspectRatio) : void 0;
		const lowResImage = transformer(src, {
			width: LOW_RES_WIDTH,
			height: lowResHeight
		}, options);
		if (lowResImage) background = lowResImage.toString();
	}
	const styleProps = {
		width,
		height,
		aspectRatio,
		layout,
		objectFit,
		background
	};
	transformedProps.sizes ||= getSizes(width, layout);
	if (!unstyled) transformedProps.style = {
		...getStyle(styleProps),
		...transformedProps.style
	};
	if (transformer) {
		transformedProps.srcset = getSrcSet({
			src,
			width,
			height,
			aspectRatio,
			layout,
			breakpoints,
			transformer,
			operations,
			options
		});
		const transformed = transformer(src, {
			...operations,
			width,
			height
		}, options);
		if (transformed) src = transformed;
		if (layout === "fullWidth" || layout === "constrained") {
			width = void 0;
			height = void 0;
		}
	}
	return {
		...transformedProps,
		src: src?.toString(),
		width,
		height
	};
}
function normalizeImageType(type) {
	if (!type) return {};
	if (type.startsWith("image/")) return {
		format: type.slice(6),
		mimeType: type
	};
	return {
		format: type,
		mimeType: `image/${type === "jpg" ? "jpeg" : type}`
	};
}
function transformBaseSourceProps({ media, type, ...props }) {
	let { src, transformer, layout, breakpoints, width, height, aspectRatio, sizes, loading, decoding, operations, options, ...rest } = transformSharedProps(props);
	if (!transformer) return {};
	const { format, mimeType } = normalizeImageType(type);
	sizes ||= getSizes(width, layout);
	const srcset = getSrcSet({
		src,
		width,
		height,
		aspectRatio,
		layout,
		breakpoints,
		transformer,
		format,
		operations,
		options
	});
	const transformed = transformer(src, {
		...operations,
		width,
		height
	}, options);
	if (transformed) src = transformed;
	const returnObject = {
		...rest,
		sizes,
		srcset
	};
	if (media) returnObject.media = media;
	if (mimeType) returnObject.type = mimeType;
	return returnObject;
}
//#endregion
//#region node_modules/unpic/esm/data/domains.js
var domains_default = {
	"images.ctfassets.net": "contentful",
	"cdn.builder.io": "builder.io",
	"images.prismic.io": "imgix",
	"www.datocms-assets.com": "imgix",
	"cdn.sanity.io": "imgix",
	"images.unsplash.com": "imgix",
	"cdn.shopify.com": "shopify",
	"s7d1.scene7.com": "scene7",
	"ip.keycdn.com": "keycdn",
	"assets.caisy.io": "bunny",
	"images.contentstack.io": "contentstack",
	"ucarecdn.com": "uploadcare",
	"imagedelivery.net": "cloudflare_images",
	"wsrv.nl": "wsrv"
};
//#endregion
//#region node_modules/unpic/esm/data/subdomains.js
var subdomains_default = {
	"imgix.net": "imgix",
	"wp.com": "wordpress",
	"files.wordpress.com": "wordpress",
	"b-cdn.net": "bunny",
	"storyblok.com": "storyblok",
	"kc-usercontent.com": "kontent.ai",
	"cloudinary.com": "cloudinary",
	"kxcdn.com": "keycdn",
	"imgeng.in": "imageengine",
	"imagekit.io": "imagekit",
	"cloudimg.io": "cloudimage",
	"ucarecdn.com": "uploadcare",
	"supabase.co": "supabase",
	"graphassets.com": "hygraph"
};
//#endregion
//#region node_modules/unpic/esm/data/paths.js
var paths_default = {
	"/cdn-cgi/image/": "cloudflare",
	"/cdn-cgi/imagedelivery/": "cloudflare_images",
	"/_next/image": "nextjs",
	"/_vercel/image": "vercel",
	"/is/image": "scene7",
	"/_ipx/": "ipx",
	"/_image": "astro",
	"/.netlify/images": "netlify",
	"/storage/v1/object/public/": "supabase",
	"/storage/v1/render/image/public/": "supabase",
	"/v1/storage/buckets/": "appwrite"
};
//#endregion
//#region node_modules/unpic/esm/src/utils.js
function roundIfNumeric(value) {
	if (!value) return value;
	const num = Number(value);
	if (isNaN(num)) return value;
	return Math.round(num);
}
/**
* Given a URL object, returns path and query params
*/
var toRelativeUrl = (url) => {
	const { pathname, search } = url;
	return `${pathname}${search}`;
};
/**
* Returns a URL string that may be relative or absolute
*/
var toCanonicalUrlString = (url) => {
	return url.hostname === "n" ? toRelativeUrl(url) : url.toString();
};
/**
* Normalises a URL object or string URL to a URL object.
*/
var toUrl = (url, base) => {
	return typeof url === "string" ? new URL(url, base ?? "http://n/") : url;
};
/**
* Escapes a string, even if it's URL-safe
*/
var escapeChar = (text) => text === " " ? "+" : "%" + text.charCodeAt(0).toString(16).toUpperCase().padStart(2, "0");
var stripLeadingSlash = (str) => str?.startsWith("/") ? str.slice(1) : str;
var stripTrailingSlash = (str) => str?.endsWith("/") ? str.slice(0, -1) : str;
var addTrailingSlash = (str) => str?.endsWith("/") ? str : `${str}/`;
/**
* Creates a formatter given an operation joiner and key/value joiner
*/
var createFormatter = (kvSeparator, paramSeparator) => {
	const encodedValueJoiner = escapeChar(kvSeparator);
	const encodedOperationJoiner = escapeChar(paramSeparator);
	function escape(value) {
		return encodeURIComponent(value).replaceAll(kvSeparator, encodedValueJoiner).replaceAll(paramSeparator, encodedOperationJoiner);
	}
	function format(key, value) {
		return `${escape(key)}${kvSeparator}${escape(String(value))}`;
	}
	return (operations) => {
		return (Array.isArray(operations) ? operations : Object.entries(operations)).flatMap(([key, value]) => {
			if (value === void 0 || value === null) return [];
			if (Array.isArray(value)) return value.map((v) => format(key, v));
			return format(key, value);
		}).join(paramSeparator);
	};
};
/**
* Creates a parser given an operation joiner and key/value joiner
*/
var createParser = (kvSeparator, paramSeparator) => {
	if (kvSeparator === "=" && paramSeparator === "&") return queryParser;
	return (url) => {
		const urlString = url.toString();
		return Object.fromEntries(urlString.split(paramSeparator).map((pair) => {
			const [key, value] = pair.split(kvSeparator);
			return [decodeURI(key), decodeURI(value)];
		}));
	};
};
/**
* Clamp width and height, maintaining aspect ratio
*/
function clampDimensions(operations, maxWidth = 4e3, maxHeight = 4e3) {
	let { width, height } = operations;
	width = Number(width) || void 0;
	height = Number(height) || void 0;
	if (width && width > maxWidth) {
		if (height) height = Math.round(height * maxWidth / width);
		width = maxWidth;
	}
	if (height && height > maxHeight) {
		if (width) width = Math.round(width * maxHeight / height);
		height = maxHeight;
	}
	return {
		width,
		height
	};
}
function extractFromURL(url) {
	const parsedUrl = toUrl(url);
	const operations = Object.fromEntries(parsedUrl.searchParams.entries());
	for (const key in [
		"width",
		"height",
		"quality"
	]) {
		const value = operations[key];
		if (value) {
			const newVal = Number(value);
			if (!isNaN(newVal)) operations[key] = newVal;
		}
	}
	parsedUrl.search = "";
	return {
		operations,
		src: toCanonicalUrlString(parsedUrl)
	};
}
function normaliseOperations({ keyMap = {}, formatMap = {}, defaults = {} }, operations) {
	if (operations.format && operations.format in formatMap) operations.format = formatMap[operations.format];
	if (operations.width) operations.width = roundIfNumeric(operations.width);
	if (operations.height) operations.height = roundIfNumeric(operations.height);
	for (const k in keyMap) {
		if (!Object.prototype.hasOwnProperty.call(keyMap, k)) continue;
		const key = k;
		if (keyMap[key] === false) {
			delete operations[key];
			continue;
		}
		if (keyMap[key] && operations[key]) {
			operations[keyMap[key]] = operations[key];
			delete operations[key];
		}
	}
	for (const k in defaults) {
		if (!Object.prototype.hasOwnProperty.call(defaults, k)) continue;
		const key = k;
		const value = defaults[key];
		if (!operations[key] && value !== void 0) {
			if (keyMap[key] === false) continue;
			const resolvedKey = keyMap[key] ?? key;
			if (resolvedKey in operations) continue;
			operations[resolvedKey] = value;
		}
	}
	return operations;
}
var invertMap = (map) => Object.fromEntries(Object.entries(map).map(([k, v]) => [v, k]));
function denormaliseOperations({ keyMap = {}, formatMap = {}, defaults = {} }, operations) {
	const ops = normaliseOperations({
		keyMap: invertMap(keyMap),
		formatMap: invertMap(formatMap),
		defaults
	}, operations);
	if (ops.width) ops.width = roundIfNumeric(ops.width);
	if (ops.height) ops.height = roundIfNumeric(ops.height);
	const q = Number(ops.quality);
	if (!isNaN(q)) ops.quality = q;
	return ops;
}
var queryParser = (url) => {
	const parsedUrl = toUrl(url);
	return Object.fromEntries(parsedUrl.searchParams.entries());
};
function createOperationsGenerator({ kvSeparator = "=", paramSeparator = "&", ...options } = {}) {
	const formatter = createFormatter(kvSeparator, paramSeparator);
	return (operations) => {
		return formatter(normaliseOperations(options, operations));
	};
}
function createOperationsParser({ kvSeparator = "=", paramSeparator = "&", defaults: _, ...options } = {}) {
	const parser = createParser(kvSeparator, paramSeparator);
	return (url) => {
		return denormaliseOperations(options, url ? parser(url) : {});
	};
}
function createOperationsHandlers(config) {
	return {
		operationsGenerator: createOperationsGenerator(config),
		operationsParser: createOperationsParser(config)
	};
}
function paramToBoolean(value) {
	if (value === void 0 || value === null) return;
	try {
		return Boolean(JSON.parse(value?.toString()));
	} catch {
		return Boolean(value);
	}
}
var removeUndefined = (obj) => Object.fromEntries(Object.entries(obj).filter(([, value]) => value !== void 0));
function createExtractAndGenerate(extract, generate) {
	return ((src, operations, options) => {
		const base = extract(src, options);
		if (!base) return generate(src, operations, options);
		return generate(base.src, {
			...base.operations,
			...removeUndefined(operations)
		}, {
			...base.options,
			...options
		});
	});
}
//#endregion
//#region node_modules/unpic/esm/src/detect.js
var cdnDomains = new Map(Object.entries(domains_default));
var cdnSubdomains = Object.entries(subdomains_default);
var cdnPaths = Object.entries(paths_default);
/**
* Detects the image CDN provider for a given URL.
*/
function getProviderForUrl(url) {
	return getProviderForUrlByDomain(url) || getProviderForUrlByPath(url);
}
function getProviderForUrlByDomain(url) {
	if (typeof url === "string" && !url.startsWith("https://")) return false;
	const { hostname } = toUrl(url);
	const cdn = cdnDomains.get(hostname);
	if (cdn) return cdn;
	return cdnSubdomains.find(([subdomain]) => hostname.endsWith(subdomain))?.[1] || false;
}
/**
* Gets the image CDN provider for a given URL by its path.
*/
function getProviderForUrlByPath(url) {
	const { pathname } = toUrl(url);
	return cdnPaths.find(([path]) => pathname.startsWith(path))?.[1] || false;
}
//#endregion
//#region node_modules/unpic/esm/src/providers/appwrite.js
var VIEW_URL_SUFFIX = "/view?";
var PREVIEW_URL_SUFFIX = "/preview?";
var { operationsGenerator: operationsGenerator$25, operationsParser: operationsParser$20 } = createOperationsHandlers({
	keyMap: { format: "output" },
	kvSeparator: "=",
	paramSeparator: "&"
});
var generate$26 = (src, modifiers) => {
	const url = toUrl(src.toString().replace(VIEW_URL_SUFFIX, PREVIEW_URL_SUFFIX));
	const projectParam = url.searchParams.get("project") ?? "";
	url.search = operationsGenerator$25(modifiers);
	url.searchParams.append("project", projectParam);
	return toCanonicalUrlString(url);
};
var extract$26 = (url) => {
	if (getProviderForUrlByPath(url) !== "appwrite") return null;
	const parsedUrl = toUrl(url);
	const operations = operationsParser$20(parsedUrl);
	delete operations.project;
	const projectParam = parsedUrl.searchParams.get("project") ?? "";
	parsedUrl.search = "";
	parsedUrl.searchParams.append("project", projectParam);
	return {
		src: parsedUrl.href,
		operations
	};
};
var transform$27 = createExtractAndGenerate(extract$26, generate$26);
//#endregion
//#region node_modules/unpic/esm/src/providers/astro.js
var DEFAULT_ENDPOINT = "/_image";
var { operationsParser: operationsParser$19, operationsGenerator: operationsGenerator$24 } = createOperationsHandlers({
	keyMap: {
		format: "f",
		width: "w",
		height: "h",
		quality: "q"
	},
	defaults: { fit: "cover" }
});
var generate$25 = (src, modifiers, options) => {
	const url = toUrl(`${stripTrailingSlash(options?.baseUrl ?? "")}${options?.endpoint ?? DEFAULT_ENDPOINT}`);
	url.search = operationsGenerator$24(modifiers);
	url.searchParams.set("href", src.toString());
	return toCanonicalUrlString(url);
};
var extract$25 = (url) => {
	const parsedUrl = toUrl(url);
	const src = parsedUrl.searchParams.get("href");
	if (!src) return null;
	parsedUrl.searchParams.delete("href");
	return {
		src,
		operations: operationsParser$19(parsedUrl),
		options: { baseUrl: parsedUrl.origin }
	};
};
var transform$26 = (src, operations, options = {}) => {
	if (toUrl(src).pathname !== (options?.endpoint ?? DEFAULT_ENDPOINT)) return generate$25(src, operations, options);
	const base = extract$25(src);
	if (!base) return generate$25(src, operations, options);
	options.baseUrl ??= base.options.baseUrl;
	return generate$25(base.src, {
		...base.operations,
		...operations
	}, options);
};
//#endregion
//#region node_modules/unpic/esm/src/providers/builder.io.js
var operationsGenerator$23 = createOperationsGenerator({ defaults: {
	fit: "cover",
	format: "webp",
	sharp: true
} });
var extract$24 = extractFromURL;
var generate$24 = (src, modifiers) => {
	const operations = operationsGenerator$23(modifiers);
	const url = toUrl(src);
	url.search = operations;
	return toCanonicalUrlString(url);
};
var transform$25 = createExtractAndGenerate(extract$24, generate$24);
//#endregion
//#region node_modules/unpic/esm/src/providers/bunny.js
var operationsGenerator$22 = createOperationsGenerator({ keyMap: { format: "output" } });
var extract$23 = extractFromURL;
var generate$23 = (src, modifiers) => {
	const operations = operationsGenerator$22(modifiers);
	const url = toUrl(src);
	url.search = operations;
	return toCanonicalUrlString(url);
};
var extractAndGenerate$1 = createExtractAndGenerate(extract$23, generate$23);
var transform$24 = (src, operations) => {
	const { width, height } = operations;
	if (width && height) operations.aspect_ratio ??= `${Math.round(Number(width))}:${Math.round(Number(height))}`;
	return extractAndGenerate$1(src, operations);
};
//#endregion
//#region node_modules/unpic/esm/src/providers/cloudflare.js
var { operationsGenerator: operationsGenerator$21, operationsParser: operationsParser$18 } = createOperationsHandlers({
	keyMap: { "format": "f" },
	defaults: {
		format: "auto",
		fit: "cover"
	},
	formatMap: { jpg: "jpeg" },
	kvSeparator: "=",
	paramSeparator: ","
});
var generate$22 = (src, operations, options) => {
	const modifiers = operationsGenerator$21(operations);
	const url = toUrl(options?.domain ? `https://${options.domain}` : "/");
	url.pathname = `/cdn-cgi/image/${modifiers}/${stripLeadingSlash(src.toString())}`;
	return toCanonicalUrlString(url);
};
var extract$22 = (url, options) => {
	if (getProviderForUrlByPath(url) !== "cloudflare") return null;
	const parsedUrl = toUrl(url);
	const [, , , modifiers, ...src] = parsedUrl.pathname.split("/");
	const operations = operationsParser$18(modifiers);
	return {
		src: toCanonicalUrlString(toUrl(src.join("/"))),
		operations,
		options: { domain: options?.domain ?? (parsedUrl.hostname === "n" ? void 0 : parsedUrl.hostname) }
	};
};
var transform$23 = createExtractAndGenerate(extract$22, generate$22);
//#endregion
//#region node_modules/unpic/esm/src/providers/cloudflare_images.js
var cloudflareImagesRegex = /https?:\/\/(?<host>[^\/]+)\/cdn-cgi\/imagedelivery\/(?<accountHash>[^\/]+)\/(?<imageId>[^\/]+)\/*(?<transformations>[^\/]+)*$/g;
var imagedeliveryRegex = /https?:\/\/(?<host>imagedelivery.net)\/(?<accountHash>[^\/]+)\/(?<imageId>[^\/]+)\/*(?<transformations>[^\/]+)*$/g;
var { operationsGenerator: operationsGenerator$20, operationsParser: operationsParser$17 } = createOperationsHandlers({
	keyMap: {
		width: "w",
		height: "h",
		format: "f"
	},
	defaults: { fit: "cover" },
	kvSeparator: "=",
	paramSeparator: ","
});
function formatUrl(options, transformations) {
	const { host, accountHash, imageId } = options;
	if (!host || !accountHash || !imageId) throw new Error("Missing required Cloudflare Images options");
	return [
		"https:/",
		...host === "imagedelivery.net" ? [host] : [
			host,
			"cdn-cgi",
			"imagedelivery"
		],
		accountHash,
		imageId,
		transformations
	].filter(Boolean).join("/");
}
var generate$21 = (_src, operations, options = {}) => {
	return toCanonicalUrlString(toUrl(formatUrl(options, operationsGenerator$20(operations))));
};
var extract$21 = (url) => {
	const parsedUrl = toUrl(url);
	const matches = [...parsedUrl.toString().matchAll(cloudflareImagesRegex), ...parsedUrl.toString().matchAll(imagedeliveryRegex)];
	if (!matches[0]?.groups) return null;
	const { host, accountHash, imageId, transformations } = matches[0].groups;
	const operations = operationsParser$17(transformations || "");
	const options = {
		host,
		accountHash,
		imageId
	};
	return {
		src: formatUrl(options),
		operations,
		options
	};
};
var transform$22 = (src, operations, options = {}) => {
	const extracted = extract$21(src);
	if (!extracted) throw new Error("Invalid Cloudflare Images URL");
	const newOperations = {
		...extracted.operations,
		...operations
	};
	return generate$21(extracted.src, newOperations, {
		...extracted.options,
		...options
	});
};
//#endregion
//#region node_modules/unpic/esm/src/providers/cloudimage.js
var { operationsGenerator: operationsGenerator$19, operationsParser: operationsParser$16 } = createOperationsHandlers({
	keyMap: {
		format: "force_format",
		width: "w",
		height: "h",
		quality: "q"
	},
	defaults: { org_if_sml: 1 }
});
var generate$20 = (src, modifiers = {}, { token } = {}) => {
	if (!token) throw new Error("Token is required for Cloudimage URLs" + src);
	let srcString = src.toString();
	srcString = srcString.replace(/^https?:\/\//, "");
	if (srcString.includes("?")) {
		modifiers.ci_url_encoded = 1;
		srcString = encodeURIComponent(srcString);
	}
	const operations = operationsGenerator$19(modifiers);
	const url = new URL(`https://${token}.cloudimg.io/`);
	url.pathname = srcString;
	url.search = operations;
	return url.toString();
};
var extract$20 = (src, options = {}) => {
	const url = toUrl(src);
	if (getProviderForUrl(url) !== "cloudimage") return null;
	const operations = operationsParser$16(url);
	let originalSrc = url.pathname;
	if (operations.ci_url_encoded) {
		originalSrc = decodeURIComponent(originalSrc);
		delete operations.ci_url_encoded;
	}
	options.token ??= url.hostname.replace(".cloudimg.io", "");
	return {
		src: `${url.protocol}/${originalSrc}`,
		operations,
		options
	};
};
var transform$21 = createExtractAndGenerate(extract$20, generate$20);
//#endregion
//#region node_modules/unpic/esm/src/providers/cloudinary.js
var publicRegex = /https?:\/\/(?<host>res\.cloudinary\.com)\/(?<cloudName>[a-zA-Z0-9-]+)\/(?<assetType>image|video|raw)\/(?<deliveryType>upload|fetch|private|authenticated|sprite|facebook|twitter|youtube|vimeo)\/?(?<signature>s\-\-[a-zA-Z0-9]+\-\-)?\/?(?<transformations>(?:[^_\/]+_[^,\/]+,?)*)?\/(?:(?<version>v\d+)\/)?(?<id>(?:[^\s\/]+\/)*[^\s\/]+(?:\.[a-zA-Z0-9]+)?)$/;
var privateRegex = /https?:\/\/(?<host>(?<cloudName>[a-zA-Z0-9-]+)-res\.cloudinary\.com|[a-zA-Z0-9.-]+)\/(?<assetType>image|video|raw)\/(?<deliveryType>upload|fetch|private|authenticated|sprite|facebook|twitter|youtube|vimeo)\/?(?<signature>s\-\-[a-zA-Z0-9]+\-\-)?\/?(?<transformations>(?:[^_\/]+_[^,\/]+,?)*)?\/(?:(?<version>v\d+)\/)?(?<id>(?:[^\s\/]+\/)*[^\s\/]+(?:\.[a-zA-Z0-9]+)?)$/;
var { operationsGenerator: operationsGenerator$18, operationsParser: operationsParser$15 } = createOperationsHandlers({
	keyMap: {
		width: "w",
		height: "h",
		format: "f",
		quality: "q"
	},
	defaults: {
		format: "auto",
		c: "lfill"
	},
	kvSeparator: "_",
	paramSeparator: ","
});
function formatCloudinaryUrl({ host, cloudName, assetType, deliveryType, signature, transformations, version, id }) {
	return [
		"https:/",
		host,
		host === "res.cloudinary.com" ? cloudName : void 0,
		assetType,
		deliveryType,
		signature,
		transformations,
		version,
		id
	].filter(Boolean).join("/");
}
function parseCloudinaryUrl(url) {
	let matches = url.toString().match(publicRegex);
	if (!matches?.length) matches = url.toString().match(privateRegex);
	if (!matches?.length) return null;
	return matches.groups || {};
}
var transform$20 = (src, operations) => {
	const group = parseCloudinaryUrl(src.toString());
	if (!group) return src.toString();
	group.transformations = operationsGenerator$18({
		...operationsParser$15(group.transformations || ""),
		...operations
	});
	return formatCloudinaryUrl(group);
};
//#endregion
//#region node_modules/unpic/esm/src/providers/contentful.js
var operationsGenerator$17 = createOperationsGenerator({
	keyMap: {
		format: "fm",
		width: "w",
		height: "h",
		quality: "q"
	},
	defaults: { fit: "fill" }
});
var generate$19 = (src, modifiers) => {
	const operations = operationsGenerator$17(modifiers);
	const url = new URL(src);
	url.search = operations;
	return toCanonicalUrlString(url);
};
var extractAndGenerate = createExtractAndGenerate(extractFromURL, generate$19);
var transform$19 = (src, operations) => {
	const { width, height } = clampDimensions(operations, 4e3, 4e3);
	return extractAndGenerate(src, {
		...operations,
		width,
		height
	});
};
//#endregion
//#region node_modules/unpic/esm/src/providers/contentstack.js
var operationsGenerator$16 = createOperationsGenerator({ defaults: {
	auto: "webp",
	disable: "upscale"
} });
var generate$18 = (src, operations, { baseURL = "https://images.contentstack.io/" } = {}) => {
	if (operations.width && operations.height) operations.fit ??= "crop";
	const modifiers = operationsGenerator$16(operations);
	const url = toUrl(src);
	if (url.hostname === "n") {
		url.protocol = "https:";
		url.hostname = new URL(baseURL).hostname;
	}
	url.search = modifiers;
	return toCanonicalUrlString(url);
};
var extract$18 = (url) => {
	const { src, operations } = extractFromURL(url) ?? {};
	if (!operations || !src) return null;
	const { origin } = toUrl(url);
	return {
		src,
		operations,
		options: { baseURL: origin }
	};
};
var transform$18 = createExtractAndGenerate(extract$18, generate$18);
//#endregion
//#region node_modules/unpic/esm/src/providers/directus.js
var operationsGenerator$15 = createOperationsGenerator({ defaults: {
	withoutEnlargement: true,
	fit: "cover"
} });
var generate$17 = (src, operations) => {
	if (Array.isArray(operations.transforms)) operations.transforms = JSON.stringify(operations.transforms);
	const modifiers = operationsGenerator$15(operations);
	const url = toUrl(src);
	url.search = modifiers;
	return toCanonicalUrlString(url);
};
var extract$17 = (url) => {
	const base = extractFromURL(url);
	if (base?.operations?.transforms && typeof base.operations.transforms === "string") try {
		base.operations.transforms = JSON.parse(base.operations.transforms);
	} catch {
		return null;
	}
	return base;
};
var transform$17 = createExtractAndGenerate(extract$17, generate$17);
//#endregion
//#region node_modules/unpic/esm/src/providers/hygraph.js
var hygraphRegex = /https:\/\/(?<region>[a-z0-9-]+)\.graphassets\.com\/(?<envId>[a-zA-Z0-9]+)(?:\/(?<transformations>.*?))?\/(?<handle>[a-zA-Z0-9]+)$/;
var { operationsGenerator: operationsGenerator$14, operationsParser: operationsParser$14 } = createOperationsHandlers({
	keyMap: {
		width: "width",
		height: "height",
		format: "format"
	},
	defaults: {
		format: "auto",
		fit: "crop"
	}
});
var extract$16 = (url) => {
	const matches = toUrl(url).toString().match(hygraphRegex);
	if (!matches?.groups) return null;
	const { region, envId, handle, transformations } = matches.groups;
	const operations = {};
	if (transformations) transformations.split("/").forEach((part) => {
		const [operation, params] = part.split("=");
		if (operation === "resize" && params) params.split(",").forEach((param) => {
			const [key, value] = param.split(":");
			if (key === "width" || key === "height") operations[key] = Number(value);
			else if (key === "fit") operations.fit = value;
		});
		else if (operation === "output" && params) params.split(",").forEach((param) => {
			const [key, value] = param.split(":");
			if (key === "format") operations.format = value;
		});
		else if (operation === "auto_image") operations.format = "auto";
	});
	return {
		src: `https://${region}.graphassets.com/${envId}/${handle}`,
		operations,
		options: {
			region,
			envId,
			handle
		}
	};
};
var generate$16 = (src, operations, options = {}) => {
	const extracted = extract$16(src);
	if (!extracted) throw new Error("Invalid Hygraph URL");
	const { region, envId, handle } = {
		...extracted.options,
		...options
	};
	const transforms = [];
	if (operations.width || operations.height) {
		const resize = [];
		if (operations.width && operations.height) resize.push("fit:crop");
		else if (operations.fit) resize.push(`fit:${operations.fit}`);
		if (operations.width) resize.push(`width:${operations.width}`);
		if (operations.height) resize.push(`height:${operations.height}`);
		if (resize.length) transforms.push(`resize=${resize.join(",")}`);
	}
	if (operations.format === "auto" || !operations.format && !extracted.operations.format) transforms.push("auto_image");
	else if (operations.format) transforms.push(`output=format:${operations.format}`);
	return toCanonicalUrlString(toUrl(`${`https://${region}.graphassets.com/${envId}`}${transforms.length > 0 ? "/" + transforms.join("/") : ""}/${handle}`));
};
var transform$16 = createExtractAndGenerate(extract$16, generate$16);
//#endregion
//#region node_modules/unpic/esm/src/providers/imageengine.js
var { operationsGenerator: operationsGenerator$13, operationsParser: operationsParser$13 } = createOperationsHandlers({
	keyMap: {
		width: "w",
		height: "h",
		format: "f"
	},
	defaults: { m: "cropbox" },
	kvSeparator: "_",
	paramSeparator: "/"
});
var generate$15 = (src, operations) => {
	const modifiers = operationsGenerator$13(operations);
	const url = toUrl(src);
	url.searchParams.set("imgeng", modifiers);
	return toCanonicalUrlString(url);
};
var extract$15 = (url) => {
	const parsedUrl = toUrl(url);
	const imgeng = parsedUrl.searchParams.get("imgeng");
	if (!imgeng) return null;
	const operations = operationsParser$13(imgeng);
	parsedUrl.searchParams.delete("imgeng");
	return {
		src: toCanonicalUrlString(parsedUrl),
		operations
	};
};
var transform$15 = createExtractAndGenerate(extract$15, generate$15);
//#endregion
//#region node_modules/unpic/esm/src/providers/imagekit.js
var { operationsGenerator: operationsGenerator$12, operationsParser: operationsParser$12 } = createOperationsHandlers({
	keyMap: {
		width: "w",
		height: "h",
		format: "f",
		quality: "q"
	},
	defaults: {
		c: "maintain_ratio",
		fo: "auto"
	},
	kvSeparator: "-",
	paramSeparator: ","
});
var generate$14 = (src, operations) => {
	const modifiers = operationsGenerator$12(operations);
	const url = toUrl(src);
	url.searchParams.set("tr", modifiers);
	return toCanonicalUrlString(url);
};
var extract$14 = (url) => {
	const parsedUrl = toUrl(url);
	let trPart = null;
	let path = parsedUrl.pathname;
	if (parsedUrl.searchParams.has("tr")) {
		trPart = parsedUrl.searchParams.get("tr");
		parsedUrl.searchParams.delete("tr");
	} else {
		const pathParts = parsedUrl.pathname.split("/");
		const trIndex = pathParts.findIndex((part) => part.startsWith("tr:"));
		if (trIndex !== -1) {
			trPart = pathParts[trIndex].slice(3);
			path = pathParts.slice(0, trIndex).concat(pathParts.slice(trIndex + 1)).join("/");
		}
	}
	if (!trPart) return null;
	parsedUrl.pathname = path;
	const operations = operationsParser$12(trPart);
	return {
		src: toCanonicalUrlString(parsedUrl),
		operations
	};
};
var transform$14 = createExtractAndGenerate(extract$14, generate$14);
//#endregion
//#region node_modules/unpic/esm/src/providers/imgix.js
var { operationsGenerator: operationsGenerator$11, operationsParser: operationsParser$11 } = createOperationsHandlers({
	keyMap: {
		format: "fm",
		width: "w",
		height: "h",
		quality: "q"
	},
	defaults: {
		fit: "min",
		auto: "format"
	}
});
var extract$13 = (url) => {
	const src = toUrl(url);
	const operations = operationsParser$11(url);
	src.search = "";
	return {
		src: toCanonicalUrlString(src),
		operations
	};
};
var generate$13 = (src, operations) => {
	const modifiers = operationsGenerator$11(operations);
	const url = toUrl(src);
	url.search = modifiers;
	if (url.searchParams.has("fm") && url.searchParams.get("auto") === "format") url.searchParams.delete("auto");
	return toCanonicalUrlString(url);
};
var transform$13 = createExtractAndGenerate(extract$13, generate$13);
//#endregion
//#region node_modules/unpic/esm/src/providers/ipx.js
var { operationsGenerator: operationsGenerator$10, operationsParser: operationsParser$10 } = createOperationsHandlers({
	keyMap: {
		width: "w",
		height: "h",
		quality: "q",
		format: "f"
	},
	defaults: { f: "auto" },
	kvSeparator: "_",
	paramSeparator: ","
});
var generate$12 = (src, operations, options) => {
	if (operations.width && operations.height) {
		operations.s = `${operations.width}x${operations.height}`;
		delete operations.width;
		delete operations.height;
	}
	const modifiers = operationsGenerator$10(operations);
	const url = toUrl(options?.baseURL ?? "/_ipx");
	url.pathname = `${stripTrailingSlash(url.pathname)}/${modifiers}/${stripLeadingSlash(src.toString())}`;
	return toCanonicalUrlString(url);
};
var extract$12 = (url) => {
	const parsedUrl = toUrl(url);
	const [, baseUrlPart, modifiers, ...srcParts] = parsedUrl.pathname.split("/");
	if (!modifiers || !srcParts.length) return null;
	const operations = operationsParser$10(modifiers);
	if (operations.s) {
		const [width, height] = operations.s.split("x").map(Number);
		operations.width = width;
		operations.height = height;
		delete operations.s;
	}
	return {
		src: "/" + srcParts.join("/"),
		operations,
		options: { baseURL: `${parsedUrl.origin}/${baseUrlPart}` }
	};
};
var transform$12 = (src, operations, options) => {
	const url = toUrl(src);
	const baseURL = options?.baseURL;
	if (baseURL && url.toString().startsWith(baseURL) || url.pathname.startsWith("/_ipx")) {
		const extracted = extract$12(src);
		if (extracted) return generate$12(extracted.src, {
			...extracted.operations,
			...operations
		}, { baseURL: extracted.options.baseURL });
	}
	return generate$12(src, operations, { baseURL });
};
//#endregion
//#region node_modules/unpic/esm/src/providers/keycdn.js
var BOOLEAN_PARAMS = [
	"enlarge",
	"flip",
	"flop",
	"negate",
	"normalize",
	"grayscale",
	"removealpha",
	"olrepeat",
	"progressive",
	"adaptive",
	"lossless",
	"nearlossless",
	"metadata"
];
var { operationsGenerator: operationsGenerator$9, operationsParser: operationsParser$9 } = createOperationsHandlers({
	defaults: { fit: "cover" },
	formatMap: { jpg: "jpeg" }
});
var generate$11 = (src, operations) => {
	const url = toUrl(src);
	for (const key of BOOLEAN_PARAMS) if (operations[key] !== void 0) operations[key] = operations[key] ? 1 : 0;
	url.search = operationsGenerator$9(operations);
	return toCanonicalUrlString(url);
};
var extract$11 = (url) => {
	const parsedUrl = toUrl(url);
	const operations = operationsParser$9(parsedUrl);
	for (const key of BOOLEAN_PARAMS) if (operations[key] !== void 0) operations[key] = paramToBoolean(operations[key]);
	parsedUrl.search = "";
	return {
		src: toCanonicalUrlString(parsedUrl),
		operations
	};
};
var transform$11 = createExtractAndGenerate(extract$11, generate$11);
//#endregion
//#region node_modules/unpic/esm/src/providers/kontent.ai.js
var { operationsGenerator: operationsGenerator$8, operationsParser: operationsParser$8 } = createOperationsHandlers({
	formatMap: { jpg: "jpeg" },
	keyMap: {
		format: "fm",
		width: "w",
		height: "h",
		quality: "q"
	}
});
var generate$10 = (src, operations) => {
	const url = toUrl(src);
	if (operations.lossless !== void 0) operations.lossless = operations.lossless ? 1 : 0;
	if (operations.width && operations.height) operations.fit = "crop";
	url.search = operationsGenerator$8(operations);
	return toCanonicalUrlString(url);
};
var extract$10 = (url) => {
	const parsedUrl = toUrl(url);
	const operations = operationsParser$8(parsedUrl);
	if (operations.lossless !== void 0) operations.lossless = paramToBoolean(operations.lossless);
	parsedUrl.search = "";
	return {
		src: toCanonicalUrlString(parsedUrl),
		operations
	};
};
var transform$10 = createExtractAndGenerate(extract$10, generate$10);
//#endregion
//#region node_modules/unpic/esm/src/providers/netlify.js
var { operationsGenerator: operationsGenerator$7, operationsParser: operationsParser$7 } = createOperationsHandlers({
	defaults: { fit: "cover" },
	keyMap: {
		format: "fm",
		width: "w",
		height: "h",
		quality: "q"
	}
});
var generate$9 = (src, operations, options = {}) => {
	const url = toUrl(`${options.baseUrl || ""}/.netlify/images`);
	url.search = operationsGenerator$7(operations);
	url.searchParams.set("url", src.toString());
	return toCanonicalUrlString(url);
};
var extract$9 = (url) => {
	if (getProviderForUrlByPath(url) !== "netlify") return null;
	const parsedUrl = toUrl(url);
	const operations = operationsParser$7(parsedUrl);
	delete operations.url;
	const sourceUrl = parsedUrl.searchParams.get("url") || "";
	parsedUrl.search = "";
	return {
		src: sourceUrl,
		operations,
		options: { baseUrl: parsedUrl.hostname === "n" ? void 0 : parsedUrl.origin }
	};
};
var transform$9 = createExtractAndGenerate(extract$9, generate$9);
//#endregion
//#region node_modules/unpic/esm/src/providers/vercel.js
var { operationsGenerator: operationsGenerator$6, operationsParser: operationsParser$6 } = createOperationsHandlers({
	keyMap: {
		width: "w",
		quality: "q",
		height: false,
		format: false
	},
	defaults: { q: 75 }
});
var generate$8 = (src, operations, options = {}) => {
	const url = toUrl(`${options.baseUrl || ""}/${options.prefix || "_vercel"}/image`);
	url.search = operationsGenerator$6(operations);
	url.searchParams.append("url", src.toString());
	return toCanonicalUrlString(url);
};
var extract$8 = (url, options = {}) => {
	if (!["vercel", "nextjs"].includes(getProviderForUrlByPath(url) || "")) return null;
	const parsedUrl = toUrl(url);
	const sourceUrl = parsedUrl.searchParams.get("url") || "";
	parsedUrl.searchParams.delete("url");
	const operations = operationsParser$6(parsedUrl);
	parsedUrl.search = "";
	return {
		src: sourceUrl,
		operations,
		options: { baseUrl: options.baseUrl ?? parsedUrl.origin }
	};
};
var transform$8 = createExtractAndGenerate(extract$8, generate$8);
//#endregion
//#region node_modules/unpic/esm/src/providers/nextjs.js
var generate$7 = (src, operations, options = {}) => generate$8(src, operations, {
	...options,
	prefix: "_next"
});
var extract$7 = (url, options) => extract$8(url, options);
var transform$7 = createExtractAndGenerate(extract$7, generate$7);
//#endregion
//#region node_modules/unpic/esm/src/providers/scene7.js
var { operationsGenerator: operationsGenerator$5, operationsParser: operationsParser$5 } = createOperationsHandlers({
	keyMap: {
		width: "wid",
		height: "hei",
		quality: "qlt",
		format: "fmt"
	},
	defaults: { fit: "crop,0" }
});
var BASE = "https://s7d1.scene7.com/is/image/";
var generate$6 = (src, operations) => {
	const url = new URL(src, BASE);
	url.search = operationsGenerator$5(operations);
	return toCanonicalUrlString(url);
};
var extract$6 = (url) => {
	if (getProviderForUrl(url) !== "scene7") return null;
	const parsedUrl = new URL(url, BASE);
	const operations = operationsParser$5(parsedUrl);
	parsedUrl.search = "";
	return {
		src: parsedUrl.toString(),
		operations
	};
};
var transform$6 = createExtractAndGenerate(extract$6, generate$6);
//#endregion
//#region node_modules/unpic/esm/src/providers/shopify.js
var shopifyRegex = /(.+?)(?:_(?:(pico|icon|thumb|small|compact|medium|large|grande|original|master)|(\d*)x(\d*)))?(?:_crop_([a-z]+))?(\.[a-zA-Z]+)(\.png|\.jpg|\.webp|\.avif)?$/;
var { operationsGenerator: operationsGenerator$4, operationsParser: operationsParser$4 } = createOperationsHandlers({ keyMap: { format: false } });
var generate$5 = (src, operations) => {
	const url = toUrl(src);
	url.pathname = url.pathname.replace(shopifyRegex, "$1$6");
	url.search = operationsGenerator$4(operations);
	return toCanonicalUrlString(url);
};
var extract$5 = (url) => {
	const parsedUrl = toUrl(url);
	const match = shopifyRegex.exec(parsedUrl.pathname);
	const operations = operationsParser$4(parsedUrl);
	if (match) {
		const [, , , width, height, crop] = match;
		if (width && height && !operations.width && !operations.height) {
			operations.width = parseInt(width, 10);
			operations.height = parseInt(height, 10);
		}
		if (crop) operations.crop ??= crop;
	}
	parsedUrl.pathname = parsedUrl.pathname.replace(shopifyRegex, "$1$6");
	for (const key of [
		"width",
		"height",
		"crop",
		"pad_color",
		"format"
	]) parsedUrl.searchParams.delete(key);
	return {
		src: parsedUrl.toString(),
		operations
	};
};
var transform$5 = createExtractAndGenerate(extract$5, generate$5);
//#endregion
//#region node_modules/unpic/esm/src/providers/storyblok.js
var storyBlokAssets = /(?<id>\/f\/\d+\/\d+x\d+\/\w+\/[^\/]+)\/?(?<modifiers>m\/?(?<crop>\d+x\d+:\d+x\d+)?\/?(?<resize>(?<flipx>\-)?(?<width>\d+)x(?<flipy>\-)?(?<height>\d+))?\/?(filters\:(?<filters>[^\/]+))?)?$/;
var storyBlokImg2 = /^(?<modifiers>\/(?<crop>\d+x\d+:\d+x\d+)?\/?(?<resize>(?<flipx>\-)?(?<width>\d+)x(?<flipy>\-)?(?<height>\d+))?\/?(filters\:(?<filters>[^\/]+))?\/?)?(?<id>\/f\/.+)$/;
var filterSplitterRegex = /:(?![^(]*\))/;
var splitFilters = (filters) => {
	if (!filters) return {};
	return Object.fromEntries(filters.split(filterSplitterRegex).map((filter) => {
		if (!filter) return [];
		const [key, value] = filter.split("(");
		return [key, value.replace(")", "")];
	}));
};
var generateFilters = (filters) => {
	if (!filters) return;
	const filterItems = Object.entries(filters).map(([key, value]) => `${key}(${value ?? ""})`);
	if (filterItems.length === 0) return;
	return `filters:${filterItems.join(":")}`;
};
var extract$4 = (url) => {
	const parsedUrl = toUrl(url);
	const matches = (parsedUrl.hostname === "img2.storyblok.com" ? storyBlokImg2 : storyBlokAssets).exec(parsedUrl.pathname);
	if (!matches || !matches.groups) return null;
	const { id, crop, width, height, filters, flipx, flipy } = matches.groups;
	const { format, ...filterMap } = splitFilters(filters ?? "");
	if (parsedUrl.hostname === "img2.storyblok.com") parsedUrl.hostname = "a.storyblok.com";
	const operations = Object.fromEntries([
		["width", Number(width) || void 0],
		["height", Number(height) || void 0],
		["format", format],
		["crop", crop],
		["filters", filterMap],
		["flipx", flipx],
		["flipy", flipy]
	].filter(([_, value]) => value !== void 0));
	return {
		src: `${parsedUrl.origin}${id}`,
		operations
	};
};
var generate$4 = (src, operations) => {
	const url = toUrl(src);
	const { width = 0, height = 0, format, crop, filters = {}, flipx = "", flipy = "" } = operations;
	const size = `${flipx}${width}x${flipy}${height}`;
	if (format) filters.format = format;
	url.pathname = [
		url.pathname,
		"m",
		crop,
		size,
		generateFilters(filters)
	].filter(Boolean).join("/");
	return toCanonicalUrlString(url);
};
var transform$4 = createExtractAndGenerate(extract$4, generate$4);
//#endregion
//#region node_modules/unpic/esm/src/providers/supabase.js
var STORAGE_URL_PREFIX = "/storage/v1/object/public/";
var RENDER_URL_PREFIX = "/storage/v1/render/image/public/";
var isRenderUrl = (url) => url.pathname.startsWith(RENDER_URL_PREFIX);
var { operationsGenerator: operationsGenerator$3, operationsParser: operationsParser$3 } = createOperationsHandlers({});
var generate$3 = (src, operations) => {
	const url = toUrl(src);
	url.pathname = url.pathname.replace(RENDER_URL_PREFIX, STORAGE_URL_PREFIX);
	if (operations.format && operations.format !== "origin") delete operations.format;
	url.search = operationsGenerator$3(operations);
	return toCanonicalUrlString(url).replace(STORAGE_URL_PREFIX, RENDER_URL_PREFIX);
};
var extract$3 = (url) => {
	const parsedUrl = toUrl(url);
	const operations = operationsParser$3(parsedUrl);
	const isRender = isRenderUrl(parsedUrl);
	const imagePath = parsedUrl.pathname.replace(RENDER_URL_PREFIX, "").replace(STORAGE_URL_PREFIX, "");
	if (!isRender) return {
		src: toCanonicalUrlString(parsedUrl),
		operations
	};
	return {
		src: `${parsedUrl.origin}${STORAGE_URL_PREFIX}${imagePath}`,
		operations
	};
};
var transform$3 = createExtractAndGenerate(extract$3, generate$3);
//#endregion
//#region node_modules/unpic/esm/src/providers/uploadcare.js
var uploadcareRegex = /^https?:\/\/(?<host>[^\/]+)\/(?<uuid>[^\/]+)(?:\/(?<filename>[^\/]+)?)?/;
var { operationsGenerator: operationsGenerator$2, operationsParser: operationsParser$2 } = createOperationsHandlers({
	keyMap: {
		width: false,
		height: false
	},
	defaults: { format: "auto" },
	kvSeparator: "/",
	paramSeparator: "/-/"
});
var extract$2 = (url) => {
	const parsedUrl = toUrl(url);
	const match = uploadcareRegex.exec(parsedUrl.toString());
	if (!match || !match.groups) return null;
	const { host, uuid } = match.groups;
	const [, ...operationsString] = parsedUrl.pathname.split("/-/");
	const operations = operationsParser$2(operationsString.join("/-/") || "");
	if (operations.resize) {
		const [width, height] = operations.resize.split("x");
		if (width) operations.width = parseInt(width);
		if (height) operations.height = parseInt(height);
		delete operations.resize;
	}
	return {
		src: `https://${host}/${uuid}/`,
		operations,
		options: { host }
	};
};
var generate$2 = (src, operations, options = {}) => {
	const url = toUrl(src);
	const host = options.host || url.hostname;
	const match = uploadcareRegex.exec(url.toString());
	if (match?.groups) url.pathname = `/${match.groups.uuid}/`;
	operations.resize = operations.resize || `${operations.width ?? ""}x${operations.height ?? ""}`;
	delete operations.width;
	delete operations.height;
	const modifiers = addTrailingSlash(operationsGenerator$2(operations));
	url.hostname = host;
	url.pathname = stripTrailingSlash(url.pathname) + (modifiers ? `/-/${modifiers}` : "") + (match?.groups?.filename ?? "");
	return toCanonicalUrlString(url);
};
var transform$2 = createExtractAndGenerate(extract$2, generate$2);
//#endregion
//#region node_modules/unpic/esm/src/providers/wordpress.js
var { operationsGenerator: operationsGenerator$1, operationsParser: operationsParser$1 } = createOperationsHandlers({
	keyMap: {
		width: "w",
		height: "h"
	},
	defaults: { crop: "1" }
});
var generate$1 = (src, operations) => {
	const url = toUrl(src);
	const { crop } = operations;
	if (typeof crop !== "undefined" && crop !== "0") operations.crop = crop ? "1" : "0";
	url.search = operationsGenerator$1(operations);
	return toCanonicalUrlString(url);
};
var extract$1 = (url) => {
	const parsedUrl = toUrl(url);
	const operations = operationsParser$1(parsedUrl);
	if (operations.crop !== void 0) operations.crop = operations.crop === "1";
	parsedUrl.search = "";
	return {
		src: toCanonicalUrlString(parsedUrl),
		operations
	};
};
var transform$1 = createExtractAndGenerate(extract$1, generate$1);
//#endregion
//#region node_modules/unpic/esm/src/providers/wsrv.js
var { operationsGenerator, operationsParser } = createOperationsHandlers({
	keyMap: {
		width: "w",
		height: "h",
		format: "output",
		quality: "q"
	},
	defaults: { fit: "cover" }
});
var extract = (url) => {
	const urlObj = toUrl(url);
	const srcParam = urlObj.searchParams.get("url");
	if (!srcParam) return null;
	let src = srcParam;
	if (!src.startsWith("http://") && !src.startsWith("https://")) src = "https://" + src;
	urlObj.searchParams.delete("url");
	const operations = operationsParser(urlObj);
	return {
		src,
		operations
	};
};
var generate = (src, operations) => {
	const url = new URL("https://wsrv.nl/");
	const cleanSrc = (typeof src === "string" ? src : src.toString()).replace(/^https?:\/\//, "");
	url.searchParams.set("url", cleanSrc);
	const params = operationsGenerator(operations);
	const searchParams = new URLSearchParams(params);
	for (const [key, value] of searchParams) if (key !== "url") url.searchParams.set(key, value);
	return toCanonicalUrlString(url);
};
//#endregion
//#region node_modules/unpic/esm/src/transform.js
var transformerMap = {
	appwrite: transform$27,
	astro: transform$26,
	"builder.io": transform$25,
	bunny: transform$24,
	cloudflare: transform$23,
	cloudflare_images: transform$22,
	cloudimage: transform$21,
	cloudinary: transform$20,
	contentful: transform$19,
	contentstack: transform$18,
	directus: transform$17,
	hygraph: transform$16,
	imageengine: transform$15,
	imagekit: transform$14,
	imgix: transform$13,
	ipx: transform$12,
	keycdn: transform$11,
	"kontent.ai": transform$10,
	netlify: transform$9,
	nextjs: transform$7,
	scene7: transform$6,
	shopify: transform$5,
	storyblok: transform$4,
	supabase: transform$3,
	uploadcare: transform$2,
	vercel: transform$8,
	wordpress: transform$1,
	wsrv: createExtractAndGenerate(extract, generate)
};
/**
* Returns a transformer function if the given CDN is supported
*/
function getTransformerForCdn(cdn) {
	if (!cdn) return;
	return transformerMap[cdn];
}
//#endregion
//#region node_modules/@unpic/core/dist/auto.mjs
function transformProps({ cdn, fallback, operations = {}, options, ...props }) {
	cdn ??= getProviderForUrl(props.src) || fallback;
	if (!cdn) return props;
	const transformer = getTransformerForCdn(cdn);
	if (!transformer) return props;
	return transformBaseImageProps({
		...props,
		operations: operations?.[cdn],
		options: options?.[cdn],
		transformer
	});
}
function transformSourceProps({ cdn, fallback, operations, options, ...props }) {
	cdn ??= getProviderForUrl(props.src) || fallback;
	if (!cdn) return props;
	const transformer = getTransformerForCdn(cdn);
	if (!transformer) return props;
	return transformBaseSourceProps({
		...props,
		operations: operations?.[cdn],
		options: options?.[cdn],
		transformer
	});
}
//#endregion
//#region node_modules/@unpic/react/dist/chunk-SNIEDJZS.mjs
var Image$1 = import_react.forwardRef(function Image2(props, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		...camelizeProps(transformProps(props)),
		ref
	});
});
import_react.forwardRef(function Source2(props, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
		...camelizeProps(transformSourceProps(props)),
		ref
	});
});
//#endregion
//#region node_modules/vinext/dist/shims/image.js
var image_exports = /* @__PURE__ */ __exportAll({
	default: () => Image,
	imageOptimizationUrl: () => imageOptimizationUrl
});
/**
* next/image shim
*
* Translates Next.js Image props to @unpic/react Image component.
* @unpic/react auto-detects CDN from URL and uses native transforms.
* For local images (relative paths), routes through `/_vinext/image`
* for server-side optimization (resize, format negotiation, quality).
*
* Remote images are validated against `images.remotePatterns` and
* `images.domains` from next.config.js. Unmatched URLs are blocked
* in production and warn in development, matching Next.js behavior.
*/
/**
* Image config injected at build time via Vite define.
* Serialized as JSON — parsed once at module level.
*/
var __imageRemotePatterns = (() => {
	try {
		return JSON.parse("[]");
	} catch {
		return [];
	}
})();
var __imageDomains = (() => {
	try {
		return JSON.parse("[]");
	} catch {
		return [];
	}
})();
var __hasImageConfig = __imageRemotePatterns.length > 0 || __imageDomains.length > 0;
var __imageDeviceSizes = (() => {
	try {
		return JSON.parse("[640,750,828,1080,1200,1920,2048,3840]");
	} catch {
		return [
			640,
			750,
			828,
			1080,
			1200,
			1920,
			2048,
			3840
		];
	}
})();
/**
* Validate that a remote URL is allowed by the configured remote patterns.
* Returns true if the URL is allowed, false otherwise.
*
* When no remotePatterns/domains are configured, all remote URLs are allowed
* (backwards-compatible — user hasn't opted into restriction).
*
* When patterns ARE configured, only matching URLs are allowed.
* In development, non-matching URLs produce a console warning.
* In production, non-matching URLs are blocked (src replaced with empty string).
*
* Private-IP hostnames are additionally rejected unless dangerouslyAllowLocalIP
* is set, mirroring Next.js's fetchExternalImage guard.
*/
function validateRemoteUrl(src) {
	let url;
	try {
		url = new URL(src, "http://n");
	} catch {
		return {
			allowed: false,
			reason: `Invalid URL: ${src}`
		};
	}
	if (isPrivateIp(url.hostname)) return {
		allowed: false,
		reason: `Image URL "${src}" resolved to private IP. If this is expected and you understand SSRF risk, use images.dangerouslyAllowLocalIP = true to continue.`
	};
	if (!__hasImageConfig) return { allowed: true };
	if (hasRemoteMatch(__imageDomains, __imageRemotePatterns, url)) return { allowed: true };
	return {
		allowed: false,
		reason: `Image URL "${src}" is not configured in images.remotePatterns or images.domains in next.config.js. See: https://nextjs.org/docs/messages/next-image-unconfigured-host`
	};
}
/**
* A version of useLayoutEffect that doesn't warn during SSR.
* Do not rename this to "isomorphic layout effect". There is no such thing as
* an isomorphic Layout Effect since there is no Layout on the server.
* Ported from Next.js: https://github.com/vercel/next.js/pull/93209
*/
var useNonWarningLayoutEffect = typeof window === "undefined" ? import_react.useEffect : import_react.useLayoutEffect;
/**
* Create a synthetic React load event for replaying onLoad/onLoadingComplete
* during hydration when the image already completed loading.
*
* This function creates a native Event("load") via the DOM Event constructor
* and must only be called in a browser context (client-side layout effect).
* It mirrors the pattern used in Next.js `handleLoading`.
*/
function createSyntheticLoadEvent(img) {
	const nativeEvent = new Event("load");
	Object.defineProperty(nativeEvent, "target", {
		writable: false,
		value: img
	});
	let prevented = false;
	let stopped = false;
	return {
		bubbles: nativeEvent.bubbles,
		cancelable: nativeEvent.cancelable,
		currentTarget: img,
		defaultPrevented: false,
		eventPhase: nativeEvent.eventPhase,
		isTrusted: false,
		nativeEvent,
		target: img,
		timeStamp: nativeEvent.timeStamp,
		type: "load",
		isDefaultPrevented: () => prevented,
		isPropagationStopped: () => stopped,
		persist: () => {},
		preventDefault: () => {
			prevented = true;
			nativeEvent.preventDefault();
		},
		stopPropagation: () => {
			stopped = true;
			nativeEvent.stopPropagation();
		}
	};
}
/**
* Sanitize a blurDataURL to prevent CSS injection.
*
* A crafted data URL containing `)` can break out of the `url()` CSS function,
* allowing injection of arbitrary CSS properties or rules. Characters like `{`,
* `}`, and `\` can also assist in crafting injection payloads.
*
* This validates the URL starts with `data:image/` and rejects characters that
* could escape the `url()` context. Semicolons are allowed since they're part
* of valid data URLs (`data:image/png;base64,...`) and harmless inside `url()`.
*
* Returns undefined for invalid URLs, which causes the blur placeholder to be
* skipped gracefully.
*/
function sanitizeBlurDataURL(url) {
	if (!url.startsWith("data:image/")) return void 0;
	if (/[)(}{\\'"\n\r]/.test(url)) return void 0;
	return url;
}
/**
* Determine if a src is a remote URL (CDN-optimizable) or local.
*/
function isRemoteUrl(src) {
	return src.startsWith("http://") || src.startsWith("https://") || src.startsWith("//");
}
function getFillStyle(style, backgroundStyle) {
	return {
		position: "absolute",
		inset: 0,
		width: "100%",
		height: "100%",
		objectFit: "cover",
		...backgroundStyle,
		...style
	};
}
/**
* Resolve src, width, height, blurDataURL from Image props (string or StaticImageData).
* Shared by the Image component and getImageProps to keep behavior in sync.
*/
function resolveImageSource(v) {
	return {
		src: typeof v.src === "string" ? v.src : v.src.src,
		width: v.width ?? (typeof v.src === "object" ? v.src.width : void 0),
		height: v.height ?? (typeof v.src === "object" ? v.src.height : void 0),
		blurDataURL: v.blurDataURL ?? (typeof v.src === "object" ? v.src.blurDataURL : void 0)
	};
}
/**
* Responsive image widths matching Next.js's device sizes config.
* These are the breakpoints used for srcSet generation.
* Configurable via `images.deviceSizes` in next.config.js.
*/
var RESPONSIVE_WIDTHS = __imageDeviceSizes;
/**
* Build a `/_vinext/image` optimization URL.
*
* In production (Cloudflare Workers), the worker intercepts this path and uses
* the Images binding to resize/transcode on the fly. In dev, the Vite dev
* server handles it as a passthrough (serves the original file).
*/
function imageOptimizationUrl(src, width, quality = 75) {
	return `/_vinext/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
}
function preloadImageResource(input) {
	if (!input.shouldPreload) return;
	if (typeof import_react_dom.preload !== "function") return;
	import_react_dom.preload(input.src, {
		as: "image",
		imageSrcSet: input.srcSet,
		imageSizes: input.sizes,
		fetchPriority: input.fetchPriority
	});
}
/**
* Generate a srcSet string for responsive images.
*
* Each width points to the `/_vinext/image` optimization endpoint so the
* server can resize and transcode the image. Only includes widths that are
* <= 2x the original image width to avoid pointless upscaling.
*/
function generateSrcSet(src, originalWidth, quality = 75) {
	const widths = RESPONSIVE_WIDTHS.filter((w) => w <= originalWidth * 2);
	if (widths.length === 0) return `${imageOptimizationUrl(src, originalWidth, quality)} ${originalWidth}w`;
	return widths.map((w) => `${imageOptimizationUrl(src, w, quality)} ${w}w`).join(", ");
}
var Image = (0, import_react.forwardRef)(function Image({ src: srcProp, alt, width, height, fill, preload, priority, quality, placeholder, blurDataURL, loader, sizes, className, style, onLoad, onLoadingComplete, onError, unoptimized: _unoptimized, overrideSrc: _overrideSrc, loading, ...rest }, ref) {
	const lastLoadedSrcRef = (0, import_react.useRef)(void 0);
	const lastErrorSrcRef = (0, import_react.useRef)(void 0);
	const didInsertRef = (0, import_react.useRef)(false);
	const imgElementRef = (0, import_react.useRef)(null);
	const mergedRef = useMergedRef(ref, imgElementRef);
	const onLoadRef = (0, import_react.useRef)(onLoad);
	(0, import_react.useEffect)(() => {
		onLoadRef.current = onLoad;
	}, [onLoad]);
	const onErrorRef = (0, import_react.useRef)(onError);
	(0, import_react.useEffect)(() => {
		onErrorRef.current = onError;
	}, [onError]);
	const onLoadingCompleteRef = (0, import_react.useRef)(onLoadingComplete);
	(0, import_react.useEffect)(() => {
		onLoadingCompleteRef.current = onLoadingComplete;
	}, [onLoadingComplete]);
	const { src, width: imgWidth, height: imgHeight, blurDataURL: imgBlurDataURL } = resolveImageSource({
		src: srcProp,
		width,
		height,
		blurDataURL
	});
	const shouldPreload = preload === true || priority === true;
	const priorityFetchPriority = priority ? "high" : void 0;
	const imageLoading = priority ? "eager" : shouldPreload ? loading : loading ?? "lazy";
	const [completedBlurSrc, setCompletedBlurSrc] = (0, import_react.useState)(void 0);
	const blurComplete = completedBlurSrc === src;
	const markBlurComplete = () => {
		if (placeholder !== "blur") return;
		setCompletedBlurSrc((current) => current === src ? current : src);
	};
	useNonWarningLayoutEffect(() => {
		if (!didInsertRef.current && imgElementRef.current !== null) {
			const img = imgElementRef.current;
			if (onErrorRef.current) img.src = img.src;
			if (img.complete && img.naturalWidth > 0) {
				markBlurComplete();
				const currentOnLoad = onLoadRef.current;
				const currentOnLoadingComplete = onLoadingCompleteRef.current;
				if (currentOnLoad || currentOnLoadingComplete) {
					if (lastLoadedSrcRef.current !== src) {
						lastLoadedSrcRef.current = src;
						const syntheticEvent = createSyntheticLoadEvent(img);
						currentOnLoad?.(syntheticEvent);
						currentOnLoadingComplete?.(img);
					}
				}
			}
			didInsertRef.current = true;
		}
	}, [
		placeholder,
		sizes,
		_unoptimized
	]);
	const handleLoad = onLoadingComplete ? (e) => {
		if (lastLoadedSrcRef.current === src) return;
		lastLoadedSrcRef.current = src;
		markBlurComplete();
		onLoad?.(e);
		onLoadingComplete(e.currentTarget);
	} : onLoad ? (e) => {
		if (lastLoadedSrcRef.current === src) return;
		lastLoadedSrcRef.current = src;
		markBlurComplete();
		onLoad(e);
	} : placeholder === "blur" ? () => {
		if (lastLoadedSrcRef.current === src) return;
		lastLoadedSrcRef.current = src;
		markBlurComplete();
	} : void 0;
	const handleError = onError ? (e) => {
		if (lastErrorSrcRef.current === src) return;
		lastErrorSrcRef.current = src;
		markBlurComplete();
		onError(e);
	} : placeholder === "blur" ? () => {
		if (lastErrorSrcRef.current === src) return;
		lastErrorSrcRef.current = src;
		markBlurComplete();
	} : void 0;
	if (loader) {
		const resolvedSrc = loader({
			src,
			width: imgWidth ?? 0,
			quality: quality ?? 75
		});
		preloadImageResource({
			shouldPreload,
			src: resolvedSrc,
			sizes,
			fetchPriority: priorityFetchPriority
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			ref: mergedRef,
			src: resolvedSrc,
			alt,
			width: fill ? void 0 : imgWidth,
			height: fill ? void 0 : imgHeight,
			loading: imageLoading,
			decoding: "async",
			sizes,
			className,
			onLoad: handleLoad,
			onError: handleError,
			style: fill ? getFillStyle(style) : style,
			...rest
		});
	}
	if (isRemoteUrl(src)) {
		const validation = validateRemoteUrl(src);
		if (!validation.allowed) {
			console.error(`[next/image] ${validation.reason}`);
			return null;
		}
		const sanitizedBlur = imgBlurDataURL ? sanitizeBlurDataURL(imgBlurDataURL) : void 0;
		const showBlur = !blurComplete && placeholder === "blur" && sanitizedBlur;
		const blurStyle = showBlur ? {
			backgroundImage: `url(${sanitizedBlur})`,
			backgroundSize: "cover",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center"
		} : void 0;
		const bg = showBlur ? `url(${sanitizedBlur})` : void 0;
		if (fill) {
			const fillSizes = sizes ?? "100vw";
			preloadImageResource({
				shouldPreload,
				src,
				sizes: fillSizes,
				fetchPriority: priorityFetchPriority
			});
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				ref: mergedRef,
				src,
				alt,
				loading: imageLoading,
				fetchPriority: priorityFetchPriority,
				decoding: "async",
				sizes: fillSizes,
				className,
				"data-nimg": "fill",
				onLoad: handleLoad,
				onError: handleError,
				style: getFillStyle(style, blurStyle),
				...rest
			});
		}
		if (imgWidth && imgHeight) {
			const unpicRuntimeStyleProps = { style };
			preloadImageResource({
				shouldPreload,
				src,
				sizes,
				fetchPriority: priorityFetchPriority
			});
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image$1, {
				src,
				alt,
				width: imgWidth,
				height: imgHeight,
				layout: "constrained",
				loading: imageLoading,
				fetchPriority: priorityFetchPriority,
				sizes,
				className,
				...unpicRuntimeStyleProps,
				background: bg,
				onLoad: handleLoad,
				onError: handleError,
				ref: mergedRef
			});
		}
	}
	const imgQuality = quality ?? 75;
	const isSvg = src.endsWith(".svg");
	const skipOptimization = _unoptimized === true || isSvg && true;
	const srcSet = imgWidth && !fill && !skipOptimization ? generateSrcSet(src, imgWidth, imgQuality) : imgWidth && !fill ? RESPONSIVE_WIDTHS.filter((w) => w <= imgWidth * 2).map((w) => `${src} ${w}w`).join(", ") || `${src} ${imgWidth}w` : void 0;
	const optimizedSrc = skipOptimization ? src : imgWidth ? imageOptimizationUrl(src, imgWidth, imgQuality) : imageOptimizationUrl(src, RESPONSIVE_WIDTHS[0], imgQuality);
	const sanitizedLocalBlur = imgBlurDataURL ? sanitizeBlurDataURL(imgBlurDataURL) : void 0;
	const blurStyle = !blurComplete && placeholder === "blur" && sanitizedLocalBlur ? {
		backgroundImage: `url(${sanitizedLocalBlur})`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center"
	} : void 0;
	const imageSizes = sizes ?? (fill ? "100vw" : void 0);
	preloadImageResource({
		shouldPreload,
		src: optimizedSrc,
		srcSet,
		sizes: imageSizes,
		fetchPriority: priorityFetchPriority
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		ref: mergedRef,
		src: optimizedSrc,
		alt,
		width: fill ? void 0 : imgWidth,
		height: fill ? void 0 : imgHeight,
		loading: imageLoading,
		fetchPriority: priorityFetchPriority,
		decoding: "async",
		srcSet,
		sizes: imageSizes,
		className,
		"data-nimg": fill ? "fill" : "1",
		onLoad: handleLoad,
		onError: handleError,
		style: fill ? getFillStyle(style, blurStyle) : {
			...blurStyle,
			...style
		},
		...rest
	});
});
//#endregion
export { image_exports as n, Image as t };
