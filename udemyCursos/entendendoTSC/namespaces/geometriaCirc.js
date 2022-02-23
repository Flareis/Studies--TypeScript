"use strict";
var Geometria;
(function (Geometria) {
    let Area;
    (function (Area) {
        const PI = 3.14;
        function areaCincunferecia(raio) {
            return PI * Math.pow(raio, 2);
        }
        Area.areaCincunferecia = areaCincunferecia;
    })(Area = Geometria.Area || (Geometria.Area = {}));
})(Geometria || (Geometria = {}));
//# sourceMappingURL=geometriaCirc.js.map