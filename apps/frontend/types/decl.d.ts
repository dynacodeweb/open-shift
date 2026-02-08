declare module '*.css';
declare module '*.scss';
declare module '*.sass';
declare module '*.less';

declare module '*.geojson' {
  const value: {
    type: 'FeatureCollection';
    features: Array<{
      type: 'Feature';
      id: number;
      properties: {
        [key: string]: string;
        STATE_CODE: string;
        STATE_NAME: string;
      };
      geometry: {
        type: 'Polygon' | 'MultiPolygon';
        coordinates:
          | Array<Array<Array<[number, number]>>>
          | Array<Array<Array<Array<[number, number]>>>>;
      };
    }>;
  };
  export default value;
}
