import { XMLParser, XMLBuilder } from "fast-xml-parser";

const parseXML = (xml) => {
  const parser = new XMLParser();
  let jObject = parser.parse(xml);
  console.log(JSON.stringify(jObject));
};

export default parseXML;
