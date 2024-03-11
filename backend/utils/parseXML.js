import { XMLParser, XMLBuilder } from "fast-xml-parser";

const parseXML = (xml) => {
  const options = {
    ignoreAttributes: false,
    attributeNamePrefix: "",
    attributesGroupName: "",
  };
  const parser = new XMLParser(options);
  let jObject = parser.parse(xml);
  return jObject;
};

export default parseXML;
