var img = new Image();
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let revertBtn = document.getElementById("revert-btn");
let compressBtn = document.getElementById("compressbtn")
var fileName = "";

$(document).ready(function () {
    $("#brightness-inc").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.brightness(10).render();
        });
    });

    $("#brightness-dec").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.brightness(-10).render();
        });
    });

    $("#contrast-inc").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.contrast(10).render();
        });
    });

    $("#contrast-dec").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.contrast(-10).render();
        });
    });

    $("#saturation-inc").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.saturation(10).render();
        });
    });

    $("#saturation-dec").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.saturation(-10).render();
        });
    });

    $("#vibrance-inc").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.vibrance(10).render();
        });
    });

    $("#vibrance-dec").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.vibrance(-10).render();
        });
    });

    $("#exposure-inc").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.exposure(10).render();
        });
    });

    $("#exposure-dec").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.exposure(-10).render();
        });
    });

    $("#noise-inc").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.noise(10).render();
        });
    });

    $("#sharpen-inc").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.sharpen(10).render();
        });
    });

    $("#sepia-inc").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.sepia(20).render();
        });
    });

    $("#hue-inc").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.hue(10).render();
        });
    });

    $("#blur-inc").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.stackBlur(5).render();
        });
    });

    $("#gamma-inc").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.gamma(0.1).render();
        });
    });

    $("#clip-inc").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.clip(10).render();
        });
    });

    $("#vintage-btn").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.vintage().render();
        });
    });

    $("#lomo-btn").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.lomo().render();
        });
    });

    $("#calrity-btn").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.clarity().render();
        });
    });

    $("#sincity-btn").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.sinCity().render();
        });
    });

    $("#crossprocess-btn").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.crossProcess().render();
        });
    });

    $("#pinhole-btn").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.pinhole().render();
        });
    });

    $("#nostalgia-btn").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.nostalgia().render();
        });
    });

    $("#majestic-btn").on("click", function (e) {
        Caman("#canvas", img, function () {
            this.herMajesty().render();
        });
    });
    // Revert Filters
    revertBtn.addEventListener("click", e => {
        Caman("#canvas", img, function () {
            this.revert();
        });
    });

    $("#download-btn").on("click", function (e) {
        var fileExtension = fileName.slice(-4);
        if (fileExtension == ".jpg" || fileExtension == ".png") {
            var actualName = fileName.substring(0, fileName.length - 4);
        }
        download(canvas, actualName + "-edited.jpg");
    });

    $("#upload-file").on("change", function () {
        var file = document.querySelector("#upload-file").files[0];
        var reader = new FileReader();

        if (file) {
            fileName = file.name;
            reader.readAsDataURL(file);
        }

        reader.addEventListener(
            "load",
            function () {
                img = new Image();
                img.src = reader.result;
                img.onload = function () {
                    canvas.width = img.width;
                    canvas.height = img.height;
                    ctx.drawImage(img, 0, 0, img.width, img.height);
                    $("#canvas").removeAttr("data-caman-id");
                };
            },
            false
        );
    });
});

function download(canvas, filename) {
    var e;
    var lnk = document.createElement("a");

    lnk.download = filename;

    lnk.href = canvas.toDataURL("image/jpeg", 0.8);

    if (document.createEvent) {
        e = document.createEvent("MouseEvents");
        e.initMouseEvent(
            "click",
            true,
            true,
            window,
            0,
            0,
            0,
            0,
            0,
            false,
            false,
            false,
            false,
            0,
            null
        );
        lnk.dispatchEvent(e);
    } else if (lnk.fireEvent) {
        lnk.fireEvent("onclick");
    }
}

compressBtn.addEventListener('click', compressFunction)

var jic = {
    compress: function (t, e, n) {
        var a = "image/jpeg";
        "undefined" != typeof n && "png" == n && (a = "image/png");
        var r = document.createElement("canvas");
        r.width = t.naturalWidth, r.height = t.naturalHeight;
        var o = (r.getContext("2d").drawImage(t, 0, 0), r.toDataURL(a, e / 100)),
            s = new Image;
        return s.src = o, s
    },
    upload: function (t, e, n, a, r, o, s, i) {
        void 0 === XMLHttpRequest.prototype.sendAsBinary && (XMLHttpRequest.prototype.sendAsBinary = function (t) {
            var e = Array.prototype.map.call(t, function (t) {
                return 255 & t.charCodeAt(0)
            });
            this.send(new Uint8Array(e).buffer)
        });
        var p = "image/jpeg";
        ".png" == a.substr(-4) && (p = "image/png");
        var u = t.src;
        u = u.replace("data:" + p + ";base64,", "");
        var d = new XMLHttpRequest;
        d.open("POST", e, !0);
        var c = "someboundary";
        if (d.setRequestHeader("Content-Type", "multipart/form-data; boundary=" + c), i && "object" == typeof i)
            for (var f in i) d.setRequestHeader(f, i[f]);
        s && s instanceof Function && (d.upload.onprogress = function (t) {
            t.lengthComputable && s(t.loaded / t.total * 100)
        }), d.sendAsBinary(["--" + c, 'Content-Disposition: form-data; name="' + n + '"; filename="' + a + '"', "Content-Type: " + p, "", atob(u), "--" + c + "--"].join("\r\n")), d.onreadystatechange = function () {
            4 == this.readyState && (200 == this.status ? r(this.responseText) : this.status >= 400 && o && o instanceof Function && o(this.responseText))
        }
    }
};

function compressFunction() {
    const quality = 60,
        output_format = 'jpg';
    img.src = jic.compress(canvas, quality, output_format).src;

};