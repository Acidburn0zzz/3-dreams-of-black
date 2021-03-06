// Three.js r38 - http://github.com/mrdoob/three.js
var THREE = THREE || {};
THREE.Color = function(b) {
    this.setHex(b)
};
THREE.Color.prototype = {autoUpdate:!0,copy:function(b) {
    this.r = b.r;
    this.g = b.g;
    this.b = b.b;
    this.hex = b.hex;
    this.__styleString = b.__styleString
},setRGB:function(b, c, d) {
    this.r = b;
    this.g = c;
    this.b = d;
    if (this.autoUpdate) {
        this.updateHex();
        this.updateStyleString()
    }
},setHSV:function(b, c, d) {
    var f,g,h,j,k,m;
    if (d == 0)f = g = h = 0; else {
        j = Math.floor(b * 6);
        k = b * 6 - j;
        b = d * (1 - c);
        m = d * (1 - c * k);
        c = d * (1 - c * (1 - k));
        switch (j) {case 1:f = m;g = d;h = b;break;case 2:f = b;g = d;h = c;break;case 3:f = b;g = m;h = d;break;case 4:f = c;g = b;h = d;break;case 5:f = d;g = b;
            h = m;break;case 6:case 0:f = d;g = c;h = b
        }
    }
    this.r = f;
    this.g = g;
    this.b = h;
    if (this.autoUpdate) {
        this.updateHex();
        this.updateStyleString()
    }
},setHex:function(b) {
    this.hex = ~~b & 16777215;
    if (this.autoUpdate) {
        this.updateRGB();
        this.updateStyleString()
    }
},updateHex:function() {
    this.hex = ~~(this.r * 255) << 16 ^ ~~(this.g * 255) << 8 ^ ~~(this.b * 255)
},updateRGB:function() {
    this.r = (this.hex >> 16 & 255) / 255;
    this.g = (this.hex >> 8 & 255) / 255;
    this.b = (this.hex & 255) / 255
},updateStyleString:function() {
    this.__styleString = "rgb(" + ~~(this.r * 255) + "," + ~~(this.g *
            255) + "," + ~~(this.b * 255) + ")"
},clone:function() {
    return new THREE.Color(this.hex)
}};
THREE.Vector2 = function(b, c) {
    this.set(b || 0, c || 0)
};
THREE.Vector2.prototype = {set:function(b, c) {
    this.x = b;
    this.y = c;
    return this
},copy:function(b) {
    this.set(b.x, b.y);
    return this
},addSelf:function(b) {
    this.set(this.x + b.x, this.y + b.y);
    return this
},add:function(b, c) {
    this.set(b.x + c.x, b.y + c.y);
    return this
},subSelf:function(b) {
    this.set(this.x - b.x, this.y - b.y);
    return this
},sub:function(b, c) {
    this.set(b.x - c.x, b.y - c.y);
    return this
},multiplyScalar:function(b) {
    this.set(this.x * b, this.y * b);
    return this
},negate:function() {
    this.set(-this.x, -this.y);
    return this
},unit:function() {
    this.multiplyScalar(1 /
            this.length());
    return this
},length:function() {
    return Math.sqrt(this.lengthSq())
},lengthSq:function() {
    return this.x * this.x + this.y * this.y
},clone:function() {
    return new THREE.Vector2(this.x, this.y)
}};
THREE.Vector3 = function(b, c, d) {
    this.set(b || 0, c || 0, d || 0)
};
THREE.Vector3.prototype = {set:function(b, c, d) {
    this.x = b;
    this.y = c;
    this.z = d;
    return this
},copy:function(b) {
    this.set(b.x, b.y, b.z);
    return this
},add:function(b, c) {
    this.set(b.x + c.x, b.y + c.y, b.z + c.z);
    return this
},addSelf:function(b) {
    this.set(this.x + b.x, this.y + b.y, this.z + b.z);
    return this
},addScalar:function(b) {
    this.set(this.x + b, this.y + b, this.z + b);
    return this
},sub:function(b, c) {
    this.set(b.x - c.x, b.y - c.y, b.z - c.z);
    return this
},subSelf:function(b) {
    this.set(this.x - b.x, this.y - b.y, this.z - b.z);
    return this
},cross:function(b, c) {
    this.set(b.y * c.z - b.z * c.y, b.z * c.x - b.x * c.z, b.x * c.y - b.y * c.x);
    return this
},crossSelf:function(b) {
    var c = this.x,d = this.y,f = this.z;
    this.set(d * b.z - f * b.y, f * b.x - c * b.z, c * b.y - d * b.x);
    return this
},multiply:function(b, c) {
    this.set(b.x * c.x, b.y * c.y, b.z * c.z);
    return this
},multiplySelf:function(b) {
    this.set(this.x * b.x, this.y * b.y, this.z * b.z);
    return this
},multiplyScalar:function(b) {
    this.set(this.x * b, this.y * b, this.z * b);
    return this
},divideSelf:function(b) {
    this.set(this.x / b.x, this.y / b.y, this.z / b.z);
    return this
},divideScalar:function(b) {
    this.set(this.x /
            b, this.y / b, this.z / b);
    return this
},negate:function() {
    this.set(-this.x, -this.y, -this.z);
    return this
},dot:function(b) {
    return this.x * b.x + this.y * b.y + this.z * b.z
},distanceTo:function(b) {
    return Math.sqrt(this.distanceToSquared(b))
},distanceToSquared:function(b) {
    var c = this.x - b.x,d = this.y - b.y;
    b = this.z - b.z;
    return c * c + d * d + b * b
},length:function() {
    return Math.sqrt(this.lengthSq())
},lengthSq:function() {
    return this.x * this.x + this.y * this.y + this.z * this.z
},lengthManhattan:function() {
    return this.x + this.y + this.z
},normalize:function() {
    var b =
            this.length();
    b > 0 ? this.multiplyScalar(1 / b) : this.set(0, 0, 0);
    return this
},setPositionFromMatrix:function(b) {
    this.x = b.n14;
    this.y = b.n24;
    this.z = b.n34
},setRotationFromMatrix:function(b) {
    this.y = Math.asin(b.n13);
    var c = Math.cos(this.y);
    if (Math.abs(c) > 1.0E-5) {
        this.x = Math.atan2(-b.n23 / c, b.n33 / c);
        this.z = Math.atan2(-b.n13 / c, b.n11 / c)
    } else {
        this.x = 0;
        this.z = Math.atan2(b.n21, b.n22)
    }
},setLength:function(b) {
    return this.normalize().multiplyScalar(b)
},isZero:function() {
    return Math.abs(this.x) < 1.0E-4 && Math.abs(this.y) <
            1.0E-4 && Math.abs(this.z) < 1.0E-4
},clone:function() {
    return new THREE.Vector3(this.x, this.y, this.z)
}};
THREE.Vector4 = function(b, c, d, f) {
    this.set(b || 0, c || 0, d || 0, f || 1)
};
THREE.Vector4.prototype = {set:function(b, c, d, f) {
    this.x = b;
    this.y = c;
    this.z = d;
    this.w = f;
    return this
},copy:function(b) {
    this.set(b.x, b.y, b.z, b.w || 1);
    return this
},add:function(b, c) {
    this.set(b.x + c.x, b.y + c.y, b.z + c.z, b.w + c.w);
    return this
},addSelf:function(b) {
    this.set(this.x + b.x, this.y + b.y, this.z + b.z, this.w + b.w);
    return this
},sub:function(b, c) {
    this.set(b.x - c.x, b.y - c.y, b.z - c.z, b.w - c.w);
    return this
},subSelf:function(b) {
    this.set(this.x - b.x, this.y - b.y, this.z - b.z, this.w - b.w);
    return this
},multiplyScalar:function(b) {
    this.set(this.x *
            b, this.y * b, this.z * b, this.w * b);
    return this
},divideScalar:function(b) {
    this.set(this.x / b, this.y / b, this.z / b, this.w / b);
    return this
},lerpSelf:function(b, c) {
    this.set(this.x + (b.x - this.x) * c, this.y + (b.y - this.y) * c, this.z + (b.z - this.z) * c, this.w + (b.w - this.w) * c)
},clone:function() {
    return new THREE.Vector4(this.x, this.y, this.z, this.w)
}};
THREE.Ray = function(b, c) {
    this.origin = b || new THREE.Vector3;
    this.direction = c || new THREE.Vector3
};
THREE.Ray.prototype = {intersectScene:function(b) {
    var c,d,f = b.objects,g = [];
    b = 0;
    for (c = f.length; b < c; b++) {
        d = f[b];
        d instanceof THREE.Mesh && (g = g.concat(this.intersectObject(d)))
    }
    g.sort(function(h, j) {
        return h.distance - j.distance
    });
    return g
},intersectObject:function(b) {
    function c(G, L, V, z) {
        z = z.clone().subSelf(L);
        V = V.clone().subSelf(L);
        var K = G.clone().subSelf(L);
        G = z.dot(z);
        L = z.dot(V);
        z = z.dot(K);
        var P = V.dot(V);
        V = V.dot(K);
        K = 1 / (G * P - L * L);
        P = (P * z - L * V) * K;
        G = (G * V - L * z) * K;
        return P > 0 && G > 0 && P + G < 1
    }

    var d,f,g,h,j,k,m,p,o,w,
            y,v = b.geometry,A = v.vertices,F = [];
    d = 0;
    for (f = v.faces.length; d < f; d++) {
        g = v.faces[d];
        w = this.origin.clone();
        y = this.direction.clone();
        m = b.matrixWorld;
        h = m.multiplyVector3(A[g.a].position.clone());
        j = m.multiplyVector3(A[g.b].position.clone());
        k = m.multiplyVector3(A[g.c].position.clone());
        m = g instanceof THREE.Face4 ? m.multiplyVector3(A[g.d].position.clone()) : null;
        p = b.matrixRotationWorld.multiplyVector3(g.normal.clone());
        o = y.dot(p);
        if (b.doubleSided || (b.flipSided ? o > 0 : o < 0)) {
            p = p.dot((new THREE.Vector3).sub(h, w)) /
                    o;
            w = w.addSelf(y.multiplyScalar(p));
            if (g instanceof THREE.Face3) {
                if (c(w, h, j, k)) {
                    g = {distance:this.origin.distanceTo(w),point:w,face:g,object:b};
                    F.push(g)
                }
            } else if (g instanceof THREE.Face4 && (c(w, h, j, m) || c(w, j, k, m))) {
                g = {distance:this.origin.distanceTo(w),point:w,face:g,object:b};
                F.push(g)
            }
        }
    }
    return F
}};
THREE.Rectangle = function() {
    function b() {
        h = f - c;
        j = g - d
    }

    var c,d,f,g,h,j,k = !0;
    this.getX = function() {
        return c
    };
    this.getY = function() {
        return d
    };
    this.getWidth = function() {
        return h
    };
    this.getHeight = function() {
        return j
    };
    this.getLeft = function() {
        return c
    };
    this.getTop = function() {
        return d
    };
    this.getRight = function() {
        return f
    };
    this.getBottom = function() {
        return g
    };
    this.set = function(m, p, o, w) {
        k = !1;
        c = m;
        d = p;
        f = o;
        g = w;
        b()
    };
    this.addPoint = function(m, p) {
        if (k) {
            k = !1;
            c = m;
            d = p;
            f = m;
            g = p
        } else {
            c = c < m ? c : m;
            d = d < p ? d : p;
            f = f > m ? f : m;
            g = g > p ? g : p
        }
        b()
    };
    this.add3Points = function(m, p, o, w, y, v) {
        if (k) {
            k = !1;
            c = m < o ? m < y ? m : y : o < y ? o : y;
            d = p < w ? p < v ? p : v : w < v ? w : v;
            f = m > o ? m > y ? m : y : o > y ? o : y;
            g = p > w ? p > v ? p : v : w > v ? w : v
        } else {
            c = m < o ? m < y ? m < c ? m : c : y < c ? y : c : o < y ? o < c ? o : c : y < c ? y : c;
            d = p < w ? p < v ? p < d ? p : d : v < d ? v : d : w < v ? w < d ? w : d : v < d ? v : d;
            f = m > o ? m > y ? m > f ? m : f : y > f ? y : f : o > y ? o > f ? o : f : y > f ? y : f;
            g = p > w ? p > v ? p > g ? p : g : v > g ? v : g : w > v ? w > g ? w : g : v > g ? v : g
        }
        b()
    };
    this.addRectangle = function(m) {
        if (k) {
            k = !1;
            c = m.getLeft();
            d = m.getTop();
            f = m.getRight();
            g = m.getBottom()
        } else {
            c = c < m.getLeft() ? c : m.getLeft();
            d = d < m.getTop() ? d : m.getTop();
            f = f > m.getRight() ?
                    f : m.getRight();
            g = g > m.getBottom() ? g : m.getBottom()
        }
        b()
    };
    this.inflate = function(m) {
        c -= m;
        d -= m;
        f += m;
        g += m;
        b()
    };
    this.minSelf = function(m) {
        c = c > m.getLeft() ? c : m.getLeft();
        d = d > m.getTop() ? d : m.getTop();
        f = f < m.getRight() ? f : m.getRight();
        g = g < m.getBottom() ? g : m.getBottom();
        b()
    };
    this.instersects = function(m) {
        return Math.min(f, m.getRight()) - Math.max(c, m.getLeft()) >= 0 && Math.min(g, m.getBottom()) - Math.max(d, m.getTop()) >= 0
    };
    this.empty = function() {
        k = !0;
        g = f = d = c = 0;
        b()
    };
    this.isEmpty = function() {
        return k
    }
};
THREE.Matrix3 = function() {
    this.m = []
};
THREE.Matrix3.prototype = {transpose:function() {
    var b,c = this.m;
    b = c[1];
    c[1] = c[3];
    c[3] = b;
    b = c[2];
    c[2] = c[6];
    c[6] = b;
    b = c[5];
    c[5] = c[7];
    c[7] = b;
    return this
},transposeIntoArray:function(b) {
    var c = this.m;
    b[0] = c[0];
    b[1] = c[3];
    b[2] = c[6];
    b[3] = c[1];
    b[4] = c[4];
    b[5] = c[7];
    b[6] = c[2];
    b[7] = c[5];
    b[8] = c[8];
    return this
}};
THREE.Matrix4 = function(b, c, d, f, g, h, j, k, m, p, o, w, y, v, A, F) {
    this.set(b || 1, c || 0, d || 0, f || 0, g || 0, h || 1, j || 0, k || 0, m || 0, p || 0, o || 1, w || 0, y || 0, v || 0, A || 0, F || 1);
    this.flat = Array(16);
    this.m33 = new THREE.Matrix3
};
THREE.Matrix4.prototype = {set:function(b, c, d, f, g, h, j, k, m, p, o, w, y, v, A, F) {
    this.n11 = b;
    this.n12 = c;
    this.n13 = d;
    this.n14 = f;
    this.n21 = g;
    this.n22 = h;
    this.n23 = j;
    this.n24 = k;
    this.n31 = m;
    this.n32 = p;
    this.n33 = o;
    this.n34 = w;
    this.n41 = y;
    this.n42 = v;
    this.n43 = A;
    this.n44 = F;
    return this
},identity:function() {
    this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    return this
},copy:function(b) {
    this.set(b.n11, b.n12, b.n13, b.n14, b.n21, b.n22, b.n23, b.n24, b.n31, b.n32, b.n33, b.n34, b.n41, b.n42, b.n43, b.n44);
    return this
},lookAt:function(b, c, d) {
    var f = THREE.Matrix4.__v1,
            g = THREE.Matrix4.__v2,h = THREE.Matrix4.__v3;
    h.sub(b, c).normalize();
    if (h.length() === 0)h.z = 1;
    f.cross(d, h).normalize();
    if (f.length() === 0) {
        h.x += 1.0E-4;
        f.cross(d, h).normalize()
    }
    g.cross(h, f).normalize();
    this.n11 = f.x;
    this.n12 = g.x;
    this.n13 = h.x;
    this.n21 = f.y;
    this.n22 = g.y;
    this.n23 = h.y;
    this.n31 = f.z;
    this.n32 = g.z;
    this.n33 = h.z;
    return this
},multiplyVector3:function(b) {
    var c = b.x,d = b.y,f = b.z,g = 1 / (this.n41 * c + this.n42 * d + this.n43 * f + this.n44);
    b.x = (this.n11 * c + this.n12 * d + this.n13 * f + this.n14) * g;
    b.y = (this.n21 * c + this.n22 * d + this.n23 *
            f + this.n24) * g;
    b.z = (this.n31 * c + this.n32 * d + this.n33 * f + this.n34) * g;
    return b
},multiplyVector4:function(b) {
    var c = b.x,d = b.y,f = b.z,g = b.w;
    b.x = this.n11 * c + this.n12 * d + this.n13 * f + this.n14 * g;
    b.y = this.n21 * c + this.n22 * d + this.n23 * f + this.n24 * g;
    b.z = this.n31 * c + this.n32 * d + this.n33 * f + this.n34 * g;
    b.w = this.n41 * c + this.n42 * d + this.n43 * f + this.n44 * g;
    return b
},rotateAxis:function(b) {
    var c = b.x,d = b.y,f = b.z;
    b.x = c * this.n11 + d * this.n12 + f * this.n13;
    b.y = c * this.n21 + d * this.n22 + f * this.n23;
    b.z = c * this.n31 + d * this.n32 + f * this.n33;
    b.normalize();
    return b
},crossVector:function(b) {
    var c = new THREE.Vector4;
    c.x = this.n11 * b.x + this.n12 * b.y + this.n13 * b.z + this.n14 * b.w;
    c.y = this.n21 * b.x + this.n22 * b.y + this.n23 * b.z + this.n24 * b.w;
    c.z = this.n31 * b.x + this.n32 * b.y + this.n33 * b.z + this.n34 * b.w;
    c.w = b.w ? this.n41 * b.x + this.n42 * b.y + this.n43 * b.z + this.n44 * b.w : 1;
    return c
},multiply:function(b, c) {
    var d = b.n11,f = b.n12,g = b.n13,h = b.n14,j = b.n21,k = b.n22,m = b.n23,p = b.n24,o = b.n31,w = b.n32,y = b.n33,v = b.n34,A = b.n41,F = b.n42,G = b.n43,L = b.n44,V = c.n11,z = c.n12,K = c.n13,P = c.n14,S = c.n21,xa = c.n22,
            ra = c.n23,pa = c.n24,e = c.n31,fa = c.n32,ca = c.n33,ya = c.n34;
    this.n11 = d * V + f * S + g * e;
    this.n12 = d * z + f * xa + g * fa;
    this.n13 = d * K + f * ra + g * ca;
    this.n14 = d * P + f * pa + g * ya + h;
    this.n21 = j * V + k * S + m * e;
    this.n22 = j * z + k * xa + m * fa;
    this.n23 = j * K + k * ra + m * ca;
    this.n24 = j * P + k * pa + m * ya + p;
    this.n31 = o * V + w * S + y * e;
    this.n32 = o * z + w * xa + y * fa;
    this.n33 = o * K + w * ra + y * ca;
    this.n34 = o * P + w * pa + y * ya + v;
    this.n41 = A * V + F * S + G * e;
    this.n42 = A * z + F * xa + G * fa;
    this.n43 = A * K + F * ra + G * ca;
    this.n44 = A * P + F * pa + G * ya + L;
    return this
},multiplyToArray:function(b, c, d) {
    this.multiply(b, c);
    d[0] = this.n11;
    d[1] =
            this.n21;
    d[2] = this.n31;
    d[3] = this.n41;
    d[4] = this.n12;
    d[5] = this.n22;
    d[6] = this.n32;
    d[7] = this.n42;
    d[8] = this.n13;
    d[9] = this.n23;
    d[10] = this.n33;
    d[11] = this.n43;
    d[12] = this.n14;
    d[13] = this.n24;
    d[14] = this.n34;
    d[15] = this.n44;
    return this
},multiplySelf:function(b) {
    this.multiply(this, b);
    return this
},multiplyScalar:function(b) {
    this.n11 *= b;
    this.n12 *= b;
    this.n13 *= b;
    this.n14 *= b;
    this.n21 *= b;
    this.n22 *= b;
    this.n23 *= b;
    this.n24 *= b;
    this.n31 *= b;
    this.n32 *= b;
    this.n33 *= b;
    this.n34 *= b;
    this.n41 *= b;
    this.n42 *= b;
    this.n43 *= b;
    this.n44 *=
            b;
    return this
},determinant:function() {
    var b = this.n11,c = this.n12,d = this.n13,f = this.n14,g = this.n21,h = this.n22,j = this.n23,k = this.n24,m = this.n31,p = this.n32,o = this.n33,w = this.n34,y = this.n41,v = this.n42,A = this.n43,F = this.n44;
    return f * j * p * y - d * k * p * y - f * h * o * y + c * k * o * y + d * h * w * y - c * j * w * y - f * j * m * v + d * k * m * v + f * g * o * v - b * k * o * v - d * g * w * v + b * j * w * v + f * h * m * A - c * k * m * A - f * g * p * A + b * k * p * A + c * g * w * A - b * h * w * A - d * h * m * F + c * j * m * F + d * g * p * F - b * j * p * F - c * g * o * F + b * h * o * F
},transpose:function() {
    var b;
    b = this.n21;
    this.n21 = this.n12;
    this.n12 = b;
    b = this.n31;
    this.n31 =
            this.n13;
    this.n13 = b;
    b = this.n32;
    this.n32 = this.n23;
    this.n23 = b;
    b = this.n41;
    this.n41 = this.n14;
    this.n14 = b;
    b = this.n42;
    this.n42 = this.n24;
    this.n24 = b;
    b = this.n43;
    this.n43 = this.n34;
    this.n43 = b;
    return this
},clone:function() {
    var b = new THREE.Matrix4;
    b.n11 = this.n11;
    b.n12 = this.n12;
    b.n13 = this.n13;
    b.n14 = this.n14;
    b.n21 = this.n21;
    b.n22 = this.n22;
    b.n23 = this.n23;
    b.n24 = this.n24;
    b.n31 = this.n31;
    b.n32 = this.n32;
    b.n33 = this.n33;
    b.n34 = this.n34;
    b.n41 = this.n41;
    b.n42 = this.n42;
    b.n43 = this.n43;
    b.n44 = this.n44;
    return b
},flatten:function() {
    this.flat[0] =
            this.n11;
    this.flat[1] = this.n21;
    this.flat[2] = this.n31;
    this.flat[3] = this.n41;
    this.flat[4] = this.n12;
    this.flat[5] = this.n22;
    this.flat[6] = this.n32;
    this.flat[7] = this.n42;
    this.flat[8] = this.n13;
    this.flat[9] = this.n23;
    this.flat[10] = this.n33;
    this.flat[11] = this.n43;
    this.flat[12] = this.n14;
    this.flat[13] = this.n24;
    this.flat[14] = this.n34;
    this.flat[15] = this.n44;
    return this.flat
},flattenToArray:function(b) {
    b[0] = this.n11;
    b[1] = this.n21;
    b[2] = this.n31;
    b[3] = this.n41;
    b[4] = this.n12;
    b[5] = this.n22;
    b[6] = this.n32;
    b[7] = this.n42;
    b[8] = this.n13;
    b[9] = this.n23;
    b[10] = this.n33;
    b[11] = this.n43;
    b[12] = this.n14;
    b[13] = this.n24;
    b[14] = this.n34;
    b[15] = this.n44;
    return b
},flattenToArrayOffset:function(b, c) {
    b[c] = this.n11;
    b[c + 1] = this.n21;
    b[c + 2] = this.n31;
    b[c + 3] = this.n41;
    b[c + 4] = this.n12;
    b[c + 5] = this.n22;
    b[c + 6] = this.n32;
    b[c + 7] = this.n42;
    b[c + 8] = this.n13;
    b[c + 9] = this.n23;
    b[c + 10] = this.n33;
    b[c + 11] = this.n43;
    b[c + 12] = this.n14;
    b[c + 13] = this.n24;
    b[c + 14] = this.n34;
    b[c + 15] = this.n44;
    return b
},setTranslation:function(b, c, d) {
    this.set(1, 0, 0, b, 0, 1, 0, c, 0, 0, 1, d, 0, 0,
            0, 1);
    return this
},setScale:function(b, c, d) {
    this.set(b, 0, 0, 0, 0, c, 0, 0, 0, 0, d, 0, 0, 0, 0, 1);
    return this
},setRotationX:function(b) {
    var c = Math.cos(b);
    b = Math.sin(b);
    this.set(1, 0, 0, 0, 0, c, -b, 0, 0, b, c, 0, 0, 0, 0, 1);
    return this
},setRotationY:function(b) {
    var c = Math.cos(b);
    b = Math.sin(b);
    this.set(c, 0, b, 0, 0, 1, 0, 0, -b, 0, c, 0, 0, 0, 0, 1);
    return this
},setRotationZ:function(b) {
    var c = Math.cos(b);
    b = Math.sin(b);
    this.set(c, -b, 0, 0, b, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    return this
},setRotationAxis:function(b, c) {
    var d = Math.cos(c),f = Math.sin(c),g =
            1 - d,h = b.x,j = b.y,k = b.z,m = g * h,p = g * j;
    this.set(m * h + d, m * j - f * k, m * k + f * j, 0, m * j + f * k, p * j + d, p * k - f * h, 0, m * k - f * j, p * k + f * h, g * k * k + d, 0, 0, 0, 0, 1);
    return this
},setPosition:function(b) {
    this.n14 = b.x;
    this.n24 = b.y;
    this.n34 = b.z;
    return this
},setRotationFromEuler:function(b) {
    var c = b.x,d = b.y,f = b.z;
    b = Math.cos(c);
    c = Math.sin(c);
    var g = Math.cos(d);
    d = Math.sin(d);
    var h = Math.cos(f);
    f = Math.sin(f);
    var j = b * d,k = c * d;
    this.n11 = g * h;
    this.n12 = -g * f;
    this.n13 = d;
    this.n21 = k * h + b * f;
    this.n22 = -k * f + b * h;
    this.n23 = -c * g;
    this.n31 = -j * h + c * f;
    this.n32 = j * f + c * h;
    this.n33 =
            b * g;
    return this
},setRotationFromQuaternion:function(b) {
    var c = b.x,d = b.y,f = b.z,g = b.w,h = c + c,j = d + d,k = f + f;
    b = c * h;
    var m = c * j;
    c *= k;
    var p = d * j;
    d *= k;
    f *= k;
    h *= g;
    j *= g;
    g *= k;
    this.n11 = 1 - (p + f);
    this.n12 = m - g;
    this.n13 = c + j;
    this.n21 = m + g;
    this.n22 = 1 - (b + f);
    this.n23 = d - h;
    this.n31 = c - j;
    this.n32 = d + h;
    this.n33 = 1 - (b + p);
    return this
},scale:function(b) {
    var c = b.x,d = b.y;
    b = b.z;
    this.n11 *= c;
    this.n12 *= d;
    this.n13 *= b;
    this.n21 *= c;
    this.n22 *= d;
    this.n23 *= b;
    this.n31 *= c;
    this.n32 *= d;
    this.n33 *= b;
    this.n41 *= c;
    this.n42 *= d;
    this.n43 *= b;
    return this
},extractPosition:function(b) {
    this.n14 =
            b.n14;
    this.n24 = b.n24;
    this.n34 = b.n34
},extractRotation:function(b, c) {
    var d = 1 / c.x,f = 1 / c.y,g = 1 / c.z;
    this.n11 = b.n11 * d;
    this.n21 = b.n21 * d;
    this.n31 = b.n31 * d;
    this.n12 = b.n12 * f;
    this.n22 = b.n22 * f;
    this.n32 = b.n32 * f;
    this.n13 = b.n13 * g;
    this.n23 = b.n23 * g;
    this.n33 = b.n33 * g
}};
THREE.Matrix4.makeInvert = function(b, c) {
    var d = b.n11,f = b.n12,g = b.n13,h = b.n14,j = b.n21,k = b.n22,m = b.n23,p = b.n24,o = b.n31,w = b.n32,y = b.n33,v = b.n34,A = b.n41,F = b.n42,G = b.n43,L = b.n44;
    c === undefined && (c = new THREE.Matrix4);
    c.n11 = m * v * F - p * y * F + p * w * G - k * v * G - m * w * L + k * y * L;
    c.n12 = h * y * F - g * v * F - h * w * G + f * v * G + g * w * L - f * y * L;
    c.n13 = g * p * F - h * m * F + h * k * G - f * p * G - g * k * L + f * m * L;
    c.n14 = h * m * w - g * p * w - h * k * y + f * p * y + g * k * v - f * m * v;
    c.n21 = p * y * A - m * v * A - p * o * G + j * v * G + m * o * L - j * y * L;
    c.n22 = g * v * A - h * y * A + h * o * G - d * v * G - g * o * L + d * y * L;
    c.n23 = h * m * A - g * p * A - h * j * G + d * p * G + g * j * L - d * m * L;
    c.n24 = g * p * o - h * m * o + h * j * y - d * p * y - g * j * v + d * m * v;
    c.n31 = k * v * A - p * w * A + p * o * F - j * v * F - k * o * L + j * w * L;
    c.n32 = h * w * A - f * v * A - h * o * F + d * v * F + f * o * L - d * w * L;
    c.n33 = g * p * A - h * k * A + h * j * F - d * p * F - f * j * L + d * k * L;
    c.n34 = h * k * o - f * p * o - h * j * w + d * p * w + f * j * v - d * k * v;
    c.n41 = m * w * A - k * y * A - m * o * F + j * y * F + k * o * G - j * w * G;
    c.n42 = f * y * A - g * w * A + g * o * F - d * y * F - f * o * G + d * w * G;
    c.n43 = g * k * A - f * m * A - g * j * F + d * m * F + f * j * G - d * k * G;
    c.n44 = f * m * o - g * k * o + g * j * w - d * m * w - f * j * y + d * k * y;
    c.multiplyScalar(1 / b.determinant());
    return c
};
THREE.Matrix4.makeInvert3x3 = function(b) {
    var c = b.m33,d = c.m,f = b.n33 * b.n22 - b.n32 * b.n23,g = -b.n33 * b.n21 + b.n31 * b.n23,h = b.n32 * b.n21 - b.n31 * b.n22,j = -b.n33 * b.n12 + b.n32 * b.n13,k = b.n33 * b.n11 - b.n31 * b.n13,m = -b.n32 * b.n11 + b.n31 * b.n12,p = b.n23 * b.n12 - b.n22 * b.n13,o = -b.n23 * b.n11 + b.n21 * b.n13,w = b.n22 * b.n11 - b.n21 * b.n12;
    b = b.n11 * f + b.n21 * j + b.n31 * p;
    if (b == 0)throw"matrix not invertible";
    b = 1 / b;
    d[0] = b * f;
    d[1] = b * g;
    d[2] = b * h;
    d[3] = b * j;
    d[4] = b * k;
    d[5] = b * m;
    d[6] = b * p;
    d[7] = b * o;
    d[8] = b * w;
    return c
};
THREE.Matrix4.makeFrustum = function(b, c, d, f, g, h) {
    var j;
    j = new THREE.Matrix4;
    j.n11 = 2 * g / (c - b);
    j.n12 = 0;
    j.n13 = (c + b) / (c - b);
    j.n14 = 0;
    j.n21 = 0;
    j.n22 = 2 * g / (f - d);
    j.n23 = (f + d) / (f - d);
    j.n24 = 0;
    j.n31 = 0;
    j.n32 = 0;
    j.n33 = -(h + g) / (h - g);
    j.n34 = -2 * h * g / (h - g);
    j.n41 = 0;
    j.n42 = 0;
    j.n43 = -1;
    j.n44 = 0;
    return j
};
THREE.Matrix4.makePerspective = function(b, c, d, f) {
    var g;
    b = d * Math.tan(b * Math.PI / 360);
    g = -b;
    return THREE.Matrix4.makeFrustum(g * c, b * c, g, b, d, f)
};
THREE.Matrix4.makeOrtho = function(b, c, d, f, g, h) {
    var j,k,m,p;
    j = new THREE.Matrix4;
    k = c - b;
    m = d - f;
    p = h - g;
    j.n11 = 2 / k;
    j.n12 = 0;
    j.n13 = 0;
    j.n14 = -((c + b) / k);
    j.n21 = 0;
    j.n22 = 2 / m;
    j.n23 = 0;
    j.n24 = -((d + f) / m);
    j.n31 = 0;
    j.n32 = 0;
    j.n33 = -2 / p;
    j.n34 = -((h + g) / p);
    j.n41 = 0;
    j.n42 = 0;
    j.n43 = 0;
    j.n44 = 1;
    return j
};
THREE.Matrix4.__v1 = new THREE.Vector3;
THREE.Matrix4.__v2 = new THREE.Vector3;
THREE.Matrix4.__v3 = new THREE.Vector3;
THREE.Object3D = function() {
    this.parent = undefined;
    this.children = [];
    this.up = new THREE.Vector3(0, 1, 0);
    this.position = new THREE.Vector3;
    this.rotation = new THREE.Vector3;
    this.scale = new THREE.Vector3(1, 1, 1);
    this.rotationAutoUpdate = !0;
    this.matrix = new THREE.Matrix4;
    this.matrixWorld = new THREE.Matrix4;
    this.matrixRotationWorld = new THREE.Matrix4;
    this.matrixAutoUpdate = !0;
    this.matrixWorldNeedsUpdate = !0;
    this.quaternion = new THREE.Quaternion;
    this.useQuaternion = !1;
    this.boundRadius = 0;
    this.boundRadiusScale = 1;
    this.visible =
            !0;
    this._vector = new THREE.Vector3
};
THREE.Object3D.prototype = {translate:function(b, c) {
    this.matrix.rotateAxis(c);
    this.position.addSelf(c.multiplyScalar(b))
},translateX:function(b) {
    this.translate(b, this._vector.set(1, 0, 0))
},translateY:function(b) {
    this.translate(b, this._vector.set(0, 1, 0))
},translateZ:function(b) {
    this.translate(b, this._vector.set(0, 0, 1))
},lookAt:function(b) {
    this.matrix.lookAt(this.position, b, this.up);
    this.rotationAutoUpdate && this.rotation.setRotationFromMatrix(this.matrix)
},addChild:function(b) {
    if (this.children.indexOf(b) === -1) {
        b.parent !==
                undefined && b.parent.removeChild(b);
        b.parent = this;
        this.children.push(b);
        for (var c = this; c instanceof THREE.Scene === !1 && c !== undefined;)c = c.parent;
        c !== undefined && c.addChildRecurse(b)
    }
},removeChild:function(b) {
    var c = this.children.indexOf(b);
    if (c !== -1) {
        b.parent = undefined;
        this.children.splice(c, 1)
    }
},updateMatrix:function() {
    this.matrix.setPosition(this.position);
    this.useQuaternion ? this.matrix.setRotationFromQuaternion(this.quaternion) : this.matrix.setRotationFromEuler(this.rotation);
    if (this.scale.x !== 1 || this.scale.y !==
            1 || this.scale.z !== 1) {
        this.matrix.scale(this.scale);
        this.boundRadiusScale = Math.max(this.scale.x, Math.max(this.scale.y, this.scale.z))
    }
    this.matrixWorldNeedsUpdate = !0
},update:function(b, c, d) {
    this.matrixAutoUpdate && this.updateMatrix();
    if (this.matrixWorldNeedsUpdate || c) {
        b ? this.matrixWorld.multiply(b, this.matrix) : this.matrixWorld.copy(this.matrix);
        this.matrixRotationWorld.extractRotation(this.matrixWorld, this.scale);
        this.matrixWorldNeedsUpdate = !1;
        c = !0
    }
    b = 0;
    for (var f = this.children.length; b < f; b++)this.children[b].update(this.matrixWorld,
            c, d)
}};
THREE.Quaternion = function(b, c, d, f) {
    this.set(b || 0, c || 0, d || 0, f !== undefined ? f : 1)
};
THREE.Quaternion.prototype = {set:function(b, c, d, f) {
    this.x = b;
    this.y = c;
    this.z = d;
    this.w = f;
    return this
},setFromEuler:function(b) {
    var c = 0.5 * Math.PI / 360,d = b.x * c,f = b.y * c,g = b.z * c;
    b = Math.cos(f);
    f = Math.sin(f);
    c = Math.cos(-g);
    g = Math.sin(-g);
    var h = Math.cos(d);
    d = Math.sin(d);
    var j = b * c,k = f * g;
    this.w = j * h - k * d;
    this.x = j * d + k * h;
    this.y = f * c * h + b * g * d;
    this.z = b * g * h - f * c * d;
    return this
},calculateW:function() {
    this.w = -Math.sqrt(Math.abs(1 - this.x * this.x - this.y * this.y - this.z * this.z));
    return this
},inverse:function() {
    this.x *= -1;
    this.y *=
            -1;
    this.z *= -1;
    return this
},length:function() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
},normalize:function() {
    var b = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
    if (b == 0)this.w = this.z = this.y = this.x = 0; else {
        b = 1 / b;
        this.x *= b;
        this.y *= b;
        this.z *= b;
        this.w *= b
    }
    return this
},multiplySelf:function(b) {
    var c = this.x,d = this.y,f = this.z,g = this.w,h = b.x,j = b.y,k = b.z;
    b = b.w;
    this.x = c * b + g * h + d * k - f * j;
    this.y = d * b + g * j + f * h - c * k;
    this.z = f * b + g * k + c * j - d * h;
    this.w = g * b - c * h - d * j - f * k;
    return this
},
    multiplyVector3:function(b, c) {
        c || (c = b);
        var d = b.x,f = b.y,g = b.z,h = this.x,j = this.y,k = this.z,m = this.w,p = m * d + j * g - k * f,o = m * f + k * d - h * g,w = m * g + h * f - j * d;
        d = -h * d - j * f - k * g;
        c.x = p * m + d * -h + o * -k - w * -j;
        c.y = o * m + d * -j + w * -h - p * -k;
        c.z = w * m + d * -k + p * -j - o * -h;
        return c
    }};
THREE.Quaternion.slerp = function(b, c, d, f) {
    var g = b.w * c.w + b.x * c.x + b.y * c.y + b.z * c.z;
    if (Math.abs(g) >= 1) {
        d.w = b.w;
        d.x = b.x;
        d.y = b.y;
        d.z = b.z;
        return d
    }
    var h = Math.acos(g),j = Math.sqrt(1 - g * g);
    if (Math.abs(j) < 0.0010) {
        d.w = 0.5 * (b.w + c.w);
        d.x = 0.5 * (b.x + c.x);
        d.y = 0.5 * (b.y + c.y);
        d.z = 0.5 * (b.z + c.z);
        return d
    }
    g = Math.sin((1 - f) * h) / j;
    f = Math.sin(f * h) / j;
    d.w = b.w * g + c.w * f;
    d.x = b.x * g + c.x * f;
    d.y = b.y * g + c.y * f;
    d.z = b.z * g + c.z * f;
    return d
};
THREE.Vertex = function(b) {
    this.position = b || new THREE.Vector3
};
THREE.Face3 = function(b, c, d, f, g, h) {
    this.a = b;
    this.b = c;
    this.c = d;
    this.normal = f instanceof THREE.Vector3 ? f : new THREE.Vector3;
    this.vertexNormals = f instanceof Array ? f : [];
    this.color = g instanceof THREE.Color ? g : new THREE.Color;
    this.vertexColors = g instanceof Array ? g : [];
    this.vertexTangents = [];
    this.materials = h instanceof Array ? h : [h];
    this.centroid = new THREE.Vector3
};
THREE.Face4 = function(b, c, d, f, g, h, j) {
    this.a = b;
    this.b = c;
    this.c = d;
    this.d = f;
    this.normal = g instanceof THREE.Vector3 ? g : new THREE.Vector3;
    this.vertexNormals = g instanceof Array ? g : [];
    this.color = h instanceof THREE.Color ? h : new THREE.Color;
    this.vertexColors = h instanceof Array ? h : [];
    this.vertexTangents = [];
    this.materials = j instanceof Array ? j : [j];
    this.centroid = new THREE.Vector3
};
THREE.UV = function(b, c) {
    this.set(b || 0, c || 0)
};
THREE.UV.prototype = {set:function(b, c) {
    this.u = b;
    this.v = c;
    return this
},copy:function(b) {
    this.set(b.u, b.v);
    return this
}};
THREE.Geometry = function() {
    this.id = "Geometry" + THREE.GeometryIdCounter++;
    this.vertices = [];
    this.colors = [];
    this.faces = [];
    this.edges = [];
    this.faceUvs = [
        []
    ];
    this.faceVertexUvs = [
        []
    ];
    this.morphTargets = [];
    this.morphColors = [];
    this.skinWeights = [];
    this.skinIndices = [];
    this.boundingSphere = this.boundingBox = null;
    this.hasTangents = !1
};
THREE.Geometry.prototype = {computeCentroids:function() {
    var b,c,d;
    b = 0;
    for (c = this.faces.length; b < c; b++) {
        d = this.faces[b];
        d.centroid.set(0, 0, 0);
        if (d instanceof THREE.Face3) {
            d.centroid.addSelf(this.vertices[d.a].position);
            d.centroid.addSelf(this.vertices[d.b].position);
            d.centroid.addSelf(this.vertices[d.c].position);
            d.centroid.divideScalar(3)
        } else if (d instanceof THREE.Face4) {
            d.centroid.addSelf(this.vertices[d.a].position);
            d.centroid.addSelf(this.vertices[d.b].position);
            d.centroid.addSelf(this.vertices[d.c].position);
            d.centroid.addSelf(this.vertices[d.d].position);
            d.centroid.divideScalar(4)
        }
    }
},computeFaceNormals:function(b) {
    var c,d,f,g,h,j,k = new THREE.Vector3,m = new THREE.Vector3;
    f = 0;
    for (g = this.faces.length; f < g; f++) {
        h = this.faces[f];
        if (b && h.vertexNormals.length) {
            k.set(0, 0, 0);
            c = 0;
            for (d = h.vertexNormals.length; c < d; c++)k.addSelf(h.vertexNormals[c]);
            k.divideScalar(3)
        } else {
            c = this.vertices[h.a];
            d = this.vertices[h.b];
            j = this.vertices[h.c];
            k.sub(j.position, d.position);
            m.sub(c.position, d.position);
            k.crossSelf(m)
        }
        k.isZero() ||
        k.normalize();
        h.normal.copy(k)
    }
},computeVertexNormals:function() {
    var b,c,d,f;
    if (this.__tmpVertices == undefined) {
        f = this.__tmpVertices = Array(this.vertices.length);
        b = 0;
        for (c = this.vertices.length; b < c; b++)f[b] = new THREE.Vector3;
        b = 0;
        for (c = this.faces.length; b < c; b++) {
            d = this.faces[b];
            if (d instanceof THREE.Face3)d.vertexNormals = [new THREE.Vector3,new THREE.Vector3,new THREE.Vector3]; else if (d instanceof THREE.Face4)d.vertexNormals = [new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3]
        }
    } else {
        f =
                this.__tmpVertices;
        b = 0;
        for (c = this.vertices.length; b < c; b++)f[b].set(0, 0, 0)
    }
    b = 0;
    for (c = this.faces.length; b < c; b++) {
        d = this.faces[b];
        if (d instanceof THREE.Face3) {
            f[d.a].addSelf(d.normal);
            f[d.b].addSelf(d.normal);
            f[d.c].addSelf(d.normal)
        } else if (d instanceof THREE.Face4) {
            f[d.a].addSelf(d.normal);
            f[d.b].addSelf(d.normal);
            f[d.c].addSelf(d.normal);
            f[d.d].addSelf(d.normal)
        }
    }
    b = 0;
    for (c = this.vertices.length; b < c; b++)f[b].normalize();
    b = 0;
    for (c = this.faces.length; b < c; b++) {
        d = this.faces[b];
        if (d instanceof THREE.Face3) {
            d.vertexNormals[0].copy(f[d.a]);
            d.vertexNormals[1].copy(f[d.b]);
            d.vertexNormals[2].copy(f[d.c])
        } else if (d instanceof THREE.Face4) {
            d.vertexNormals[0].copy(f[d.a]);
            d.vertexNormals[1].copy(f[d.b]);
            d.vertexNormals[2].copy(f[d.c]);
            d.vertexNormals[3].copy(f[d.d])
        }
    }
},computeTangents:function() {
    function b(qa, ta, va, ia, Z, na, Ba) {
        k = qa.vertices[ta].position;
        m = qa.vertices[va].position;
        p = qa.vertices[ia].position;
        o = j[Z];
        w = j[na];
        y = j[Ba];
        v = m.x - k.x;
        A = p.x - k.x;
        F = m.y - k.y;
        G = p.y - k.y;
        L = m.z - k.z;
        V = p.z - k.z;
        z = w.u - o.u;
        K = y.u - o.u;
        P = w.v - o.v;
        S = y.v - o.v;
        xa = 1 / (z * S -
                K * P);
        fa.set((S * v - P * A) * xa, (S * F - P * G) * xa, (S * L - P * V) * xa);
        ca.set((z * A - K * v) * xa, (z * G - K * F) * xa, (z * V - K * L) * xa);
        pa[ta].addSelf(fa);
        pa[va].addSelf(fa);
        pa[ia].addSelf(fa);
        e[ta].addSelf(ca);
        e[va].addSelf(ca);
        e[ia].addSelf(ca)
    }

    var c,d,f,g,h,j,k,m,p,o,w,y,v,A,F,G,L,V,z,K,P,S,xa,ra,pa = [],e = [],fa = new THREE.Vector3,ca = new THREE.Vector3,ya = new THREE.Vector3,Fa = new THREE.Vector3,Ea = new THREE.Vector3;
    c = 0;
    for (d = this.vertices.length; c < d; c++) {
        pa[c] = new THREE.Vector3;
        e[c] = new THREE.Vector3
    }
    c = 0;
    for (d = this.faces.length; c < d; c++) {
        h =
                this.faces[c];
        j = this.faceVertexUvs[0][c];
        if (h instanceof THREE.Face3)b(this, h.a, h.b, h.c, 0, 1, 2); else if (h instanceof THREE.Face4) {
            b(this, h.a, h.b, h.c, 0, 1, 2);
            b(this, h.a, h.b, h.d, 0, 1, 3)
        }
    }
    var Y = ["a","b","c","d"];
    c = 0;
    for (d = this.faces.length; c < d; c++) {
        h = this.faces[c];
        for (f = 0; f < h.vertexNormals.length; f++) {
            Ea.copy(h.vertexNormals[f]);
            g = h[Y[f]];
            ra = pa[g];
            ya.copy(ra);
            ya.subSelf(Ea.multiplyScalar(Ea.dot(ra))).normalize();
            Fa.cross(h.vertexNormals[f], ra);
            g = Fa.dot(e[g]);
            g = g < 0 ? -1 : 1;
            h.vertexTangents[f] = new THREE.Vector4(ya.x,
                    ya.y, ya.z, g)
        }
    }
    this.hasTangents = !0
},computeBoundingBox:function() {
    var b;
    if (this.vertices.length > 0) {
        this.boundingBox = {x:[this.vertices[0].position.x,this.vertices[0].position.x],y:[this.vertices[0].position.y,this.vertices[0].position.y],z:[this.vertices[0].position.z,this.vertices[0].position.z]};
        for (var c = 1,d = this.vertices.length; c < d; c++) {
            b = this.vertices[c];
            if (b.position.x < this.boundingBox.x[0])this.boundingBox.x[0] = b.position.x; else if (b.position.x > this.boundingBox.x[1])this.boundingBox.x[1] = b.position.x;
            if (b.position.y < this.boundingBox.y[0])this.boundingBox.y[0] = b.position.y; else if (b.position.y > this.boundingBox.y[1])this.boundingBox.y[1] = b.position.y;
            if (b.position.z < this.boundingBox.z[0])this.boundingBox.z[0] = b.position.z; else if (b.position.z > this.boundingBox.z[1])this.boundingBox.z[1] = b.position.z
        }
    }
},computeBoundingSphere:function() {
    for (var b = this.boundingSphere === null ? 0 : this.boundingSphere.radius,c = 0,d = this.vertices.length; c < d; c++)b = Math.max(b, this.vertices[c].position.length());
    this.boundingSphere =
    {radius:b}
},computeEdgeFaces:function() {
    function b(m, p) {
        return Math.min(m, p) + "_" + Math.max(m, p)
    }

    function c(m, p, o) {
        if (m[p] === undefined) {
            m[p] = {set:{},array:[]};
            m[p].set[o] = 1;
            m[p].array.push(o)
        } else if (m[p].set[o] === undefined) {
            m[p].set[o] = 1;
            m[p].array.push(o)
        }
    }

    var d,f,g,h,j,k = {};
    d = 0;
    for (f = this.faces.length; d < f; d++) {
        j = this.faces[d];
        if (j instanceof THREE.Face3) {
            g = b(j.a, j.b);
            c(k, g, d);
            g = b(j.b, j.c);
            c(k, g, d);
            g = b(j.a, j.c);
            c(k, g, d)
        } else if (j instanceof THREE.Face4) {
            g = b(j.b, j.d);
            c(k, g, d);
            g = b(j.a, j.b);
            c(k, g, d);
            g = b(j.a, j.d);
            c(k, g, d);
            g = b(j.b, j.c);
            c(k, g, d);
            g = b(j.c, j.d);
            c(k, g, d)
        }
    }
    d = 0;
    for (f = this.edges.length; d < f; d++) {
        j = this.edges[d];
        g = j.vertexIndices[0];
        h = j.vertexIndices[1];
        j.faceIndices = k[b(g, h)].array;
        for (g = 0; g < j.faceIndices.length; g++) {
            h = j.faceIndices[g];
            j.faces.push(this.faces[h])
        }
    }
}};
THREE.GeometryIdCounter = 0;
THREE.Spline = function(b) {
    function c(v, A, F, G, L, V, z) {
        v = (F - v) * 0.5;
        G = (G - A) * 0.5;
        return(2 * (A - F) + v + G) * z + (-3 * (A - F) - 2 * v - G) * V + v * L + A
    }

    this.points = b;
    var d = [],f = {x:0,y:0,z:0},g,h,j,k,m,p,o,w,y;
    this.initFromArray = function(v) {
        this.points = [];
        for (var A = 0; A < v.length; A++)this.points[A] = {x:v[A][0],y:v[A][1],z:v[A][2]}
    };
    this.getPoint = function(v) {
        g = (this.points.length - 1) * v;
        h = Math.floor(g);
        j = g - h;
        d[0] = h == 0 ? h : h - 1;
        d[1] = h;
        d[2] = h > this.points.length - 2 ? h : h + 1;
        d[3] = h > this.points.length - 3 ? h : h + 2;
        p = this.points[d[0]];
        o = this.points[d[1]];
        w = this.points[d[2]];
        y = this.points[d[3]];
        k = j * j;
        m = j * k;
        f.x = c(p.x, o.x, w.x, y.x, j, k, m);
        f.y = c(p.y, o.y, w.y, y.y, j, k, m);
        f.z = c(p.z, o.z, w.z, y.z, j, k, m);
        return f
    };
    this.getControlPointsArray = function() {
        var v,A,F = this.points.length,G = [];
        for (v = 0; v < F; v++) {
            A = this.points[v];
            G[v] = [A.x,A.y,A.z]
        }
        return G
    };
    this.getLength = function(v) {
        var A,F,G = A = A = 0,L = new THREE.Vector3,V = new THREE.Vector3,z = [],K = 0;
        z[0] = 0;
        v || (v = 100);
        F = this.points.length * v;
        L.copy(this.points[0]);
        for (v = 1; v < F; v++) {
            A = v / F;
            position = this.getPoint(A);
            V.copy(position);
            K += V.distanceTo(L);
            L.copy(position);
            A *= this.points.length - 1;
            A = Math.floor(A);
            if (A != G) {
                z[A] = K;
                G = A
            }
        }
        z[z.length] = K;
        return{chunks:z,total:K}
    };
    this.reparametrizeByArcLength = function(v) {
        var A,F,G,L,V,z,K = [],P = new THREE.Vector3,S = this.getLength();
        K.push(P.copy(this.points[0]).clone());
        for (A = 1; A < this.points.length; A++) {
            F = S.chunks[A] - S.chunks[A - 1];
            z = Math.ceil(v * F / S.total);
            L = (A - 1) / (this.points.length - 1);
            V = A / (this.points.length - 1);
            for (F = 1; F < z - 1; F++) {
                G = L + F * (1 / z) * (V - L);
                position = this.getPoint(G);
                K.push(P.copy(position).clone())
            }
            K.push(P.copy(this.points[A]).clone())
        }
        this.points =
                K
    }
};
THREE.Edge = function(b, c, d, f) {
    this.vertices = [b,c];
    this.vertexIndices = [d,f];
    this.faces = [];
    this.faceIndices = []
};
THREE.AnimationHandler = function() {
    var b = [],c = {},d = {};
    d.update = function(g) {
        for (var h = 0; h < b.length; h++)b[h].update(g)
    };
    d.addToUpdate = function(g) {
        b.indexOf(g) === -1 && b.push(g)
    };
    d.removeFromUpdate = function(g) {
        g = b.indexOf(g);
        g !== -1 && b.splice(g, 1)
    };
    d.add = function(g) {
        c[g.name] !== undefined && console.log("THREE.AnimationHandler.add: Warning! " + g.name + " already exists in library. Overwriting.");
        c[g.name] = g;
        if (g.initialized !== !0) {
            for (var h = 0; h < g.hierarchy.length; h++) {
                for (var j = 0; j < g.hierarchy[h].keys.length; j++) {
                    if (g.hierarchy[h].keys[j].time <
                            0)g.hierarchy[h].keys[j].time = 0;
                    if (g.hierarchy[h].keys[j].rot !== undefined && !(g.hierarchy[h].keys[j].rot instanceof THREE.Quaternion)) {
                        var k = g.hierarchy[h].keys[j].rot;
                        g.hierarchy[h].keys[j].rot = new THREE.Quaternion(k[0], k[1], k[2], k[3])
                    }
                }
                if (g.hierarchy[h].keys[0].morphTargets !== undefined) {
                    k = {};
                    for (j = 0; j < g.hierarchy[h].keys.length; j++)for (var m = 0; m < g.hierarchy[h].keys[j].morphTargets.length; m++) {
                        var p = g.hierarchy[h].keys[j].morphTargets[m];
                        k[p] = -1
                    }
                    g.hierarchy[h].usedMorphTargets = k;
                    for (j = 0; j < g.hierarchy[h].keys.length; j++) {
                        var o =
                        {};
                        for (p in k) {
                            for (m = 0; m < g.hierarchy[h].keys[j].morphTargets.length; m++)if (g.hierarchy[h].keys[j].morphTargets[m] === p) {
                                o[p] = g.hierarchy[h].keys[j].morphTargetsInfluences[m];
                                break
                            }
                            m === g.hierarchy[h].keys[j].morphTargets.length && (o[p] = 0)
                        }
                        g.hierarchy[h].keys[j].morphTargetsInfluences = o
                    }
                }
                for (j = 1; j < g.hierarchy[h].keys.length; j++)if (g.hierarchy[h].keys[j].time === g.hierarchy[h].keys[j - 1].time) {
                    g.hierarchy[h].keys.splice(j, 1);
                    j--
                }
                for (j = 1; j < g.hierarchy[h].keys.length; j++)g.hierarchy[h].keys[j].index = j
            }
            j = parseInt(g.length *
                    g.fps, 10);
            g.JIT = {};
            g.JIT.hierarchy = [];
            for (h = 0; h < g.hierarchy.length; h++)g.JIT.hierarchy.push(Array(j));
            g.initialized = !0
        }
    };
    d.get = function(g) {
        if (typeof g === "string")if (c[g])return c[g]; else {
            console.log("THREE.AnimationHandler.get: Couldn't find animation " + g);
            return null
        }
    };
    d.parse = function(g) {
        var h = [];
        if (g instanceof THREE.SkinnedMesh)for (var j = 0; j < g.bones.length; j++)h.push(g.bones[j]); else f(g, h);
        return h
    };
    var f = function(g, h) {
        h.push(g);
        for (var j = 0; j < g.children.length; j++)f(g.children[j], h)
    };
    d.LINEAR =
            0;
    d.CATMULLROM = 1;
    d.CATMULLROM_FORWARD = 2;
    return d
}();
THREE.Animation = function(b, c, d, f) {
    this.root = b;
    this.data = THREE.AnimationHandler.get(c);
    this.hierarchy = THREE.AnimationHandler.parse(b);
    this.currentTime = 0;
    this.timeScale = 1;
    this.isPlaying = !1;
    this.isPaused = !0;
    this.loop = !0;
    this.interpolationType = d !== undefined ? d : THREE.AnimationHandler.LINEAR;
    this.JITCompile = f !== undefined ? f : !0;
    this.points = [];
    this.target = new THREE.Vector3
};
THREE.Animation.prototype.play = function(b, c) {
    if (!this.isPlaying) {
        this.isPlaying = !0;
        this.loop = b !== undefined ? b : !0;
        this.currentTime = c !== undefined ? c : 0;
        var d,f = this.hierarchy.length,g;
        for (d = 0; d < f; d++) {
            g = this.hierarchy[d];
            if (this.interpolationType !== THREE.AnimationHandler.CATMULLROM_FORWARD)g.useQuaternion = !0;
            g.matrixAutoUpdate = !0;
            if (g.animationCache === undefined) {
                g.animationCache = {};
                g.animationCache.prevKey = {pos:0,rot:0,scl:0};
                g.animationCache.nextKey = {pos:0,rot:0,scl:0};
                g.animationCache.originalMatrix =
                        g instanceof THREE.Bone ? g.skinMatrix : g.matrix
            }
            var h = g.animationCache.prevKey;
            g = g.animationCache.nextKey;
            h.pos = this.data.hierarchy[d].keys[0];
            h.rot = this.data.hierarchy[d].keys[0];
            h.scl = this.data.hierarchy[d].keys[0];
            g.pos = this.getNextKeyWith("pos", d, 1);
            g.rot = this.getNextKeyWith("rot", d, 1);
            g.scl = this.getNextKeyWith("scl", d, 1)
        }
        this.update(0)
    }
    this.isPaused = !1;
    THREE.AnimationHandler.addToUpdate(this)
};
THREE.Animation.prototype.pause = function() {
    this.isPaused ? THREE.AnimationHandler.addToUpdate(this) : THREE.AnimationHandler.removeFromUpdate(this);
    this.isPaused = !this.isPaused
};
THREE.Animation.prototype.stop = function() {
    this.isPlaying = !1;
    this.isPaused = !1;
    THREE.AnimationHandler.removeFromUpdate(this);
    for (var b = 0; b < this.hierarchy.length; b++)if (this.hierarchy[b].animationCache !== undefined) {
        if (this.hierarchy[b]instanceof THREE.Bone)this.hierarchy[b].skinMatrix = this.hierarchy[b].animationCache.originalMatrix; else this.hierarchy[b].matrix = this.hierarchy[b].animationCache.originalMatrix;
        delete this.hierarchy[b].animationCache
    }
};
THREE.Animation.prototype.update = function(b) {
    if (this.isPlaying) {
        var c = ["pos","rot","scl"],d,f,g,h,j,k,m,p,o = this.data.JIT.hierarchy,w,y;
        this.currentTime += b * this.timeScale;
        y = this.currentTime;
        w = this.currentTime %= this.data.length;
        p = parseInt(Math.min(w * this.data.fps, this.data.length * this.data.fps), 10);
        for (var v = 0,A = this.hierarchy.length; v < A; v++) {
            b = this.hierarchy[v];
            m = b.animationCache;
            if (this.JITCompile && o[v][p] !== undefined)if (b instanceof THREE.Bone) {
                b.skinMatrix = o[v][p];
                b.matrixAutoUpdate = !1;
                b.matrixWorldNeedsUpdate =
                        !1
            } else {
                b.matrix = o[v][p];
                b.matrixAutoUpdate = !1;
                b.matrixWorldNeedsUpdate = !0
            } else {
                if (this.JITCompile)if (b instanceof THREE.Bone)b.skinMatrix = b.animationCache.originalMatrix; else b.matrix = b.animationCache.originalMatrix;
                for (var F = 0; F < 3; F++) {
                    d = c[F];
                    j = m.prevKey[d];
                    k = m.nextKey[d];
                    if (k.time <= y) {
                        if (w < y)if (this.loop) {
                            j = this.data.hierarchy[v].keys[0];
                            for (k = this.getNextKeyWith(d, v, 1); k.time < w;) {
                                j = k;
                                k = this.getNextKeyWith(d, v, k.index + 1)
                            }
                        } else {
                            this.stop();
                            return
                        } else {
                            do{
                                j = k;
                                k = this.getNextKeyWith(d, v, k.index + 1)
                            } while (k.time <
                                    w)
                        }
                        m.prevKey[d] = j;
                        m.nextKey[d] = k
                    }
                    b.matrixAutoUpdate = !0;
                    b.matrixWorldNeedsUpdate = !0;
                    f = (w - j.time) / (k.time - j.time);
                    g = j[d];
                    h = k[d];
                    if (f < 0 || f > 1) {
                        console.log("THREE.Animation.update: Warning! Scale out of bounds:" + f + " on bone " + v);
                        f = f < 0 ? 0 : 1
                    }
                    if (d === "pos") {
                        d = b.position;
                        if (this.interpolationType === THREE.AnimationHandler.LINEAR) {
                            d.x = g[0] + (h[0] - g[0]) * f;
                            d.y = g[1] + (h[1] - g[1]) * f;
                            d.z = g[2] + (h[2] - g[2]) * f
                        } else if (this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD) {
                            this.points[0] =
                                    this.getPrevKeyWith("pos", v, j.index - 1).pos;
                            this.points[1] = g;
                            this.points[2] = h;
                            this.points[3] = this.getNextKeyWith("pos", v, k.index + 1).pos;
                            f = f * 0.33 + 0.33;
                            g = this.interpolateCatmullRom(this.points, f);
                            d.x = g[0];
                            d.y = g[1];
                            d.z = g[2];
                            if (this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD) {
                                f = this.interpolateCatmullRom(this.points, f * 1.01);
                                this.target.set(f[0], f[1], f[2]);
                                this.target.subSelf(d);
                                this.target.y = 0;
                                this.target.normalize();
                                f = Math.atan2(this.target.x, this.target.z);
                                b.rotation.set(0, f, 0)
                            }
                        }
                    } else if (d ===
                            "rot")THREE.Quaternion.slerp(g, h, b.quaternion, f); else if (d === "scl") {
                        d = b.scale;
                        d.x = g[0] + (h[0] - g[0]) * f;
                        d.y = g[1] + (h[1] - g[1]) * f;
                        d.z = g[2] + (h[2] - g[2]) * f
                    }
                }
            }
        }
        if (this.JITCompile && o[0][p] === undefined) {
            this.hierarchy[0].update(undefined, !0);
            for (v = 0; v < this.hierarchy.length; v++)o[v][p] = this.hierarchy[v]instanceof THREE.Bone ? this.hierarchy[v].skinMatrix.clone() : this.hierarchy[v].matrix.clone()
        }
    }
};
THREE.Animation.prototype.interpolateCatmullRom = function(b, c) {
    var d = [],f = [],g,h,j,k,m,p;
    g = (b.length - 1) * c;
    h = Math.floor(g);
    g -= h;
    d[0] = h == 0 ? h : h - 1;
    d[1] = h;
    d[2] = h > b.length - 2 ? h : h + 1;
    d[3] = h > b.length - 3 ? h : h + 2;
    h = b[d[0]];
    k = b[d[1]];
    m = b[d[2]];
    p = b[d[3]];
    d = g * g;
    j = g * d;
    f[0] = this.interpolate(h[0], k[0], m[0], p[0], g, d, j);
    f[1] = this.interpolate(h[1], k[1], m[1], p[1], g, d, j);
    f[2] = this.interpolate(h[2], k[2], m[2], p[2], g, d, j);
    return f
};
THREE.Animation.prototype.interpolate = function(b, c, d, f, g, h, j) {
    b = (d - b) * 0.5;
    f = (f - c) * 0.5;
    return(2 * (c - d) + b + f) * j + (-3 * (c - d) - 2 * b - f) * h + b * g + c
};
THREE.Animation.prototype.getNextKeyWith = function(b, c, d) {
    var f = this.data.hierarchy[c].keys;
    if (this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD)d = d < f.length - 1 ? d : f.length - 1; else d %= f.length;
    for (; d < f.length; d++)if (f[d][b] !== undefined)return f[d];
    return this.data.hierarchy[c].keys[0]
};
THREE.Animation.prototype.getPrevKeyWith = function(b, c, d) {
    var f = this.data.hierarchy[c].keys;
    for (d = this.interpolationType === THREE.AnimationHandler.CATMULLROM || this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD ? d > 0 ? d : 0 : d >= 0 ? d : d + f.length; d >= 0; d--)if (f[d][b] !== undefined)return f[d];
    return this.data.hierarchy[c].keys[f.length - 1]
};
THREE.Camera = function(b, c, d, f, g) {
    THREE.Object3D.call(this);
    this.fov = b || 50;
    this.aspect = c || 1;
    this.near = d || 0.1;
    this.far = f || 2E3;
    this.target = g || new THREE.Object3D;
    this.useTarget = !0;
    this.matrixWorldInverse = new THREE.Matrix4;
    this.projectionMatrix = null;
    this.updateProjectionMatrix()
};
THREE.Camera.prototype = new THREE.Object3D;
THREE.Camera.prototype.constructor = THREE.Camera;
THREE.Camera.prototype.supr = THREE.Object3D.prototype;
THREE.Camera.prototype.translate = function(b, c) {
    this.matrix.rotateAxis(c);
    this.position.addSelf(c.multiplyScalar(b));
    this.target.position.addSelf(c.multiplyScalar(b))
};
THREE.Camera.prototype.updateProjectionMatrix = function() {
    this.projectionMatrix = THREE.Matrix4.makePerspective(this.fov, this.aspect, this.near, this.far)
};
THREE.Camera.prototype.updateMatrix = function() {
    this.update(undefined, !0)
};
THREE.Camera.prototype.update = function(b, c, d) {
    if (this.useTarget) {
        this.matrix.lookAt(this.position, this.target.position, this.up);
        this.matrix.setPosition(this.position);
        b ? this.matrixWorld.multiply(b, this.matrix) : this.matrixWorld.copy(this.matrix);
        THREE.Matrix4.makeInvert(this.matrixWorld, this.matrixWorldInverse);
        c = !0
    } else {
        this.matrixAutoUpdate && (c |= this.updateMatrix());
        if (c || this.matrixWorldNeedsUpdate) {
            b ? this.matrixWorld.multiply(b, this.matrix) : this.matrixWorld.copy(this.matrix);
            this.matrixWorldNeedsUpdate =
                    !1;
            c = !0;
            THREE.Matrix4.makeInvert(this.matrixWorld, this.matrixWorldInverse)
        }
    }
    for (b = 0; b < this.children.length; b++)this.children[b].update(this.matrixWorld, c, d)
};
THREE.Light = function(b) {
    THREE.Object3D.call(this);
    this.color = new THREE.Color(b)
};
THREE.Light.prototype = new THREE.Object3D;
THREE.Light.prototype.constructor = THREE.Light;
THREE.Light.prototype.supr = THREE.Object3D.prototype;
THREE.AmbientLight = function(b) {
    THREE.Light.call(this, b)
};
THREE.AmbientLight.prototype = new THREE.Light;
THREE.AmbientLight.prototype.constructor = THREE.AmbientLight;
THREE.DirectionalLight = function(b, c, d) {
    THREE.Light.call(this, b);
    this.position = new THREE.Vector3(0, 1, 0);
    this.intensity = c || 1;
    this.distance = d || 0
};
THREE.DirectionalLight.prototype = new THREE.Light;
THREE.DirectionalLight.prototype.constructor = THREE.DirectionalLight;
THREE.PointLight = function(b, c, d) {
    THREE.Light.call(this, b);
    this.position = new THREE.Vector3;
    this.intensity = c || 1;
    this.distance = d || 0
};
THREE.PointLight.prototype = new THREE.Light;
THREE.PointLight.prototype.constructor = THREE.PointLight;
THREE.LensFlare = function(b, c, d, f) {
    THREE.Object3D.call(this);
    this.positionScreen = new THREE.Vector3;
    this.lensFlares = [];
    this.customUpdateCallback = undefined;
    b !== undefined && this.add(b, c, d, f)
};
THREE.LensFlare.prototype = new THREE.Object3D;
THREE.LensFlare.prototype.constructor = THREE.LensFlare;
THREE.LensFlare.prototype.supr = THREE.Object3D.prototype;
THREE.LensFlare.prototype.add = function(b, c, d, f) {
    c === undefined && (c = -1);
    d === undefined && (d = 0);
    if (f === undefined)f = THREE.BillboardBlending;
    d = Math.min(d, Math.max(0, d));
    this.lensFlares.push({texture:b,size:c,distance:d,x:0,y:0,z:0,scale:1,rotation:1,opacity:1,blending:f})
};
THREE.LensFlare.prototype.updateLensFlares = function() {
    var b,c = this.lensFlares.length,d,f = -this.positionScreen.x * 2,g = -this.positionScreen.y * 2;
    for (b = 0; b < c; b++) {
        d = this.lensFlares[b];
        d.x = this.positionScreen.x + f * d.distance;
        d.y = this.positionScreen.y + g * d.distance;
        d.wantedRotation = d.x * Math.PI * 0.25;
        d.rotation += (d.wantedRotation - d.rotation) * 0.25
    }
};
THREE.Material = function(b) {
    this.id = THREE.MaterialCounter.value++;
    b = b || {};
    this.opacity = b.opacity !== undefined ? b.opacity : 1;
    this.transparent = b.transparent !== undefined ? b.transparent : !1;
    this.blending = b.blending !== undefined ? b.blending : THREE.NormalBlending;
    this.depthTest = b.depthTest !== undefined ? b.depthTest : !0
};
THREE.NoShading = 0;
THREE.FlatShading = 1;
THREE.SmoothShading = 2;
THREE.NoColors = 0;
THREE.FaceColors = 1;
THREE.VertexColors = 2;
THREE.NormalBlending = 0;
THREE.AdditiveBlending = 1;
THREE.SubtractiveBlending = 2;
THREE.MultiplyBlending = 3;
THREE.AdditiveAlphaBlending = 4;
THREE.MaterialCounter = {value:0};
THREE.CubeReflectionMapping = function() {
};
THREE.CubeRefractionMapping = function() {
};
THREE.LatitudeReflectionMapping = function() {
};
THREE.LatitudeRefractionMapping = function() {
};
THREE.SphericalReflectionMapping = function() {
};
THREE.SphericalRefractionMapping = function() {
};
THREE.UVMapping = function() {
};
THREE.LineBasicMaterial = function(b) {
    THREE.Material.call(this, b);
    b = b || {};
    this.color = b.color !== undefined ? new THREE.Color(b.color) : new THREE.Color(16777215);
    this.linewidth = b.linewidth !== undefined ? b.linewidth : 1;
    this.linecap = b.linecap !== undefined ? b.linecap : "round";
    this.linejoin = b.linejoin !== undefined ? b.linejoin : "round";
    this.vertexColors = b.vertexColors ? b.vertexColors : !1
};
THREE.LineBasicMaterial.prototype = new THREE.Material;
THREE.LineBasicMaterial.prototype.constructor = THREE.LineBasicMaterial;
THREE.MeshBasicMaterial = function(b) {
    THREE.Material.call(this, b);
    b = b || {};
    this.color = b.color !== undefined ? new THREE.Color(b.color) : new THREE.Color(16777215);
    this.map = b.map !== undefined ? b.map : null;
    this.lightMap = b.lightMap !== undefined ? b.lightMap : null;
    this.envMap = b.envMap !== undefined ? b.envMap : null;
    this.combine = b.combine !== undefined ? b.combine : THREE.MultiplyOperation;
    this.reflectivity = b.reflectivity !== undefined ? b.reflectivity : 1;
    this.refractionRatio = b.refractionRatio !== undefined ? b.refractionRatio : 0.98;
    this.shading =
            b.shading !== undefined ? b.shading : THREE.SmoothShading;
    this.wireframe = b.wireframe !== undefined ? b.wireframe : !1;
    this.wireframeLinewidth = b.wireframeLinewidth !== undefined ? b.wireframeLinewidth : 1;
    this.wireframeLinecap = b.wireframeLinecap !== undefined ? b.wireframeLinecap : "round";
    this.wireframeLinejoin = b.wireframeLinejoin !== undefined ? b.wireframeLinejoin : "round";
    this.vertexColors = b.vertexColors !== undefined ? b.vertexColors : !1;
    this.skinning = b.skinning !== undefined ? b.skinning : !1;
    this.morphTargets = b.morphTargets !== undefined ?
            b.morphTargets : !1
};
THREE.MeshBasicMaterial.prototype = new THREE.Material;
THREE.MeshBasicMaterial.prototype.constructor = THREE.MeshBasicMaterial;
THREE.MeshLambertMaterial = function(b) {
    THREE.Material.call(this, b);
    b = b || {};
    this.color = b.color !== undefined ? new THREE.Color(b.color) : new THREE.Color(16777215);
    this.map = b.map !== undefined ? b.map : null;
    this.lightMap = b.lightMap !== undefined ? b.lightMap : null;
    this.envMap = b.envMap !== undefined ? b.envMap : null;
    this.combine = b.combine !== undefined ? b.combine : THREE.MultiplyOperation;
    this.reflectivity = b.reflectivity !== undefined ? b.reflectivity : 1;
    this.refractionRatio = b.refractionRatio !== undefined ? b.refractionRatio : 0.98;
    this.shading =
            b.shading !== undefined ? b.shading : THREE.SmoothShading;
    this.wireframe = b.wireframe !== undefined ? b.wireframe : !1;
    this.wireframeLinewidth = b.wireframeLinewidth !== undefined ? b.wireframeLinewidth : 1;
    this.wireframeLinecap = b.wireframeLinecap !== undefined ? b.wireframeLinecap : "round";
    this.wireframeLinejoin = b.wireframeLinejoin !== undefined ? b.wireframeLinejoin : "round";
    this.vertexColors = b.vertexColors !== undefined ? b.vertexColors : !1;
    this.skinning = b.skinning !== undefined ? b.skinning : !1;
    this.morphTargets = b.morphTargets !== undefined ?
            b.morphTargets : !1
};
THREE.MeshLambertMaterial.prototype = new THREE.Material;
THREE.MeshLambertMaterial.prototype.constructor = THREE.MeshLambertMaterial;
THREE.MeshPhongMaterial = function(b) {
    THREE.Material.call(this, b);
    b = b || {};
    this.color = b.color !== undefined ? new THREE.Color(b.color) : new THREE.Color(16777215);
    this.ambient = b.ambient !== undefined ? new THREE.Color(b.ambient) : new THREE.Color(328965);
    this.specular = b.specular !== undefined ? new THREE.Color(b.specular) : new THREE.Color(1118481);
    this.shininess = b.shininess !== undefined ? b.shininess : 30;
    this.map = b.map !== undefined ? b.map : null;
    this.lightMap = b.lightMap !== undefined ? b.lightMap : null;
    this.envMap = b.envMap !== undefined ?
            b.envMap : null;
    this.combine = b.combine !== undefined ? b.combine : THREE.MultiplyOperation;
    this.reflectivity = b.reflectivity !== undefined ? b.reflectivity : 1;
    this.refractionRatio = b.refractionRatio !== undefined ? b.refractionRatio : 0.98;
    this.shading = b.shading !== undefined ? b.shading : THREE.SmoothShading;
    this.wireframe = b.wireframe !== undefined ? b.wireframe : !1;
    this.wireframeLinewidth = b.wireframeLinewidth !== undefined ? b.wireframeLinewidth : 1;
    this.wireframeLinecap = b.wireframeLinecap !== undefined ? b.wireframeLinecap : "round";
    this.wireframeLinejoin =
            b.wireframeLinejoin !== undefined ? b.wireframeLinejoin : "round";
    this.vertexColors = b.vertexColors !== undefined ? b.vertexColors : !1;
    this.skinning = b.skinning !== undefined ? b.skinning : !1;
    this.morphTargets = b.morphTargets !== undefined ? b.morphTargets : !1
};
THREE.MeshPhongMaterial.prototype = new THREE.Material;
THREE.MeshPhongMaterial.prototype.constructor = THREE.MeshPhongMaterial;
THREE.MeshDepthMaterial = function(b) {
    THREE.Material.call(this, b);
    b = b || {};
    this.shading = b.shading !== undefined ? b.shading : THREE.SmoothShading;
    this.wireframe = b.wireframe !== undefined ? b.wireframe : !1;
    this.wireframeLinewidth = b.wireframeLinewidth !== undefined ? b.wireframeLinewidth : 1
};
THREE.MeshDepthMaterial.prototype = new THREE.Material;
THREE.MeshDepthMaterial.prototype.constructor = THREE.MeshDepthMaterial;
THREE.MeshNormalMaterial = function(b) {
    THREE.Material.call(this, b);
    b = b || {};
    this.shading = b.shading ? b.shading : THREE.FlatShading;
    this.wireframe = b.wireframe ? b.wireframe : !1;
    this.wireframeLinewidth = b.wireframeLinewidth ? b.wireframeLinewidth : 1
};
THREE.MeshNormalMaterial.prototype = new THREE.Material;
THREE.MeshNormalMaterial.prototype.constructor = THREE.MeshNormalMaterial;
THREE.MeshFaceMaterial = function() {
};
THREE.MeshShaderMaterial = function(b) {
    THREE.Material.call(this, b);
    b = b || {};
    this.fragmentShader = b.fragmentShader !== undefined ? b.fragmentShader : "void main() {}";
    this.vertexShader = b.vertexShader !== undefined ? b.vertexShader : "void main() {}";
    this.uniforms = b.uniforms !== undefined ? b.uniforms : {};
    this.attributes = b.attributes;
    this.shading = b.shading !== undefined ? b.shading : THREE.SmoothShading;
    this.wireframe = b.wireframe !== undefined ? b.wireframe : !1;
    this.wireframeLinewidth = b.wireframeLinewidth !== undefined ? b.wireframeLinewidth :
            1;
    this.fog = b.fog !== undefined ? b.fog : !1;
    this.lights = b.lights !== undefined ? b.lights : !1;
    this.vertexColors = b.vertexColors !== undefined ? b.vertexColors : !1;
    this.skinning = b.skinning !== undefined ? b.skinning : !1;
    this.morphTargets = b.morphTargets !== undefined ? b.morphTargets : !1
};
THREE.MeshShaderMaterial.prototype = new THREE.Material;
THREE.MeshShaderMaterial.prototype.constructor = THREE.MeshShaderMaterial;
THREE.ShadowVolumeDynamicMaterial = function(b) {
    THREE.Material.call(this, b);
    b = b || {};
    this.color = b.color !== undefined ? new THREE.Color(b.color) : new THREE.Color(16777215);
    this.map = b.map !== undefined ? b.map : null;
    this.lightMap = b.lightMap !== undefined ? b.lightMap : null;
    this.envMap = b.envMap !== undefined ? b.envMap : null;
    this.combine = b.combine !== undefined ? b.combine : THREE.MultiplyOperation;
    this.reflectivity = b.reflectivity !== undefined ? b.reflectivity : 1;
    this.refractionRatio = b.refractionRatio !== undefined ? b.refractionRatio :
            0.98;
    this.shading = b.shading !== undefined ? b.shading : THREE.SmoothShading;
    this.wireframe = b.wireframe !== undefined ? b.wireframe : !1;
    this.wireframeLinewidth = b.wireframeLinewidth !== undefined ? b.wireframeLinewidth : 1;
    this.wireframeLinecap = b.wireframeLinecap !== undefined ? b.wireframeLinecap : "round";
    this.wireframeLinejoin = b.wireframeLinejoin !== undefined ? b.wireframeLinejoin : "round";
    this.vertexColors = b.vertexColors !== undefined ? b.vertexColors : !1;
    this.skinning = b.skinning !== undefined ? b.skinning : !1;
    this.morphTargets = b.morphTargets !==
            undefined ? b.morphTargets : !1
};
THREE.ShadowVolumeDynamicMaterial.prototype = new THREE.Material;
THREE.ShadowVolumeDynamicMaterial.prototype.constructor = THREE.ShadowVolumeDynamicMaterial;
THREE.ParticleBasicMaterial = function(b) {
    THREE.Material.call(this, b);
    b = b || {};
    this.color = b.color !== undefined ? new THREE.Color(b.color) : new THREE.Color(16777215);
    this.map = b.map !== undefined ? b.map : null;
    this.size = b.size !== undefined ? b.size : 1;
    this.sizeAttenuation = b.sizeAttenuation !== undefined ? b.sizeAttenuation : !0;
    this.vertexColors = b.vertexColors !== undefined ? b.vertexColors : !1
};
THREE.ParticleBasicMaterial.prototype = new THREE.Material;
THREE.ParticleBasicMaterial.prototype.constructor = THREE.ParticleBasicMaterial;
THREE.ParticleCanvasMaterial = function(b) {
    THREE.Material.call(this, b);
    b = b || {};
    this.color = b.color !== undefined ? new THREE.Color(b.color) : new THREE.Color(16777215);
    this.program = b.program !== undefined ? b.program : function() {
    }
};
THREE.ParticleCanvasMaterial.prototype = new THREE.Material;
THREE.ParticleCanvasMaterial.prototype.constructor = THREE.ParticleCanvasMaterial;
THREE.ParticleDOMMaterial = function(b) {
    THREE.Material.call(this);
    this.domElement = b
};
THREE.Texture = function(b, c, d, f, g, h) {
    this.image = b;
    this.mapping = c !== undefined ? c : new THREE.UVMapping;
    this.wrapS = d !== undefined ? d : THREE.ClampToEdgeWrapping;
    this.wrapT = f !== undefined ? f : THREE.ClampToEdgeWrapping;
    this.magFilter = g !== undefined ? g : THREE.LinearFilter;
    this.minFilter = h !== undefined ? h : THREE.LinearMipMapLinearFilter;
    this.needsUpdate = !1
};
THREE.Texture.prototype = {clone:function() {
    return new THREE.Texture(this.image, this.mapping, this.wrapS, this.wrapT, this.magFilter, this.minFilter)
}};
THREE.MultiplyOperation = 0;
THREE.MixOperation = 1;
THREE.RepeatWrapping = 0;
THREE.ClampToEdgeWrapping = 1;
THREE.MirroredRepeatWrapping = 2;
THREE.NearestFilter = 3;
THREE.NearestMipMapNearestFilter = 4;
THREE.NearestMipMapLinearFilter = 5;
THREE.LinearFilter = 6;
THREE.LinearMipMapNearestFilter = 7;
THREE.LinearMipMapLinearFilter = 8;
THREE.ByteType = 9;
THREE.UnsignedByteType = 10;
THREE.ShortType = 11;
THREE.UnsignedShortType = 12;
THREE.IntType = 13;
THREE.UnsignedIntType = 14;
THREE.FloatType = 15;
THREE.AlphaFormat = 16;
THREE.RGBFormat = 17;
THREE.RGBAFormat = 18;
THREE.LuminanceFormat = 19;
THREE.LuminanceAlphaFormat = 20;
var Uniforms = {clone:function(b) {
    var c,d,f,g = {};
    for (c in b) {
        g[c] = {};
        for (d in b[c]) {
            f = b[c][d];
            g[c][d] = f instanceof THREE.Color || f instanceof THREE.Vector3 || f instanceof THREE.Texture ? f.clone() : f
        }
    }
    return g
},merge:function(b) {
    var c,d,f,g = {};
    for (c = 0; c < b.length; c++) {
        f = this.clone(b[c]);
        for (d in f)g[d] = f[d]
    }
    return g
}};
THREE.Particle = function(b) {
    THREE.Object3D.call(this);
    this.materials = b instanceof Array ? b : [b];
    this.matrixAutoUpdate = !1
};
THREE.Particle.prototype = new THREE.Object3D;
THREE.Particle.prototype.constructor = THREE.Particle;
THREE.ParticleSystem = function(b, c) {
    THREE.Object3D.call(this);
    this.geometry = b;
    this.materials = c instanceof Array ? c : [c];
    this.sortParticles = !1
};
THREE.ParticleSystem.prototype = new THREE.Object3D;
THREE.ParticleSystem.prototype.constructor = THREE.ParticleSystem;
THREE.Line = function(b, c, d) {
    THREE.Object3D.call(this);
    this.geometry = b;
    this.materials = c instanceof Array ? c : [c];
    this.type = d != undefined ? d : THREE.LineStrip
};
THREE.LineStrip = 0;
THREE.LinePieces = 1;
THREE.Line.prototype = new THREE.Object3D;
THREE.Line.prototype.constructor = THREE.Line;
THREE.Mesh = function(b, c) {
    THREE.Object3D.call(this);
    this.geometry = b;
    this.materials = c && c.length ? c : [c];
    this.flipSided = !1;
    this.doubleSided = !1;
    this.overdraw = !1;
    if (this.geometry) {
        this.geometry.boundingSphere || this.geometry.computeBoundingSphere();
        this.boundRadius = b.boundingSphere.radius;
        if (this.geometry.morphTargets.length) {
            this.morphTargetBase = -1;
            this.morphTargetForcedOrder = [];
            this.morphTargetInfluences = [];
            this.morphTargetDictionary = {};
            for (var d = 0; d < this.geometry.morphTargets.length; d++) {
                this.morphTargetInfluences.push(0);
                this.morphTargetDictionary[this.geometry.morphTargets[d].name] = d
            }
        }
    }
};
THREE.Mesh.prototype = new THREE.Object3D;
THREE.Mesh.prototype.constructor = THREE.Mesh;
THREE.Mesh.prototype.supr = THREE.Object3D.prototype;
THREE.Mesh.prototype.getMorphTargetIndexByName = function(b) {
    if (this.morphTargetDictionary[b] !== undefined)return this.morphTargetDictionary[b];
    console.log("THREE.Mesh.getMorphTargetIndexByName: morph target " + b + " does not exist. Returning 0.");
    return 0
};
THREE.Bone = function(b) {
    THREE.Object3D.call(this);
    this.skin = b;
    this.skinMatrix = new THREE.Matrix4;
    this.hasNoneBoneChildren = !1
};
THREE.Bone.prototype = new THREE.Object3D;
THREE.Bone.prototype.constructor = THREE.Bone;
THREE.Bone.prototype.supr = THREE.Object3D.prototype;
THREE.Bone.prototype.update = function(b, c, d) {
    this.matrixAutoUpdate && (c |= this.updateMatrix());
    if (c || this.matrixWorldNeedsUpdate) {
        b ? this.skinMatrix.multiply(b, this.matrix) : this.skinMatrix.copy(this.matrix);
        this.matrixWorldNeedsUpdate = !1;
        c = !0
    }
    var f,g = this.children.length;
    if (this.hasNoneBoneChildren) {
        this.matrixWorld.multiply(this.skin.matrixWorld, this.skinMatrix);
        for (f = 0; f < g; f++) {
            b = this.children[f];
            b instanceof THREE.Bone ? b.update(this.skinMatrix, c, d) : b.update(this.matrixWorld, !0, d)
        }
    } else for (f = 0; f < g; f++)this.children[f].update(this.skinMatrix,
            c, d)
};
THREE.Bone.prototype.addChild = function(b) {
    if (this.children.indexOf(b) === -1) {
        b.parent !== undefined && b.parent.removeChild(b);
        b.parent = this;
        this.children.push(b);
        if (!(b instanceof THREE.Bone))this.hasNoneBoneChildren = !0
    }
};
if (!window.Float32Array)window.Float32Array = Array;
THREE.SkinnedMesh = function(b, c) {
    THREE.Mesh.call(this, b, c);
    this.identityMatrix = new THREE.Matrix4;
    this.bones = [];
    this.boneMatrices = [];
    var d,f,g,h,j,k;
    if (this.geometry.bones !== undefined) {
        for (d = 0; d < this.geometry.bones.length; d++) {
            g = this.geometry.bones[d];
            h = g.pos;
            j = g.rotq;
            k = g.scl;
            f = this.addBone();
            f.name = g.name;
            f.position.set(h[0], h[1], h[2]);
            f.quaternion.set(j[0], j[1], j[2], j[3]);
            f.useQuaternion = !0;
            k !== undefined ? f.scale.set(k[0], k[1], k[2]) : f.scale.set(1, 1, 1)
        }
        for (d = 0; d < this.bones.length; d++) {
            g = this.geometry.bones[d];
            f = this.bones[d];
            g.parent === -1 ? this.addChild(f) : this.bones[g.parent].addChild(f)
        }
        this.boneMatrices = new Float32Array(16 * this.bones.length);
        this.pose()
    }
};
THREE.SkinnedMesh.prototype = new THREE.Mesh;
THREE.SkinnedMesh.prototype.constructor = THREE.SkinnedMesh;
THREE.SkinnedMesh.prototype.update = function(b, c, d) {
    if (this.visible) {
        this.matrixAutoUpdate && (c |= this.updateMatrix());
        if (c || this.matrixWorldNeedsUpdate) {
            b ? this.matrixWorld.multiply(b, this.matrix) : this.matrixWorld.copy(this.matrix);
            this.matrixWorldNeedsUpdate = !1;
            c = !0
        }
        var f,g = this.children.length;
        for (f = 0; f < g; f++) {
            b = this.children[f];
            b instanceof THREE.Bone ? b.update(this.identityMatrix, !1, d) : b.update(this.matrixWorld, c, d)
        }
        d = this.bones.length;
        ba = this.bones;
        bm = this.boneMatrices;
        for (c = 0; c < d; c++)ba[c].skinMatrix.flattenToArrayOffset(bm,
                c * 16)
    }
};
THREE.SkinnedMesh.prototype.addBone = function(b) {
    b === undefined && (b = new THREE.Bone(this));
    this.bones.push(b);
    return b
};
THREE.SkinnedMesh.prototype.pose = function() {
    this.update(undefined, !0);
    for (var b,c = [],d = 0; d < this.bones.length; d++) {
        b = this.bones[d];
        c.push(THREE.Matrix4.makeInvert(b.skinMatrix));
        b.skinMatrix.flattenToArrayOffset(this.boneMatrices, d * 16)
    }
    if (this.geometry.skinVerticesA === undefined) {
        this.geometry.skinVerticesA = [];
        this.geometry.skinVerticesB = [];
        var f;
        for (b = 0; b < this.geometry.skinIndices.length; b++) {
            d = this.geometry.vertices[b].position;
            var g = this.geometry.skinIndices[b].x,h = this.geometry.skinIndices[b].y;
            f = new THREE.Vector3(d.x, d.y, d.z);
            this.geometry.skinVerticesA.push(c[g].multiplyVector3(f));
            f = new THREE.Vector3(d.x, d.y, d.z);
            this.geometry.skinVerticesB.push(c[h].multiplyVector3(f));
            if (this.geometry.skinWeights[b].x + this.geometry.skinWeights[b].y !== 1) {
                d = (1 - (this.geometry.skinWeights[b].x + this.geometry.skinWeights[b].y)) * 0.5;
                this.geometry.skinWeights[b].x += d;
                this.geometry.skinWeights[b].y += d
            }
        }
    }
};
THREE.Ribbon = function(b, c) {
    THREE.Object3D.call(this);
    this.geometry = b;
    this.materials = c instanceof Array ? c : [c];
    this.flipSided = !1;
    this.doubleSided = !1
};
THREE.Ribbon.prototype = new THREE.Object3D;
THREE.Ribbon.prototype.constructor = THREE.Ribbon;
THREE.Sound = function(b, c, d, f) {
    THREE.Object3D.call(this);
    this.isLoaded = !1;
    this.isAddedToDOM = !1;
    this.isPlaying = !1;
    this.duration = -1;
    this.radius = c !== undefined ? Math.abs(c) : 100;
    this.volume = Math.min(1, Math.max(0, d !== undefined ? d : 1));
    this.domElement = document.createElement("audio");
    this.domElement.volume = 0;
    this.domElement.pan = 0;
    this.domElement.loop = f !== undefined ? f : !0;
    this.sources = b instanceof Array ? b : [b];
    var g;
    d = this.sources.length;
    for (b = 0; b < d; b++) {
        c = this.sources[b];
        c.toLowerCase();
        if (c.indexOf(".mp3") !== -1)g =
                "audio/mpeg"; else if (c.indexOf(".ogg") !== -1)g = "audio/ogg"; else c.indexOf(".wav") !== -1 && (g = "audio/wav");
        if (this.domElement.canPlayType(g)) {
            g = document.createElement("source");
            g.src = this.sources[b];
            this.domElement.THREESound = this;
            this.domElement.appendChild(g);
            this.domElement.addEventListener("canplay", this.onLoad, !0);
            this.domElement.load();
            break
        }
    }
};
THREE.Sound.prototype = new THREE.Object3D;
THREE.Sound.prototype.constructor = THREE.Sound;
THREE.Sound.prototype.supr = THREE.Object3D.prototype;
THREE.Sound.prototype.onLoad = function() {
    var b = this.THREESound;
    if (!b.isLoaded) {
        this.removeEventListener("canplay", this.onLoad, !0);
        b.isLoaded = !0;
        b.duration = this.duration;
        b.isPlaying && b.play()
    }
};
THREE.Sound.prototype.addToDOM = function(b) {
    this.isAddedToDOM = !0;
    b.appendChild(this.domElement)
};
THREE.Sound.prototype.play = function(b) {
    this.isPlaying = !0;
    if (this.isLoaded) {
        this.domElement.play();
        if (b)this.domElement.currentTime = b % this.duration
    }
};
THREE.Sound.prototype.pause = function() {
    this.isPlaying = !1;
    this.domElement.pause()
};
THREE.Sound.prototype.stop = function() {
    this.isPlaying = !1;
    this.domElement.pause();
    this.domElement.currentTime = 0
};
THREE.Sound.prototype.calculateVolumeAndPan = function(b) {
    b = b.length();
    this.domElement.volume = b <= this.radius ? this.volume * (1 - b / this.radius) : 0
};
THREE.Sound.prototype.update = function(b, c, d) {
    if (this.matrixAutoUpdate) {
        this.matrix.setPosition(this.position);
        c = !0
    }
    if (c || this.matrixWorldNeedsUpdate) {
        b ? this.matrixWorld.multiply(b, this.matrix) : this.matrixWorld.copy(this.matrix);
        this.matrixWorldNeedsUpdate = !1;
        c = !0
    }
    var f = this.children.length;
    for (b = 0; b < f; b++)this.children[b].update(this.matrixWorld, c, d)
};
THREE.LOD = function() {
    THREE.Object3D.call(this);
    this.LODs = []
};
THREE.LOD.prototype = new THREE.Object3D;
THREE.LOD.prototype.constructor = THREE.LOD;
THREE.LOD.prototype.supr = THREE.Object3D.prototype;
THREE.LOD.prototype.add = function(b, c) {
    c === undefined && (c = 0);
    c = Math.abs(c);
    for (var d = 0; d < this.LODs.length; d++)if (c < this.LODs[d].visibleAtDistance)break;
    this.LODs.splice(d, 0, {visibleAtDistance:c,object3D:b});
    this.addChild(b)
};
THREE.LOD.prototype.update = function(b, c, d) {
    this.matrixAutoUpdate && (c |= this.updateMatrix());
    if (c || this.matrixWorldNeedsUpdate) {
        b ? this.matrixWorld.multiply(b, this.matrix) : this.matrixWorld.copy(this.matrix);
        this.matrixWorldNeedsUpdate = !1;
        c = !0
    }
    if (this.LODs.length > 1) {
        b = d.matrixWorldInverse;
        b = -(b.n31 * this.position.x + b.n32 * this.position.y + b.n33 * this.position.z + b.n34);
        this.LODs[0].object3D.visible = !0;
        for (var f = 1; f < this.LODs.length; f++)if (b >= this.LODs[f].visibleAtDistance) {
            this.LODs[f - 1].object3D.visible =
                    !1;
            this.LODs[f].object3D.visible = !0
        } else break;
        for (; f < this.LODs.length; f++)this.LODs[f].object3D.visible = !1
    }
    for (b = 0; b < this.children.length; b++)this.children[b].update(this.matrixWorld, c, d)
};
THREE.ShadowVolume = function(b, c) {
    THREE.Mesh.call(this, b.geometry, c ? [new THREE.ShadowVolumeDynamicMaterial] : [new THREE.ShadowVolumeDynamicMaterial]);
    b.addChild(this);
    this.calculateShadowVolumeGeometry(b.geometry)
};
THREE.ShadowVolume.prototype = new THREE.Mesh;
THREE.ShadowVolume.prototype.constructor = THREE.ShadowVolume;
THREE.ShadowVolume.prototype.supr = THREE.Mesh.prototype;
THREE.ShadowVolume.prototype.calculateShadowVolumeGeometry = function(b) {
    this.geometry = new THREE.Geometry;
    this.geometry.boundingSphere = b.boundingSphere;
    this.geometry.edgeFaces = [];
    var c = this.geometry.vertices,d = this.geometry.faces,f = this.geometry.edgeFaces,g = b.faces;
    b = b.vertices;
    var h = g.length,j,k,m,p,o,w = ["a","b","c","d"];
    for (m = 0; m < h; m++) {
        k = c.length;
        j = g[m];
        if (j instanceof THREE.Face4) {
            p = 4;
            k = new THREE.Face4(k, k + 1, k + 2, k + 3)
        } else {
            p = 3;
            k = new THREE.Face3(k, k + 1, k + 2)
        }
        k.normal.copy(j.normal);
        d.push(k);
        for (k =
                     0; k < p; k++) {
            o = b[j[w[k]]];
            c.push(new THREE.Vertex(o.position.clone()))
        }
    }
    for (h = 0; h < g.length - 1; h++) {
        b = d[h];
        for (j = h + 1; j < g.length; j++) {
            k = d[j];
            k = this.facesShareEdge(c, b, k);
            if (k !== undefined) {
                k = new THREE.Face4(k.indices[0], k.indices[3], k.indices[2], k.indices[1]);
                k.normal.set(1, 0, 0);
                f.push(k)
            }
        }
    }
};
THREE.ShadowVolume.prototype.facesShareEdge = function(b, c, d) {
    var f,g,h,j,k,m,p,o,w,y,v,A,F,G = 0,L = ["a","b","c","d"];
    f = c instanceof THREE.Face4 ? 4 : 3;
    g = d instanceof THREE.Face4 ? 4 : 3;
    for (A = 0; A < f; A++) {
        h = c[L[A]];
        k = b[h];
        for (F = 0; F < g; F++) {
            j = d[L[F]];
            m = b[j];
            if (Math.abs(k.position.x - m.position.x) < 1.0E-4 && Math.abs(k.position.y - m.position.y) < 1.0E-4 && Math.abs(k.position.z - m.position.z) < 1.0E-4) {
                G++;
                if (G === 1) {
                    p = k;
                    o = m;
                    w = h;
                    y = j;
                    v = L[A]
                }
                if (G === 2) {
                    v += L[A];
                    return v === "ad" || v === "ac" ? {faces:[c,d],vertices:[p,o,m,k],indices:[w,
                        y,j,h],vertexTypes:[1,2,2,1],extrudable:!0} : {faces:[c,d],vertices:[p,k,m,o],indices:[w,h,j,y],vertexTypes:[1,1,2,2],extrudable:!0}
                }
            }
        }
    }
};
THREE.Scene = function() {
    THREE.Object3D.call(this);
    this.matrixAutoUpdate = !1;
    this.fog = null;
    this.objects = [];
    this.lights = [];
    this.sounds = [];
    this.__objectsAdded = [];
    this.__objectsRemoved = []
};
THREE.Scene.prototype = new THREE.Object3D;
THREE.Scene.prototype.constructor = THREE.Scene;
THREE.Scene.prototype.supr = THREE.Object3D.prototype;
THREE.Scene.prototype.addChild = function(b) {
    this.supr.addChild.call(this, b);
    this.addChildRecurse(b)
};
THREE.Scene.prototype.addChildRecurse = function(b) {
    if (b instanceof THREE.Light)this.lights.indexOf(b) === -1 && this.lights.push(b); else if (b instanceof THREE.Sound)this.sounds.indexOf(b) === -1 && this.sounds.push(b); else if (!(b instanceof THREE.Camera || b instanceof THREE.Bone) && this.objects.indexOf(b) === -1) {
        this.objects.push(b);
        this.__objectsAdded.push(b)
    }
    for (var c = 0; c < b.children.length; c++)this.addChildRecurse(b.children[c])
};
THREE.Scene.prototype.removeChild = function(b) {
    this.supr.removeChild.call(this, b);
    this.removeChildRecurse(b)
};
THREE.Scene.prototype.removeChildRecurse = function(b) {
    if (b instanceof THREE.Light) {
        var c = this.lights.indexOf(b);
        c !== -1 && this.lights.splice(c, 1)
    } else if (b instanceof THREE.Sound) {
        c = this.sounds.indexOf(b);
        c !== -1 && this.sounds.splice(c, 1)
    } else if (!(b instanceof THREE.Camera)) {
        c = this.objects.indexOf(b);
        if (c !== -1) {
            this.objects.splice(c, 1);
            this.__objectsRemoved.push(b)
        }
    }
    for (c = 0; c < b.children.length; c++)this.removeChildRecurse(b.children[c])
};
THREE.Scene.prototype.addObject = THREE.Scene.prototype.addChild;
THREE.Scene.prototype.removeObject = THREE.Scene.prototype.removeChild;
THREE.Scene.prototype.addLight = THREE.Scene.prototype.addChild;
THREE.Scene.prototype.removeLight = THREE.Scene.prototype.removeChild;
THREE.Fog = function(b, c, d) {
    this.color = new THREE.Color(b);
    this.near = c || 1;
    this.far = d || 1E3
};
THREE.FogExp2 = function(b, c) {
    this.color = new THREE.Color(b);
    this.density = c !== undefined ? c : 2.5E-4
};
THREE.Projector = function() {
    function b() {
        var fa = m[k] = m[k] || new THREE.RenderableVertex;
        k++;
        return fa
    }

    function c(fa, ca) {
        return ca.z - fa.z
    }

    function d(fa, ca) {
        var ya = 0,Fa = 1,Ea = fa.z + fa.w,Y = ca.z + ca.w,qa = -fa.z + fa.w,ta = -ca.z + ca.w;
        if (Ea >= 0 && Y >= 0 && qa >= 0 && ta >= 0)return!0; else if (Ea < 0 && Y < 0 || qa < 0 && ta < 0)return!1; else {
            if (Ea < 0)ya = Math.max(ya, Ea / (Ea - Y)); else Y < 0 && (Fa = Math.min(Fa, Ea / (Ea - Y)));
            if (qa < 0)ya = Math.max(ya, qa / (qa - ta)); else ta < 0 && (Fa = Math.min(Fa, qa / (qa - ta)));
            if (Fa < ya)return!1; else {
                fa.lerpSelf(ca, ya);
                ca.lerpSelf(fa,
                        1 - Fa);
                return!0
            }
        }
    }

    var f,g,h = [],j,k,m = [],p,o,w = [],y,v = [],A,F,G = [],L,V,z = [],K = new THREE.Vector4,P = new THREE.Vector4,S = new THREE.Matrix4,xa = new THREE.Matrix4,ra = [new THREE.Vector4,new THREE.Vector4,new THREE.Vector4,new THREE.Vector4,new THREE.Vector4,new THREE.Vector4],pa = new THREE.Vector4,e = new THREE.Vector4;
    this.projectVector = function(fa, ca) {
        S.multiply(ca.projectionMatrix, ca.matrixWorldInverse);
        S.multiplyVector3(fa);
        return fa
    };
    this.unprojectVector = function(fa, ca) {
        S.multiply(ca.matrixWorld, THREE.Matrix4.makeInvert(ca.projectionMatrix));
        S.multiplyVector3(fa);
        return fa
    };
    this.projectObjects = function(fa, ca, ya) {
        ca = [];
        var Fa,Ea,Y;
        g = 0;
        Ea = fa.objects;
        fa = 0;
        for (Fa = Ea.length; fa < Fa; fa++) {
            Y = Ea[fa];
            var qa;
            if (!(qa = !Y.visible))if (qa = Y instanceof THREE.Mesh) {
                a:{
                    qa = void 0;
                    for (var ta = Y.matrixWorld,va = -Y.geometry.boundingSphere.radius * Math.max(Y.scale.x, Math.max(Y.scale.y, Y.scale.z)),ia = 0; ia < 6; ia++) {
                        qa = ra[ia].x * ta.n14 + ra[ia].y * ta.n24 + ra[ia].z * ta.n34 + ra[ia].w;
                        if (qa <= va) {
                            qa = !1;
                            break a
                        }
                    }
                    qa = !0
                }
                qa = !qa
            }
            if (!qa) {
                qa = h[g] = h[g] || new THREE.RenderableObject;
                g++;
                f = qa;
                K.copy(Y.position);
                S.multiplyVector3(K);
                f.object = Y;
                f.z = K.z;
                ca.push(f)
            }
        }
        ya && ca.sort(c);
        return ca
    };
    this.projectScene = function(fa, ca, ya) {
        var Fa = [],Ea = ca.near,Y = ca.far,qa,ta,va,ia,Z,na,Ba,ka,la,Da,Sa,$a,Ya,Ta,R,aa,oa;
        V = F = y = o = 0;
        ca.matrixAutoUpdate && ca.updateMatrix();
        fa.update(undefined, !1, ca);
        S.multiply(ca.projectionMatrix, ca.matrixWorldInverse);
        ra[0].set(S.n41 - S.n11, S.n42 - S.n12, S.n43 - S.n13, S.n44 - S.n14);
        ra[1].set(S.n41 + S.n11, S.n42 + S.n12, S.n43 + S.n13, S.n44 + S.n14);
        ra[2].set(S.n41 + S.n21, S.n42 + S.n22, S.n43 +
                S.n23, S.n44 + S.n24);
        ra[3].set(S.n41 - S.n21, S.n42 - S.n22, S.n43 - S.n23, S.n44 - S.n24);
        ra[4].set(S.n41 - S.n31, S.n42 - S.n32, S.n43 - S.n33, S.n44 - S.n34);
        ra[5].set(S.n41 + S.n31, S.n42 + S.n32, S.n43 + S.n33, S.n44 + S.n34);
        for (qa = 0; qa < 6; qa++) {
            la = ra[qa];
            la.divideScalar(Math.sqrt(la.x * la.x + la.y * la.y + la.z * la.z))
        }
        la = this.projectObjects(fa, ca, !0);
        fa = 0;
        for (qa = la.length; fa < qa; fa++) {
            Da = la[fa].object;
            if (Da.visible) {
                Sa = Da.matrixWorld;
                $a = Da.matrixRotationWorld;
                Ya = Da.materials;
                Ta = Da.overdraw;
                k = 0;
                if (Da instanceof THREE.Mesh) {
                    R = Da.geometry;
                    ia = R.vertices;
                    aa = R.faces;
                    R = R.faceVertexUvs;
                    ta = 0;
                    for (va = ia.length; ta < va; ta++) {
                        j = b();
                        j.positionWorld.copy(ia[ta].position);
                        Sa.multiplyVector3(j.positionWorld);
                        j.positionScreen.copy(j.positionWorld);
                        S.multiplyVector4(j.positionScreen);
                        j.positionScreen.x /= j.positionScreen.w;
                        j.positionScreen.y /= j.positionScreen.w;
                        j.visible = j.positionScreen.z > Ea && j.positionScreen.z < Y
                    }
                    ia = 0;
                    for (ta = aa.length; ia < ta; ia++) {
                        va = aa[ia];
                        if (va instanceof THREE.Face3) {
                            Z = m[va.a];
                            na = m[va.b];
                            Ba = m[va.c];
                            if (Z.visible && na.visible && Ba.visible &&
                                    (Da.doubleSided || Da.flipSided != (Ba.positionScreen.x - Z.positionScreen.x) * (na.positionScreen.y - Z.positionScreen.y) - (Ba.positionScreen.y - Z.positionScreen.y) * (na.positionScreen.x - Z.positionScreen.x) < 0)) {
                                ka = w[o] = w[o] || new THREE.RenderableFace3;
                                o++;
                                p = ka;
                                p.v1.copy(Z);
                                p.v2.copy(na);
                                p.v3.copy(Ba)
                            } else continue
                        } else if (va instanceof THREE.Face4) {
                            Z = m[va.a];
                            na = m[va.b];
                            Ba = m[va.c];
                            ka = m[va.d];
                            if (Z.visible && na.visible && Ba.visible && ka.visible && (Da.doubleSided || Da.flipSided != ((ka.positionScreen.x - Z.positionScreen.x) *
                                    (na.positionScreen.y - Z.positionScreen.y) - (ka.positionScreen.y - Z.positionScreen.y) * (na.positionScreen.x - Z.positionScreen.x) < 0 || (na.positionScreen.x - Ba.positionScreen.x) * (ka.positionScreen.y - Ba.positionScreen.y) - (na.positionScreen.y - Ba.positionScreen.y) * (ka.positionScreen.x - Ba.positionScreen.x) < 0))) {
                                oa = v[y] = v[y] || new THREE.RenderableFace4;
                                y++;
                                p = oa;
                                p.v1.copy(Z);
                                p.v2.copy(na);
                                p.v3.copy(Ba);
                                p.v4.copy(ka)
                            } else continue
                        }
                        p.normalWorld.copy(va.normal);
                        $a.multiplyVector3(p.normalWorld);
                        p.centroidWorld.copy(va.centroid);
                        Sa.multiplyVector3(p.centroidWorld);
                        p.centroidScreen.copy(p.centroidWorld);
                        S.multiplyVector3(p.centroidScreen);
                        Ba = va.vertexNormals;
                        Z = 0;
                        for (na = Ba.length; Z < na; Z++) {
                            ka = p.vertexNormalsWorld[Z];
                            ka.copy(Ba[Z]);
                            $a.multiplyVector3(ka)
                        }
                        Z = 0;
                        for (na = R.length; Z < na; Z++)if (oa = R[Z][ia]) {
                            Ba = 0;
                            for (ka = oa.length; Ba < ka; Ba++)p.uvs[Z][Ba] = oa[Ba]
                        }
                        p.meshMaterials = Ya;
                        p.faceMaterials = va.materials;
                        p.overdraw = Ta;
                        p.z = p.centroidScreen.z;
                        Fa.push(p)
                    }
                } else if (Da instanceof THREE.Line) {
                    xa.multiply(S, Sa);
                    ia = Da.geometry.vertices;
                    Z = b();
                    Z.positionScreen.copy(ia[0].position);
                    xa.multiplyVector4(Z.positionScreen);
                    ta = 1;
                    for (va = ia.length; ta < va; ta++) {
                        Z = b();
                        Z.positionScreen.copy(ia[ta].position);
                        xa.multiplyVector4(Z.positionScreen);
                        na = m[k - 2];
                        pa.copy(Z.positionScreen);
                        e.copy(na.positionScreen);
                        if (d(pa, e)) {
                            pa.multiplyScalar(1 / pa.w);
                            e.multiplyScalar(1 / e.w);
                            Sa = G[F] = G[F] || new THREE.RenderableLine;
                            F++;
                            A = Sa;
                            A.v1.positionScreen.copy(pa);
                            A.v2.positionScreen.copy(e);
                            A.z = Math.max(pa.z, e.z);
                            A.materials = Da.materials;
                            Fa.push(A)
                        }
                    }
                } else if (Da instanceof
                        THREE.Particle) {
                    P.set(Da.position.x, Da.position.y, Da.position.z, 1);
                    S.multiplyVector4(P);
                    P.z /= P.w;
                    if (P.z > 0 && P.z < 1) {
                        Sa = z[V] = z[V] || new THREE.RenderableParticle;
                        V++;
                        L = Sa;
                        L.x = P.x / P.w;
                        L.y = P.y / P.w;
                        L.z = P.z;
                        L.rotation = Da.rotation.z;
                        L.scale.x = Da.scale.x * Math.abs(L.x - (P.x + ca.projectionMatrix.n11) / (P.w + ca.projectionMatrix.n14));
                        L.scale.y = Da.scale.y * Math.abs(L.y - (P.y + ca.projectionMatrix.n22) / (P.w + ca.projectionMatrix.n24));
                        L.materials = Da.materials;
                        Fa.push(L)
                    }
                }
            }
        }
        ya && Fa.sort(c);
        return Fa
    }
};
THREE.DOMRenderer = function() {
    THREE.Renderer.call(this);
    var b = null,c = new THREE.Projector,d,f,g,h;
    this.domElement = document.createElement("div");
    this.setSize = function(j, k) {
        d = j;
        f = k;
        g = d / 2;
        h = f / 2
    };
    this.render = function(j, k) {
        var m,p,o,w,y,v,A,F;
        b = c.projectScene(j, k);
        m = 0;
        for (p = b.length; m < p; m++) {
            y = b[m];
            if (y instanceof THREE.RenderableParticle) {
                A = y.x * g + g;
                F = y.y * h + h;
                o = 0;
                for (w = y.material.length; o < w; o++) {
                    v = y.material[o];
                    if (v instanceof THREE.ParticleDOMMaterial) {
                        v = v.domElement;
                        v.style.left = A + "px";
                        v.style.top = F + "px"
                    }
                }
            }
        }
    }
};
THREE.CanvasRenderer = function() {
    function b(ma) {
        if (v != ma)o.globalAlpha = v = ma
    }

    function c(ma) {
        if (A != ma) {
            switch (ma) {case THREE.NormalBlending:o.globalCompositeOperation = "source-over";break;case THREE.AdditiveBlending:o.globalCompositeOperation = "lighter";break;case THREE.SubtractiveBlending:o.globalCompositeOperation = "darker"
            }
            A = ma
        }
    }

    function d(ma) {
        if (F != ma)o.strokeStyle = F = ma
    }

    var f = null,g = new THREE.Projector,h = document.createElement("canvas"),j,k,m,p,o = h.getContext("2d"),w = new THREE.Color(0),y = 0,v = 1,A = 0,
            F = null,G = null,L = null,V = null,z = null,K,P,S,xa,ra = new THREE.RenderableVertex,pa = new THREE.RenderableVertex,e,fa,ca,ya,Fa,Ea,Y,qa,ta,va,ia,Z,na = new THREE.Color,Ba = new THREE.Color,ka = new THREE.Color,la = new THREE.Color,Da = new THREE.Color,Sa,$a,Ya,Ta,R,aa,oa,Ca,ja,ga,n = new THREE.Rectangle,C = new THREE.Rectangle,u = new THREE.Rectangle,x = !1,B = new THREE.Color,J = new THREE.Color,M = new THREE.Color,H = new THREE.Color,I = new THREE.Vector3,E,N,O,W,U,za,Ka = 16;
    E = document.createElement("canvas");
    E.width = E.height = 2;
    N = E.getContext("2d");
    N.fillStyle = "rgba(0,0,0,1)";
    N.fillRect(0, 0, 2, 2);
    O = N.getImageData(0, 0, 2, 2);
    W = O.data;
    U = document.createElement("canvas");
    U.width = U.height = Ka;
    za = U.getContext("2d");
    za.translate(-Ka / 2, -Ka / 2);
    za.scale(Ka, Ka);
    Ka--;
    this.domElement = h;
    this.autoClear = !0;
    this.sortObjects = !0;
    this.sortElements = !0;
    this.setSize = function(ma, Ha) {
        j = ma;
        k = Ha;
        m = j / 2;
        p = k / 2;
        h.width = j;
        h.height = k;
        n.set(-m, -p, m, p);
        v = 1;
        A = 0;
        z = V = L = G = F = null
    };
    this.setClearColor = function(ma, Ha) {
        w = ma;
        y = Ha
    };
    this.setClearColorHex = function(ma, Ha) {
        w.setHex(ma);
        y = Ha
    };
    this.clear =
            function() {
                o.setTransform(1, 0, 0, -1, m, p);
                if (!C.isEmpty()) {
                    C.inflate(1);
                    C.minSelf(n);
                    if (w.hex == 0 && y == 0)o.clearRect(C.getX(), C.getY(), C.getWidth(), C.getHeight()); else {
                        c(THREE.NormalBlending);
                        b(1);
                        o.fillStyle = "rgba(" + Math.floor(w.r * 255) + "," + Math.floor(w.g * 255) + "," + Math.floor(w.b * 255) + "," + y + ")";
                        o.fillRect(C.getX(), C.getY(), C.getWidth(), C.getHeight())
                    }
                    C.empty()
                }
            };
    this.render = function(ma, Ha) {
        function db(X) {
            var sa,ea,da,wa = X.lights;
            J.setRGB(0, 0, 0);
            M.setRGB(0, 0, 0);
            H.setRGB(0, 0, 0);
            X = 0;
            for (sa = wa.length; X < sa; X++) {
                ea =
                        wa[X];
                da = ea.color;
                if (ea instanceof THREE.AmbientLight) {
                    J.r += da.r;
                    J.g += da.g;
                    J.b += da.b
                } else if (ea instanceof THREE.DirectionalLight) {
                    M.r += da.r;
                    M.g += da.g;
                    M.b += da.b
                } else if (ea instanceof THREE.PointLight) {
                    H.r += da.r;
                    H.g += da.g;
                    H.b += da.b
                }
            }
        }

        function Aa(X, sa, ea, da) {
            var wa,ua,ha,Q,Na = X.lights;
            X = 0;
            for (wa = Na.length; X < wa; X++) {
                ua = Na[X];
                ha = ua.color;
                if (ua instanceof THREE.DirectionalLight) {
                    Q = ea.dot(ua.position);
                    if (!(Q <= 0)) {
                        Q *= ua.intensity;
                        da.r += ha.r * Q;
                        da.g += ha.g * Q;
                        da.b += ha.b * Q
                    }
                } else if (ua instanceof THREE.PointLight) {
                    Q =
                            ea.dot(I.sub(ua.position, sa).normalize());
                    if (!(Q <= 0)) {
                        Q *= ua.distance == 0 ? 1 : 1 - Math.min(sa.distanceTo(ua.position) / ua.distance, 1);
                        if (Q != 0) {
                            Q *= ua.intensity;
                            da.r += ha.r * Q;
                            da.g += ha.g * Q;
                            da.b += ha.b * Q
                        }
                    }
                }
            }
        }

        function Ga(X, sa, ea) {
            b(ea.opacity);
            c(ea.blending);
            var da,wa,ua,ha,Q,Na;
            if (ea instanceof THREE.ParticleBasicMaterial) {
                if (ea.map) {
                    ha = ea.map.image;
                    Q = ha.width >> 1;
                    Na = ha.height >> 1;
                    ea = sa.scale.x * m;
                    ua = sa.scale.y * p;
                    da = ea * Q;
                    wa = ua * Na;
                    u.set(X.x - da, X.y - wa, X.x + da, X.y + wa);
                    if (n.instersects(u)) {
                        o.save();
                        o.translate(X.x, X.y);
                        o.rotate(-sa.rotation);
                        o.scale(ea, -ua);
                        o.translate(-Q, -Na);
                        o.drawImage(ha, 0, 0);
                        o.restore()
                    }
                }
            } else if (ea instanceof THREE.ParticleCanvasMaterial) {
                da = sa.scale.x * m;
                wa = sa.scale.y * p;
                u.set(X.x - da, X.y - wa, X.x + da, X.y + wa);
                if (n.instersects(u)) {
                    d(ea.color.__styleString);
                    ua = ea.color.__styleString;
                    if (G != ua)o.fillStyle = G = ua;
                    o.save();
                    o.translate(X.x, X.y);
                    o.rotate(-sa.rotation);
                    o.scale(da, wa);
                    ea.program(o);
                    o.restore()
                }
            }
        }

        function Ia(X, sa, ea, da) {
            b(da.opacity);
            c(da.blending);
            o.beginPath();
            o.moveTo(X.positionScreen.x,
                    X.positionScreen.y);
            o.lineTo(sa.positionScreen.x, sa.positionScreen.y);
            o.closePath();
            if (da instanceof THREE.LineBasicMaterial) {
                na.__styleString = da.color.__styleString;
                X = da.linewidth;
                if (L != X)o.lineWidth = L = X;
                X = da.linecap;
                if (V != X)o.lineCap = V = X;
                X = da.linejoin;
                if (z != X)o.lineJoin = z = X;
                d(na.__styleString);
                o.stroke();
                u.inflate(da.linewidth * 2)
            }
        }

        function Qa(X, sa, ea, da, wa, ua, ha, Q, Na) {
            b(Q.opacity);
            c(Q.blending);
            e = X.positionScreen.x;
            fa = X.positionScreen.y;
            ca = sa.positionScreen.x;
            ya = sa.positionScreen.y;
            Fa = ea.positionScreen.x;
            Ea = ea.positionScreen.y;
            $(e, fa, ca, ya, Fa, Ea);
            if (Q instanceof THREE.MeshBasicMaterial)if (Q.map) {
                if (Q.map.mapping instanceof THREE.UVMapping) {
                    Ta = ha.uvs[0];
                    Ma(e, fa, ca, ya, Fa, Ea, Q.map.image, Ta[da].u, Ta[da].v, Ta[wa].u, Ta[wa].v, Ta[ua].u, Ta[ua].v)
                }
            } else if (Q.envMap) {
                if (Q.envMap.mapping instanceof THREE.SphericalReflectionMapping) {
                    X = Ha.matrixWorldInverse;
                    I.copy(ha.vertexNormalsWorld[0]);
                    R = (I.x * X.n11 + I.y * X.n12 + I.z * X.n13) * 0.5 + 0.5;
                    aa = -(I.x * X.n21 + I.y * X.n22 + I.z * X.n23) * 0.5 + 0.5;
                    I.copy(ha.vertexNormalsWorld[1]);
                    oa =
                            (I.x * X.n11 + I.y * X.n12 + I.z * X.n13) * 0.5 + 0.5;
                    Ca = -(I.x * X.n21 + I.y * X.n22 + I.z * X.n23) * 0.5 + 0.5;
                    I.copy(ha.vertexNormalsWorld[2]);
                    ja = (I.x * X.n11 + I.y * X.n12 + I.z * X.n13) * 0.5 + 0.5;
                    ga = -(I.x * X.n21 + I.y * X.n22 + I.z * X.n23) * 0.5 + 0.5;
                    Ma(e, fa, ca, ya, Fa, Ea, Q.envMap.image, R, aa, oa, Ca, ja, ga)
                }
            } else Q.wireframe ? ab(Q.color.__styleString, Q.wireframeLinewidth, Q.wireframeLinecap, Q.wireframeLinejoin) : fb(Q.color.__styleString); else if (Q instanceof THREE.MeshLambertMaterial) {
                if (Q.map && !Q.wireframe) {
                    if (Q.map.mapping instanceof THREE.UVMapping) {
                        Ta =
                                ha.uvs[0];
                        Ma(e, fa, ca, ya, Fa, Ea, Q.map.image, Ta[da].u, Ta[da].v, Ta[wa].u, Ta[wa].v, Ta[ua].u, Ta[ua].v)
                    }
                    c(THREE.SubtractiveBlending)
                }
                if (x)if (!Q.wireframe && Q.shading == THREE.SmoothShading && ha.vertexNormalsWorld.length == 3) {
                    Ba.r = ka.r = la.r = J.r;
                    Ba.g = ka.g = la.g = J.g;
                    Ba.b = ka.b = la.b = J.b;
                    Aa(Na, ha.v1.positionWorld, ha.vertexNormalsWorld[0], Ba);
                    Aa(Na, ha.v2.positionWorld, ha.vertexNormalsWorld[1], ka);
                    Aa(Na, ha.v3.positionWorld, ha.vertexNormalsWorld[2], la);
                    Da.r = (ka.r + la.r) * 0.5;
                    Da.g = (ka.g + la.g) * 0.5;
                    Da.b = (ka.b + la.b) * 0.5;
                    Ya =
                            Va(Ba, ka, la, Da);
                    Ma(e, fa, ca, ya, Fa, Ea, Ya, 0, 0, 1, 0, 0, 1)
                } else {
                    B.r = J.r;
                    B.g = J.g;
                    B.b = J.b;
                    Aa(Na, ha.centroidWorld, ha.normalWorld, B);
                    na.r = Q.color.r * B.r;
                    na.g = Q.color.g * B.g;
                    na.b = Q.color.b * B.b;
                    na.updateStyleString();
                    Q.wireframe ? ab(na.__styleString, Q.wireframeLinewidth, Q.wireframeLinecap, Q.wireframeLinejoin) : fb(na.__styleString)
                } else Q.wireframe ? ab(Q.color.__styleString, Q.wireframeLinewidth, Q.wireframeLinecap, Q.wireframeLinejoin) : fb(Q.color.__styleString)
            } else if (Q instanceof THREE.MeshDepthMaterial) {
                Sa = Ha.near;
                $a = Ha.far;
                Ba.r = Ba.g = Ba.b = 1 - gb(X.positionScreen.z, Sa, $a);
                ka.r = ka.g = ka.b = 1 - gb(sa.positionScreen.z, Sa, $a);
                la.r = la.g = la.b = 1 - gb(ea.positionScreen.z, Sa, $a);
                Da.r = (ka.r + la.r) * 0.5;
                Da.g = (ka.g + la.g) * 0.5;
                Da.b = (ka.b + la.b) * 0.5;
                Ya = Va(Ba, ka, la, Da);
                Ma(e, fa, ca, ya, Fa, Ea, Ya, 0, 0, 1, 0, 0, 1)
            } else if (Q instanceof THREE.MeshNormalMaterial) {
                na.r = hb(ha.normalWorld.x);
                na.g = hb(ha.normalWorld.y);
                na.b = hb(ha.normalWorld.z);
                na.updateStyleString();
                Q.wireframe ? ab(na.__styleString, Q.wireframeLinewidth, Q.wireframeLinecap, Q.wireframeLinejoin) :
                        fb(na.__styleString)
            }
        }

        function D(X, sa, ea, da, wa, ua, ha, Q, Na) {
            b(Q.opacity);
            c(Q.blending);
            if (Q.map || Q.envMap) {
                Qa(X, sa, da, 0, 1, 3, ha, Q, Na);
                Qa(wa, ea, ua, 1, 2, 3, ha, Q, Na)
            } else {
                e = X.positionScreen.x;
                fa = X.positionScreen.y;
                ca = sa.positionScreen.x;
                ya = sa.positionScreen.y;
                Fa = ea.positionScreen.x;
                Ea = ea.positionScreen.y;
                Y = da.positionScreen.x;
                qa = da.positionScreen.y;
                ta = wa.positionScreen.x;
                va = wa.positionScreen.y;
                ia = ua.positionScreen.x;
                Z = ua.positionScreen.y;
                if (Q instanceof THREE.MeshBasicMaterial) {
                    t(e, fa, ca, ya, Fa, Ea, Y, qa);
                    Q.wireframe ? ab(Q.color.__styleString, Q.wireframeLinewidth, Q.wireframeLinecap, Q.wireframeLinejoin) : fb(Q.color.__styleString)
                } else if (Q instanceof THREE.MeshLambertMaterial)if (x)if (!Q.wireframe && Q.shading == THREE.SmoothShading && ha.vertexNormalsWorld.length == 4) {
                    Ba.r = ka.r = la.r = Da.r = J.r;
                    Ba.g = ka.g = la.g = Da.g = J.g;
                    Ba.b = ka.b = la.b = Da.b = J.b;
                    Aa(Na, ha.v1.positionWorld, ha.vertexNormalsWorld[0], Ba);
                    Aa(Na, ha.v2.positionWorld, ha.vertexNormalsWorld[1], ka);
                    Aa(Na, ha.v4.positionWorld, ha.vertexNormalsWorld[3], la);
                    Aa(Na,
                            ha.v3.positionWorld, ha.vertexNormalsWorld[2], Da);
                    Ya = Va(Ba, ka, la, Da);
                    $(e, fa, ca, ya, Y, qa);
                    Ma(e, fa, ca, ya, Y, qa, Ya, 0, 0, 1, 0, 0, 1);
                    $(ta, va, Fa, Ea, ia, Z);
                    Ma(ta, va, Fa, Ea, ia, Z, Ya, 1, 0, 1, 1, 0, 1)
                } else {
                    B.r = J.r;
                    B.g = J.g;
                    B.b = J.b;
                    Aa(Na, ha.centroidWorld, ha.normalWorld, B);
                    na.r = Q.color.r * B.r;
                    na.g = Q.color.g * B.g;
                    na.b = Q.color.b * B.b;
                    na.updateStyleString();
                    t(e, fa, ca, ya, Fa, Ea, Y, qa);
                    Q.wireframe ? ab(na.__styleString, Q.wireframeLinewidth, Q.wireframeLinecap, Q.wireframeLinejoin) : fb(na.__styleString)
                } else {
                    t(e, fa, ca, ya, Fa, Ea, Y, qa);
                    Q.wireframe ?
                            ab(Q.color.__styleString, Q.wireframeLinewidth, Q.wireframeLinecap, Q.wireframeLinejoin) : fb(Q.color.__styleString)
                } else if (Q instanceof THREE.MeshNormalMaterial) {
                    na.r = hb(ha.normalWorld.x);
                    na.g = hb(ha.normalWorld.y);
                    na.b = hb(ha.normalWorld.z);
                    na.updateStyleString();
                    t(e, fa, ca, ya, Fa, Ea, Y, qa);
                    Q.wireframe ? ab(na.__styleString, Q.wireframeLinewidth, Q.wireframeLinecap, Q.wireframeLinejoin) : fb(na.__styleString)
                } else if (Q instanceof THREE.MeshDepthMaterial) {
                    Sa = Ha.near;
                    $a = Ha.far;
                    Ba.r = Ba.g = Ba.b = 1 - gb(X.positionScreen.z,
                            Sa, $a);
                    ka.r = ka.g = ka.b = 1 - gb(sa.positionScreen.z, Sa, $a);
                    la.r = la.g = la.b = 1 - gb(da.positionScreen.z, Sa, $a);
                    Da.r = Da.g = Da.b = 1 - gb(ea.positionScreen.z, Sa, $a);
                    Ya = Va(Ba, ka, la, Da);
                    $(e, fa, ca, ya, Y, qa);
                    Ma(e, fa, ca, ya, Y, qa, Ya, 0, 0, 1, 0, 0, 1);
                    $(ta, va, Fa, Ea, ia, Z);
                    Ma(ta, va, Fa, Ea, ia, Z, Ya, 1, 0, 1, 1, 0, 1)
                }
            }
        }

        function $(X, sa, ea, da, wa, ua) {
            o.beginPath();
            o.moveTo(X, sa);
            o.lineTo(ea, da);
            o.lineTo(wa, ua);
            o.lineTo(X, sa);
            o.closePath()
        }

        function t(X, sa, ea, da, wa, ua, ha, Q) {
            o.beginPath();
            o.moveTo(X, sa);
            o.lineTo(ea, da);
            o.lineTo(wa, ua);
            o.lineTo(ha,
                    Q);
            o.lineTo(X, sa);
            o.closePath()
        }

        function ab(X, sa, ea, da) {
            if (L != sa)o.lineWidth = L = sa;
            if (V != ea)o.lineCap = V = ea;
            if (z != da)o.lineJoin = z = da;
            d(X);
            o.stroke();
            u.inflate(sa * 2)
        }

        function fb(X) {
            if (G != X)o.fillStyle = G = X;
            o.fill()
        }

        function Ma(X, sa, ea, da, wa, ua, ha, Q, Na, cb, Ua, bb, lb) {
            var Pa,ib;
            Pa = ha.width - 1;
            ib = ha.height - 1;
            Q *= Pa;
            Na *= ib;
            cb *= Pa;
            Ua *= ib;
            bb *= Pa;
            lb *= ib;
            ea -= X;
            da -= sa;
            wa -= X;
            ua -= sa;
            cb -= Q;
            Ua -= Na;
            bb -= Q;
            lb -= Na;
            Pa = cb * lb - bb * Ua;
            if (Pa != 0) {
                ib = 1 / Pa;
                Pa = (lb * ea - Ua * wa) * ib;
                Ua = (lb * da - Ua * ua) * ib;
                ea = (cb * wa - bb * ea) * ib;
                da = (cb * ua - bb * da) *
                        ib;
                X = X - Pa * Q - ea * Na;
                sa = sa - Ua * Q - da * Na;
                o.save();
                o.transform(Pa, Ua, ea, da, X, sa);
                o.clip();
                o.drawImage(ha, 0, 0);
                o.restore()
            }
        }

        function Va(X, sa, ea, da) {
            var wa = ~~(X.r * 255),ua = ~~(X.g * 255);
            X = ~~(X.b * 255);
            var ha = ~~(sa.r * 255),Q = ~~(sa.g * 255);
            sa = ~~(sa.b * 255);
            var Na = ~~(ea.r * 255),cb = ~~(ea.g * 255);
            ea = ~~(ea.b * 255);
            var Ua = ~~(da.r * 255),bb = ~~(da.g * 255);
            da = ~~(da.b * 255);
            W[0] = wa < 0 ? 0 : wa > 255 ? 255 : wa;
            W[1] = ua < 0 ? 0 : ua > 255 ? 255 : ua;
            W[2] = X < 0 ? 0 : X > 255 ? 255 : X;
            W[4] = ha < 0 ? 0 : ha > 255 ? 255 : ha;
            W[5] = Q < 0 ? 0 : Q > 255 ? 255 : Q;
            W[6] = sa < 0 ? 0 : sa > 255 ? 255 : sa;
            W[8] = Na <
                    0 ? 0 : Na > 255 ? 255 : Na;
            W[9] = cb < 0 ? 0 : cb > 255 ? 255 : cb;
            W[10] = ea < 0 ? 0 : ea > 255 ? 255 : ea;
            W[12] = Ua < 0 ? 0 : Ua > 255 ? 255 : Ua;
            W[13] = bb < 0 ? 0 : bb > 255 ? 255 : bb;
            W[14] = da < 0 ? 0 : da > 255 ? 255 : da;
            N.putImageData(O, 0, 0);
            za.drawImage(E, 0, 0);
            return U
        }

        function gb(X, sa, ea) {
            X = (X - sa) / (ea - sa);
            return X * X * (3 - 2 * X)
        }

        function hb(X) {
            X = (X + 1) * 0.5;
            return X < 0 ? 0 : X > 1 ? 1 : X
        }

        function Wa(X, sa) {
            var ea = sa.x - X.x,da = sa.y - X.y,wa = 1 / Math.sqrt(ea * ea + da * da);
            ea *= wa;
            da *= wa;
            sa.x += ea;
            sa.y += da;
            X.x -= ea;
            X.y -= da
        }

        var eb,Oa,Ja,La,T,Ra,Xa,Za;
        this.autoClear ? this.clear() : o.setTransform(1,
                0, 0, -1, m, p);
        f = g.projectScene(ma, Ha, this.sortElements);
        (x = ma.lights.length > 0) && db(ma);
        eb = 0;
        for (Oa = f.length; eb < Oa; eb++) {
            Ja = f[eb];
            u.empty();
            if (Ja instanceof THREE.RenderableParticle) {
                K = Ja;
                K.x *= m;
                K.y *= p;
                La = 0;
                for (T = Ja.materials.length; La < T;) {
                    Za = Ja.materials[La++];
                    Za.opacity != 0 && Ga(K, Ja, Za, ma)
                }
            } else if (Ja instanceof THREE.RenderableLine) {
                K = Ja.v1;
                P = Ja.v2;
                K.positionScreen.x *= m;
                K.positionScreen.y *= p;
                P.positionScreen.x *= m;
                P.positionScreen.y *= p;
                u.addPoint(K.positionScreen.x, K.positionScreen.y);
                u.addPoint(P.positionScreen.x,
                        P.positionScreen.y);
                if (n.instersects(u)) {
                    La = 0;
                    for (T = Ja.materials.length; La < T;) {
                        Za = Ja.materials[La++];
                        Za.opacity != 0 && Ia(K, P, Ja, Za, ma)
                    }
                }
            } else if (Ja instanceof THREE.RenderableFace3) {
                K = Ja.v1;
                P = Ja.v2;
                S = Ja.v3;
                K.positionScreen.x *= m;
                K.positionScreen.y *= p;
                P.positionScreen.x *= m;
                P.positionScreen.y *= p;
                S.positionScreen.x *= m;
                S.positionScreen.y *= p;
                if (Ja.overdraw) {
                    Wa(K.positionScreen, P.positionScreen);
                    Wa(P.positionScreen, S.positionScreen);
                    Wa(S.positionScreen, K.positionScreen)
                }
                u.add3Points(K.positionScreen.x, K.positionScreen.y,
                        P.positionScreen.x, P.positionScreen.y, S.positionScreen.x, S.positionScreen.y);
                if (n.instersects(u)) {
                    La = 0;
                    for (T = Ja.meshMaterials.length; La < T;) {
                        Za = Ja.meshMaterials[La++];
                        if (Za instanceof THREE.MeshFaceMaterial) {
                            Ra = 0;
                            for (Xa = Ja.faceMaterials.length; Ra < Xa;)(Za = Ja.faceMaterials[Ra++]) && Za.opacity != 0 && Qa(K, P, S, 0, 1, 2, Ja, Za, ma)
                        } else Za.opacity != 0 && Qa(K, P, S, 0, 1, 2, Ja, Za, ma)
                    }
                }
            } else if (Ja instanceof THREE.RenderableFace4) {
                K = Ja.v1;
                P = Ja.v2;
                S = Ja.v3;
                xa = Ja.v4;
                K.positionScreen.x *= m;
                K.positionScreen.y *= p;
                P.positionScreen.x *=
                        m;
                P.positionScreen.y *= p;
                S.positionScreen.x *= m;
                S.positionScreen.y *= p;
                xa.positionScreen.x *= m;
                xa.positionScreen.y *= p;
                ra.positionScreen.copy(P.positionScreen);
                pa.positionScreen.copy(xa.positionScreen);
                if (Ja.overdraw) {
                    Wa(K.positionScreen, P.positionScreen);
                    Wa(P.positionScreen, xa.positionScreen);
                    Wa(xa.positionScreen, K.positionScreen);
                    Wa(S.positionScreen, ra.positionScreen);
                    Wa(S.positionScreen, pa.positionScreen)
                }
                u.addPoint(K.positionScreen.x, K.positionScreen.y);
                u.addPoint(P.positionScreen.x, P.positionScreen.y);
                u.addPoint(S.positionScreen.x, S.positionScreen.y);
                u.addPoint(xa.positionScreen.x, xa.positionScreen.y);
                if (n.instersects(u)) {
                    La = 0;
                    for (T = Ja.meshMaterials.length; La < T;) {
                        Za = Ja.meshMaterials[La++];
                        if (Za instanceof THREE.MeshFaceMaterial) {
                            Ra = 0;
                            for (Xa = Ja.faceMaterials.length; Ra < Xa;)(Za = Ja.faceMaterials[Ra++]) && Za.opacity != 0 && D(K, P, S, xa, ra, pa, Ja, Za, ma)
                        } else Za.opacity != 0 && D(K, P, S, xa, ra, pa, Ja, Za, ma)
                    }
                }
            }
            C.addRectangle(u)
        }
        o.setTransform(1, 0, 0, 1, 0, 0)
    }
};
THREE.SVGRenderer = function() {
    function b(Y, qa, ta) {
        var va,ia,Z,na;
        va = 0;
        for (ia = Y.lights.length; va < ia; va++) {
            Z = Y.lights[va];
            if (Z instanceof THREE.DirectionalLight) {
                na = qa.normalWorld.dot(Z.position) * Z.intensity;
                if (na > 0) {
                    ta.r += Z.color.r * na;
                    ta.g += Z.color.g * na;
                    ta.b += Z.color.b * na
                }
            } else if (Z instanceof THREE.PointLight) {
                pa.sub(Z.position, qa.centroidWorld);
                pa.normalize();
                na = qa.normalWorld.dot(pa) * Z.intensity;
                if (na > 0) {
                    ta.r += Z.color.r * na;
                    ta.g += Z.color.g * na;
                    ta.b += Z.color.b * na
                }
            }
        }
    }

    function c(Y, qa, ta, va, ia, Z) {
        ca = f(ya++);
        ca.setAttribute("d", "M " + Y.positionScreen.x + " " + Y.positionScreen.y + " L " + qa.positionScreen.x + " " + qa.positionScreen.y + " L " + ta.positionScreen.x + "," + ta.positionScreen.y + "z");
        if (ia instanceof THREE.MeshBasicMaterial)z.__styleString = ia.color.__styleString; else if (ia instanceof THREE.MeshLambertMaterial)if (V) {
            K.r = P.r;
            K.g = P.g;
            K.b = P.b;
            b(Z, va, K);
            z.r = ia.color.r * K.r;
            z.g = ia.color.g * K.g;
            z.b = ia.color.b * K.b;
            z.updateStyleString()
        } else z.__styleString = ia.color.__styleString; else if (ia instanceof THREE.MeshDepthMaterial) {
            ra =
                    1 - ia.__2near / (ia.__farPlusNear - va.z * ia.__farMinusNear);
            z.setRGB(ra, ra, ra)
        } else ia instanceof THREE.MeshNormalMaterial && z.setRGB(g(va.normalWorld.x), g(va.normalWorld.y), g(va.normalWorld.z));
        ia.wireframe ? ca.setAttribute("style", "fill: none; stroke: " + z.__styleString + "; stroke-width: " + ia.wireframeLinewidth + "; stroke-opacity: " + ia.opacity + "; stroke-linecap: " + ia.wireframeLinecap + "; stroke-linejoin: " + ia.wireframeLinejoin) : ca.setAttribute("style", "fill: " + z.__styleString + "; fill-opacity: " + ia.opacity);
        k.appendChild(ca)
    }

    function d(Y, qa, ta, va, ia, Z, na) {
        ca = f(ya++);
        ca.setAttribute("d", "M " + Y.positionScreen.x + " " + Y.positionScreen.y + " L " + qa.positionScreen.x + " " + qa.positionScreen.y + " L " + ta.positionScreen.x + "," + ta.positionScreen.y + " L " + va.positionScreen.x + "," + va.positionScreen.y + "z");
        if (Z instanceof THREE.MeshBasicMaterial)z.__styleString = Z.color.__styleString; else if (Z instanceof THREE.MeshLambertMaterial)if (V) {
            K.r = P.r;
            K.g = P.g;
            K.b = P.b;
            b(na, ia, K);
            z.r = Z.color.r * K.r;
            z.g = Z.color.g * K.g;
            z.b = Z.color.b * K.b;
            z.updateStyleString()
        } else z.__styleString = Z.color.__styleString; else if (Z instanceof THREE.MeshDepthMaterial) {
            ra = 1 - Z.__2near / (Z.__farPlusNear - ia.z * Z.__farMinusNear);
            z.setRGB(ra, ra, ra)
        } else Z instanceof THREE.MeshNormalMaterial && z.setRGB(g(ia.normalWorld.x), g(ia.normalWorld.y), g(ia.normalWorld.z));
        Z.wireframe ? ca.setAttribute("style", "fill: none; stroke: " + z.__styleString + "; stroke-width: " + Z.wireframeLinewidth + "; stroke-opacity: " + Z.opacity + "; stroke-linecap: " + Z.wireframeLinecap + "; stroke-linejoin: " +
                Z.wireframeLinejoin) : ca.setAttribute("style", "fill: " + z.__styleString + "; fill-opacity: " + Z.opacity);
        k.appendChild(ca)
    }

    function f(Y) {
        if (e[Y] == null) {
            e[Y] = document.createElementNS("http://www.w3.org/2000/svg", "path");
            Ea == 0 && e[Y].setAttribute("shape-rendering", "crispEdges")
        }
        return e[Y]
    }

    function g(Y) {
        return Y < 0 ? Math.min((1 + Y) * 0.5, 0.5) : 0.5 + Math.min(Y * 0.5, 0.5)
    }

    var h = null,j = new THREE.Projector,k = document.createElementNS("http://www.w3.org/2000/svg", "svg"),m,p,o,w,y,v,A,F,G = new THREE.Rectangle,L = new THREE.Rectangle,
            V = !1,z = new THREE.Color(16777215),K = new THREE.Color(16777215),P = new THREE.Color(0),S = new THREE.Color(0),xa = new THREE.Color(0),ra,pa = new THREE.Vector3,e = [],fa = [],ca,ya,Fa,Ea = 1;
    this.domElement = k;
    this.autoClear = !0;
    this.sortObjects = !0;
    this.sortElements = !0;
    this.setQuality = function(Y) {
        switch (Y) {case "high":Ea = 1;break;case "low":Ea = 0
        }
    };
    this.setSize = function(Y, qa) {
        m = Y;
        p = qa;
        o = m / 2;
        w = p / 2;
        k.setAttribute("viewBox", -o + " " + -w + " " + m + " " + p);
        k.setAttribute("width", m);
        k.setAttribute("height", p);
        G.set(-o, -w, o, w)
    };
    this.clear =
            function() {
                for (; k.childNodes.length > 0;)k.removeChild(k.childNodes[0])
            };
    this.render = function(Y, qa) {
        var ta,va,ia,Z,na,Ba,ka,la;
        this.autoClear && this.clear();
        h = j.projectScene(Y, qa, this.sortElements);
        Fa = ya = 0;
        if (V = Y.lights.length > 0) {
            ka = Y.lights;
            P.setRGB(0, 0, 0);
            S.setRGB(0, 0, 0);
            xa.setRGB(0, 0, 0);
            ta = 0;
            for (va = ka.length; ta < va; ta++) {
                ia = ka[ta];
                Z = ia.color;
                if (ia instanceof THREE.AmbientLight) {
                    P.r += Z.r;
                    P.g += Z.g;
                    P.b += Z.b
                } else if (ia instanceof THREE.DirectionalLight) {
                    S.r += Z.r;
                    S.g += Z.g;
                    S.b += Z.b
                } else if (ia instanceof
                        THREE.PointLight) {
                    xa.r += Z.r;
                    xa.g += Z.g;
                    xa.b += Z.b
                }
            }
        }
        ta = 0;
        for (va = h.length; ta < va; ta++) {
            ka = h[ta];
            L.empty();
            if (ka instanceof THREE.RenderableParticle) {
                y = ka;
                y.x *= o;
                y.y *= -w;
                ia = 0;
                for (Z = ka.materials.length; ia < Z;)ia++
            } else if (ka instanceof THREE.RenderableLine) {
                y = ka.v1;
                v = ka.v2;
                y.positionScreen.x *= o;
                y.positionScreen.y *= -w;
                v.positionScreen.x *= o;
                v.positionScreen.y *= -w;
                L.addPoint(y.positionScreen.x, y.positionScreen.y);
                L.addPoint(v.positionScreen.x, v.positionScreen.y);
                if (G.instersects(L)) {
                    ia = 0;
                    for (Z = ka.materials.length; ia <
                            Z;)if ((la = ka.materials[ia++]) && la.opacity != 0) {
                        na = y;
                        Ba = v;
                        var Da = Fa++;
                        if (fa[Da] == null) {
                            fa[Da] = document.createElementNS("http://www.w3.org/2000/svg", "line");
                            Ea == 0 && fa[Da].setAttribute("shape-rendering", "crispEdges")
                        }
                        ca = fa[Da];
                        ca.setAttribute("x1", na.positionScreen.x);
                        ca.setAttribute("y1", na.positionScreen.y);
                        ca.setAttribute("x2", Ba.positionScreen.x);
                        ca.setAttribute("y2", Ba.positionScreen.y);
                        if (la instanceof THREE.LineBasicMaterial) {
                            z.__styleString = la.color.__styleString;
                            ca.setAttribute("style", "fill: none; stroke: " +
                                    z.__styleString + "; stroke-width: " + la.linewidth + "; stroke-opacity: " + la.opacity + "; stroke-linecap: " + la.linecap + "; stroke-linejoin: " + la.linejoin);
                            k.appendChild(ca)
                        }
                    }
                }
            } else if (ka instanceof THREE.RenderableFace3) {
                y = ka.v1;
                v = ka.v2;
                A = ka.v3;
                y.positionScreen.x *= o;
                y.positionScreen.y *= -w;
                v.positionScreen.x *= o;
                v.positionScreen.y *= -w;
                A.positionScreen.x *= o;
                A.positionScreen.y *= -w;
                L.addPoint(y.positionScreen.x, y.positionScreen.y);
                L.addPoint(v.positionScreen.x, v.positionScreen.y);
                L.addPoint(A.positionScreen.x,
                        A.positionScreen.y);
                if (G.instersects(L)) {
                    ia = 0;
                    for (Z = ka.meshMaterials.length; ia < Z;) {
                        la = ka.meshMaterials[ia++];
                        if (la instanceof THREE.MeshFaceMaterial) {
                            na = 0;
                            for (Ba = ka.faceMaterials.length; na < Ba;)(la = ka.faceMaterials[na++]) && la.opacity != 0 && c(y, v, A, ka, la, Y)
                        } else la && la.opacity != 0 && c(y, v, A, ka, la, Y)
                    }
                }
            } else if (ka instanceof THREE.RenderableFace4) {
                y = ka.v1;
                v = ka.v2;
                A = ka.v3;
                F = ka.v4;
                y.positionScreen.x *= o;
                y.positionScreen.y *= -w;
                v.positionScreen.x *= o;
                v.positionScreen.y *= -w;
                A.positionScreen.x *= o;
                A.positionScreen.y *=
                        -w;
                F.positionScreen.x *= o;
                F.positionScreen.y *= -w;
                L.addPoint(y.positionScreen.x, y.positionScreen.y);
                L.addPoint(v.positionScreen.x, v.positionScreen.y);
                L.addPoint(A.positionScreen.x, A.positionScreen.y);
                L.addPoint(F.positionScreen.x, F.positionScreen.y);
                if (G.instersects(L)) {
                    ia = 0;
                    for (Z = ka.meshMaterials.length; ia < Z;) {
                        la = ka.meshMaterials[ia++];
                        if (la instanceof THREE.MeshFaceMaterial) {
                            na = 0;
                            for (Ba = ka.faceMaterials.length; na < Ba;)(la = ka.faceMaterials[na++]) && la.opacity != 0 && d(y, v, A, F, ka, la, Y)
                        } else la && la.opacity !=
                                0 && d(y, v, A, F, ka, la, Y)
                    }
                }
            }
        }
    }
};
THREE.ShaderChunk = {fog_pars_fragment:"#ifdef USE_FOG\nuniform vec3 fogColor;\n#ifdef FOG_EXP2\nuniform float fogDensity;\n#else\nuniform float fogNear;\nuniform float fogFar;\n#endif\n#endif",fog_fragment:"#ifdef USE_FOG\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n#ifdef FOG_EXP2\nconst float LOG2 = 1.442695;\nfloat fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n#else\nfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n#endif\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n#endif",envmap_pars_fragment:"#ifdef USE_ENVMAP\nvarying vec3 vReflect;\nuniform float reflectivity;\nuniform samplerCube envMap;\nuniform int combine;\n#endif",
    envmap_fragment:"#ifdef USE_ENVMAP\nvec4 cubeColor = textureCube( envMap, vec3( -vReflect.x, vReflect.yz ) );\nif ( combine == 1 ) {\ngl_FragColor = vec4( mix( gl_FragColor.xyz, cubeColor.xyz, reflectivity ), opacity );\n} else {\ngl_FragColor = gl_FragColor * cubeColor;\n}\n#endif",envmap_pars_vertex:"#ifdef USE_ENVMAP\nvarying vec3 vReflect;\nuniform float refractionRatio;\nuniform bool useRefract;\n#endif",envmap_vertex:"#ifdef USE_ENVMAP\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvec3 nWorld = mat3( objectMatrix[0].xyz, objectMatrix[1].xyz, objectMatrix[2].xyz ) * normal;\nif ( useRefract ) {\nvReflect = refract( normalize( mPosition.xyz - cameraPosition ), normalize( nWorld.xyz ), refractionRatio );\n} else {\nvReflect = reflect( normalize( mPosition.xyz - cameraPosition ), normalize( nWorld.xyz ) );\n}\n#endif",
    map_particle_pars_fragment:"#ifdef USE_MAP\nuniform sampler2D map;\n#endif",map_particle_fragment:"#ifdef USE_MAP\ngl_FragColor = gl_FragColor * texture2D( map, gl_PointCoord );\n#endif",map_pars_fragment:"#ifdef USE_MAP\nvarying vec2 vUv;\nuniform sampler2D map;\n#endif",map_pars_vertex:"#ifdef USE_MAP\nvarying vec2 vUv;\n#endif",map_fragment:"#ifdef USE_MAP\ngl_FragColor = gl_FragColor * texture2D( map, vUv );\n#endif",map_vertex:"#ifdef USE_MAP\nvUv = uv;\n#endif",lightmap_pars_fragment:"#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\nuniform sampler2D lightMap;\n#endif",
    lightmap_pars_vertex:"#ifdef USE_LIGHTMAP\nvarying vec2 vUv2;\n#endif",lightmap_fragment:"#ifdef USE_LIGHTMAP\ngl_FragColor = gl_FragColor * texture2D( lightMap, vUv2 );\n#endif",lightmap_vertex:"#ifdef USE_LIGHTMAP\nvUv2 = uv2;\n#endif",lights_pars_vertex:"uniform bool enableLighting;\nuniform vec3 ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nuniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\nuniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\nuniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n#ifdef PHONG\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\n#endif",
    lights_vertex:"if ( !enableLighting ) {\nvLightWeighting = vec3( 1.0 );\n} else {\nvLightWeighting = ambientLightColor;\n#if MAX_DIR_LIGHTS > 0\nfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nfloat directionalLightWeighting = max( dot( transformedNormal, normalize( lDirection.xyz ) ), 0.0 );\nvLightWeighting += directionalLightColor[ i ] * directionalLightWeighting;\n}\n#endif\n#if MAX_POINT_LIGHTS > 0\nfor( int i = 0; i < MAX_POINT_LIGHTS; i++ ) {\nvec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );\nvec3 lVector = lPosition.xyz - mvPosition.xyz;\nfloat lDistance = 1.0;\nif ( pointLightDistance[ i ] > 0.0 )\nlDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );\nlVector = normalize( lVector );\nfloat pointLightWeighting = max( dot( transformedNormal, lVector ), 0.0 );\nvLightWeighting += pointLightColor[ i ] * pointLightWeighting * lDistance;\n#ifdef PHONG\nvPointLight[ i ] = vec4( lVector, lDistance );\n#endif\n}\n#endif\n}",
    lights_pars_fragment:"#if MAX_DIR_LIGHTS > 0\nuniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n#endif\n#if MAX_POINT_LIGHTS > 0\nvarying vec4 vPointLight[ MAX_POINT_LIGHTS ];\n#endif\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;",lights_fragment:"vec3 normal = normalize( vNormal );\nvec3 viewPosition = normalize( vViewPosition );\nvec4 mColor = vec4( diffuse, opacity );\nvec4 mSpecular = vec4( specular, opacity );\n#if MAX_POINT_LIGHTS > 0\nvec4 pointDiffuse  = vec4( 0.0 );\nvec4 pointSpecular = vec4( 0.0 );\nfor ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\nvec3 pointVector = normalize( vPointLight[ i ].xyz );\nvec3 pointHalfVector = normalize( vPointLight[ i ].xyz + vViewPosition );\nfloat pointDistance = vPointLight[ i ].w;\nfloat pointDotNormalHalf = dot( normal, pointHalfVector );\nfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\nfloat pointSpecularWeight = 0.0;\nif ( pointDotNormalHalf >= 0.0 )\npointSpecularWeight = pow( pointDotNormalHalf, shininess );\npointDiffuse  += mColor * pointDiffuseWeight * pointDistance;\npointSpecular += mSpecular * pointSpecularWeight * pointDistance;\n}\n#endif\n#if MAX_DIR_LIGHTS > 0\nvec4 dirDiffuse  = vec4( 0.0 );\nvec4 dirSpecular = vec4( 0.0 );\nfor( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {\nvec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nvec3 dirHalfVector = normalize( lDirection.xyz + vViewPosition );\nfloat dirDotNormalHalf = dot( normal, dirHalfVector );\nfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\nfloat dirSpecularWeight = 0.0;\nif ( dirDotNormalHalf >= 0.0 )\ndirSpecularWeight = pow( dirDotNormalHalf, shininess );\ndirDiffuse  += mColor * dirDiffuseWeight;\ndirSpecular += mSpecular * dirSpecularWeight;\n}\n#endif\nvec4 totalLight = vec4( ambient, opacity );\n#if MAX_DIR_LIGHTS > 0\ntotalLight += dirDiffuse + dirSpecular;\n#endif\n#if MAX_POINT_LIGHTS > 0\ntotalLight += pointDiffuse + pointSpecular;\n#endif\ngl_FragColor = gl_FragColor * totalLight;",
    color_pars_fragment:"#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",color_fragment:"#ifdef USE_COLOR\ngl_FragColor = gl_FragColor * vec4( vColor, opacity );\n#endif",color_pars_vertex:"#ifdef USE_COLOR\nvarying vec3 vColor;\n#endif",color_vertex:"#ifdef USE_COLOR\nvColor = color;\n#endif",skinning_pars_vertex:"#ifdef USE_SKINNING\nuniform mat4 boneGlobalMatrices[ MAX_BONES ];\n#endif",skinning_vertex:"#ifdef USE_SKINNING\ngl_Position  = ( boneGlobalMatrices[ int( skinIndex.x ) ] * skinVertexA ) * skinWeight.x;\ngl_Position += ( boneGlobalMatrices[ int( skinIndex.y ) ] * skinVertexB ) * skinWeight.y;\ngl_Position  = projectionMatrix * viewMatrix * objectMatrix * gl_Position;\n#endif",
    morphtarget_pars_vertex:"#ifdef USE_MORPHTARGETS\nuniform float morphTargetInfluences[ 8 ];\n#endif",morphtarget_vertex:"#ifdef USE_MORPHTARGETS\nvec3 morphed = vec3( 0.0, 0.0, 0.0 );\nmorphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\nmorphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\nmorphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\nmorphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\nmorphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\nmorphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\nmorphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\nmorphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\nmorphed += position;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( morphed, 1.0 );\n#endif",
    default_vertex:"#ifndef USE_MORPHTARGETS\n#ifndef USE_SKINNING\ngl_Position = projectionMatrix * mvPosition;\n#endif\n#endif"};
THREE.UniformsLib = {common:{diffuse:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"f",value:1},map:{type:"t",value:0,texture:null},lightMap:{type:"t",value:2,texture:null},envMap:{type:"t",value:1,texture:null},useRefract:{type:"i",value:0},reflectivity:{type:"f",value:1},refractionRatio:{type:"f",value:0.98},combine:{type:"i",value:0},fogDensity:{type:"f",value:2.5E-4},fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},fogColor:{type:"c",value:new THREE.Color(16777215)},morphTargetInfluences:{type:"f",
    value:0}},lights:{enableLighting:{type:"i",value:1},ambientLightColor:{type:"fv",value:[]},directionalLightDirection:{type:"fv",value:[]},directionalLightColor:{type:"fv",value:[]},pointLightColor:{type:"fv",value:[]},pointLightPosition:{type:"fv",value:[]},pointLightDistance:{type:"fv1",value:[]}},particle:{psColor:{type:"c",value:new THREE.Color(15658734)},opacity:{type:"f",value:1},size:{type:"f",value:1},scale:{type:"f",value:1},map:{type:"t",value:0,texture:null},fogDensity:{type:"f",value:2.5E-4},
    fogNear:{type:"f",value:1},fogFar:{type:"f",value:2E3},fogColor:{type:"c",value:new THREE.Color(16777215)}}};
THREE.ShaderLib = {lensFlareVertexTexture:{vertexShader:"uniform \tvec3 \tscreenPosition;\nuniform\tvec2\tscale;\nuniform\tfloat\trotation;\nuniform    int     renderType;\nuniform\tsampler2D\tocclusionMap;\nattribute \tvec2 \tposition;\nattribute  vec2\tUV;\nvarying\tvec2\tvUV;\nvarying\tfloat\tvVisibility;\nvoid main(void)\n{\nvUV = UV;\nvec2 pos = position;\nif( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 )) +\ntexture2D( occlusionMap, vec2( 0.5, 0.1 )) +\ntexture2D( occlusionMap, vec2( 0.9, 0.1 )) +\ntexture2D( occlusionMap, vec2( 0.9, 0.5 )) +\ntexture2D( occlusionMap, vec2( 0.9, 0.9 )) +\ntexture2D( occlusionMap, vec2( 0.5, 0.9 )) +\ntexture2D( occlusionMap, vec2( 0.1, 0.9 )) +\ntexture2D( occlusionMap, vec2( 0.1, 0.5 )) +\ntexture2D( occlusionMap, vec2( 0.5, 0.5 ));\nvVisibility = ( 1.0 - visibility.a / 9.0 );\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4(( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",fragmentShader:"#ifdef GL_ES\nprecision highp float;\n#endif\nuniform\tsampler2D\tmap;\nuniform\tfloat\t\topacity;\nuniform    int         renderType;\nvarying\tvec2\t\tvUV;\nvarying\tfloat\t\tvVisibility;\nvoid main( void )\n{\nif( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 color = texture2D( map, vUV );\ncolor.a *= opacity * vVisibility;\ngl_FragColor = color;\n}\n}"},
    lensFlare:{vertexShader:"uniform \tvec3 \tscreenPosition;\nuniform\tvec2\tscale;\nuniform\tfloat\trotation;\nuniform    int     renderType;\nattribute \tvec2 \tposition;\nattribute  vec2\tUV;\nvarying\tvec2\tvUV;\nvoid main(void)\n{\nvUV = UV;\nvec2 pos = position;\nif( renderType == 2 ) {\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4(( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
        fragmentShader:"#ifdef GL_ES\nprecision highp float;\n#endif\nuniform\tsampler2D\tmap;\nuniform\tsampler2D\tocclusionMap;\nuniform\tfloat\t\topacity;\nuniform    int         renderType;\nvarying\tvec2\t\tvUV;\nvoid main( void )\n{\nif( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 )).a +\ntexture2D( occlusionMap, vec2( 0.9, 0.5 )).a +\ntexture2D( occlusionMap, vec2( 0.5, 0.9 )).a +\ntexture2D( occlusionMap, vec2( 0.1, 0.5 )).a;\nvisibility = ( 1.0 - visibility / 4.0 );\nvec4 color = texture2D( map, vUV );\ncolor.a *= opacity * visibility;\ngl_FragColor = color;\n}\n}"},
    sprite:{vertexShader:"uniform \tvec3 \tscreenPosition;\nuniform\tvec2\tscale;\nuniform\tfloat\trotation;\nattribute \tvec2 \tposition;\nattribute  vec2\tUV;\nvarying\tvec2\tvUV;\nvoid main(void)\n{\nvUV = UV;\nvec2 pos;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\ngl_Position = vec4(( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",fragmentShader:"#ifdef GL_ES\nprecision highp float;\n#endif\nuniform\tsampler2D\tmap;\nuniform\tfloat\t\topacity;\nvarying\tvec2\t\tvUV;\nvoid main( void )\n{\nvec4 color = texture2D( map, vUV );\ncolor.a *= opacity;\ngl_FragColor = color;\n}"},
    shadowPost:{vertexShader:"uniform \tmat4 \tprojectionMatrix;\nattribute \tvec3 \tposition;\nvoid main(void)\n{\ngl_Position = projectionMatrix * vec4( position, 1.0 );\n}",fragmentShader:"#ifdef GL_ES\nprecision highp float;\n#endif\nuniform \tfloat \tdarkness;\nvoid main( void )\n{\ngl_FragColor = vec4( 0, 0, 0, darkness );\n}"},shadowVolumeDynamic:{uniforms:{directionalLightDirection:{type:"fv",value:[]}},vertexShader:"uniform \tvec3 \tdirectionalLightDirection;\nvoid main() {\nvec4 pos      = objectMatrix * vec4( position, 1.0 );\nvec3 norm     = mat3( objectMatrix[0].xyz, objectMatrix[1].xyz, objectMatrix[2].xyz ) * normal;\nvec4 extruded = vec4( directionalLightDirection * 5000.0 * step( 0.0, dot( directionalLightDirection, norm )), 0.0 );\ngl_Position   = projectionMatrix * viewMatrix * ( pos + extruded );\n}",
        fragmentShader:"void main() {\ngl_FragColor = vec4( 1, 1, 1, 1 );\n}"},depth:{uniforms:{mNear:{type:"f",value:1},mFar:{type:"f",value:2E3},opacity:{type:"f",value:1}},fragmentShader:"uniform float mNear;\nuniform float mFar;\nuniform float opacity;\nvoid main() {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat color = 1.0 - smoothstep( mNear, mFar, depth );\ngl_FragColor = vec4( vec3( color ), opacity );\n}",vertexShader:"void main() {\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}"},
    normal:{uniforms:{opacity:{type:"f",value:1}},fragmentShader:"uniform float opacity;\nvarying vec3 vNormal;\nvoid main() {\ngl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );\n}",vertexShader:"varying vec3 vNormal;\nvoid main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvNormal = normalize( normalMatrix * normal );\ngl_Position = projectionMatrix * mvPosition;\n}"},basic:{uniforms:THREE.UniformsLib.common,fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;",
        THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,"void main() {\ngl_FragColor = vec4( diffuse, opacity );",THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n"),vertexShader:[THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,
        THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,"void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.color_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.default_vertex,"}"].join("\n")},lambert:{uniforms:Uniforms.merge([THREE.UniformsLib.common,
        THREE.UniformsLib.lights]),fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;\nvarying vec3 vLightWeighting;",THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,"void main() {\ngl_FragColor = vec4( diffuse, opacity );\ngl_FragColor = gl_FragColor * vec4( vLightWeighting, 1.0 );",THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.color_fragment,
        THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n"),vertexShader:["varying vec3 vLightWeighting;",THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,"void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,
        THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.color_vertex,"vec3 transformedNormal = normalize( normalMatrix * normal );",THREE.ShaderChunk.lights_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.default_vertex,"}"].join("\n")},phong:{uniforms:Uniforms.merge([THREE.UniformsLib.common,THREE.UniformsLib.lights,{ambient:{type:"c",value:new THREE.Color(328965)},specular:{type:"c",value:new THREE.Color(1118481)},shininess:{type:"f",value:30}}]),fragmentShader:["uniform vec3 diffuse;\nuniform float opacity;\nuniform vec3 ambient;\nuniform vec3 specular;\nuniform float shininess;\nvarying vec3 vLightWeighting;",
        THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_pars_fragment,THREE.ShaderChunk.lightmap_pars_fragment,THREE.ShaderChunk.envmap_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,THREE.ShaderChunk.lights_pars_fragment,"void main() {\ngl_FragColor = vec4( vLightWeighting, 1.0 );",THREE.ShaderChunk.lights_fragment,THREE.ShaderChunk.map_fragment,THREE.ShaderChunk.lightmap_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.envmap_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n"),
        vertexShader:["#define PHONG\nvarying vec3 vLightWeighting;\nvarying vec3 vViewPosition;\nvarying vec3 vNormal;",THREE.ShaderChunk.map_pars_vertex,THREE.ShaderChunk.lightmap_pars_vertex,THREE.ShaderChunk.envmap_pars_vertex,THREE.ShaderChunk.lights_pars_vertex,THREE.ShaderChunk.color_pars_vertex,THREE.ShaderChunk.skinning_pars_vertex,THREE.ShaderChunk.morphtarget_pars_vertex,"void main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",THREE.ShaderChunk.map_vertex,THREE.ShaderChunk.lightmap_vertex,
            THREE.ShaderChunk.envmap_vertex,THREE.ShaderChunk.color_vertex,"#ifndef USE_ENVMAP\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\n#endif\nvViewPosition = cameraPosition - mPosition.xyz;\nvec3 transformedNormal = normalize( normalMatrix * normal );\nvNormal = transformedNormal;",THREE.ShaderChunk.lights_vertex,THREE.ShaderChunk.skinning_vertex,THREE.ShaderChunk.morphtarget_vertex,THREE.ShaderChunk.default_vertex,"}"].join("\n")},particle_basic:{uniforms:THREE.UniformsLib.particle,fragmentShader:["uniform vec3 psColor;\nuniform float opacity;",
        THREE.ShaderChunk.color_pars_fragment,THREE.ShaderChunk.map_particle_pars_fragment,THREE.ShaderChunk.fog_pars_fragment,"void main() {\ngl_FragColor = vec4( psColor, opacity );",THREE.ShaderChunk.map_particle_fragment,THREE.ShaderChunk.color_fragment,THREE.ShaderChunk.fog_fragment,"}"].join("\n"),vertexShader:["uniform float size;\nuniform float scale;",THREE.ShaderChunk.color_pars_vertex,"void main() {",THREE.ShaderChunk.color_vertex,"vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n#ifdef USE_SIZEATTENUATION\ngl_PointSize = size * ( scale / length( mvPosition.xyz ) );\n#else\ngl_PointSize = size;\n#endif\ngl_Position = projectionMatrix * mvPosition;\n}"].join("\n")}};
THREE.WebGLRenderer = function(b) {
    this.getGLContext = function() { return e; }
    function c(n, C, u) {
        var x,B,J,M = n.vertices,H = M.length,I = n.colors,E = I.length,N = n.__vertexArray,O = n.__colorArray,W = n.__sortArray,U = n.__dirtyVertices,za = n.__dirtyColors;
        if (u.sortParticles) {
            Da.multiplySelf(u.matrixWorld);
            for (x = 0; x < H; x++) {
                B = M[x].position;
                Ya.copy(B);
                Da.multiplyVector3(Ya);
                W[x] = [Ya.z,x]
            }
            W.sort(function(Ka, ma) {
                return ma[0] - Ka[0]
            });
            for (x = 0; x < H; x++) {
                B = M[W[x][1]].position;
                J = x * 3;
                N[J] = B.x;
                N[J + 1] = B.y;
                N[J + 2] = B.z
            }
            for (x = 0; x < E; x++) {
                J = x * 3;
                color = I[W[x][1]];
                O[J] = color.r;
                O[J + 1] = color.g;
                O[J + 2] = color.b
            }
        } else {
            if (U)for (x = 0; x < H; x++) {
                B = M[x].position;
                J = x * 3;
                N[J] = B.x;
                N[J + 1] = B.y;
                N[J + 2] = B.z
            }
            if (za)for (x = 0; x < E; x++) {
                color = I[x];
                J = x * 3;
                O[J] = color.r;
                O[J + 1] = color.g;
                O[J + 2] = color.b
            }
        }
        if (U || u.sortParticles) {
            e.bindBuffer(e.ARRAY_BUFFER, n.__webglVertexBuffer);
            e.bufferData(e.ARRAY_BUFFER, N, C)
        }
        if (za || u.sortParticles) {
            e.bindBuffer(e.ARRAY_BUFFER, n.__webglColorBuffer);
            e.bufferData(e.ARRAY_BUFFER, O, C)
        }
    }

    function d(n, C, u, x, B) {
        x.program || Y.initMaterial(x, C, u, B);
        var J = x.program,M = J.uniforms,H = x.uniforms;
        if (J != ya) {
            e.useProgram(J);
            ya = J
        }
        e.uniformMatrix4fv(M.projectionMatrix, !1, Sa);
        if (u && (x instanceof THREE.MeshBasicMaterial || x instanceof THREE.MeshLambertMaterial || x instanceof THREE.MeshPhongMaterial || x instanceof THREE.LineBasicMaterial || x instanceof THREE.ParticleBasicMaterial || x.fog)) {
            H.fogColor.value.setHex(u.color.hex);
            if (u instanceof THREE.Fog) {
                H.fogNear.value = u.near;
                H.fogFar.value = u.far
            } else if (u instanceof THREE.FogExp2)H.fogDensity.value = u.density
        }
        if (x instanceof THREE.MeshPhongMaterial || x instanceof
                THREE.MeshLambertMaterial || x.lights) {
            var I,E,N = 0,O = 0,W = 0,U,za,Ka,ma,Ha = Ta,db = Ha.directional.colors,Aa = Ha.directional.positions,Ga = Ha.point.colors,Ia = Ha.point.positions,Qa = Ha.point.distances,D = 0,$ = 0;
            u = E = ma = 0;
            for (I = C.length; u < I; u++) {
                E = C[u];
                U = E.color;
                za = E.position;
                Ka = E.intensity;
                ma = E.distance;
                if (E instanceof THREE.AmbientLight) {
                    N += U.r;
                    O += U.g;
                    W += U.b
                } else if (E instanceof THREE.DirectionalLight) {
                    ma = D * 3;
                    db[ma] = U.r * Ka;
                    db[ma + 1] = U.g * Ka;
                    db[ma + 2] = U.b * Ka;
                    Aa[ma] = za.x;
                    Aa[ma + 1] = za.y;
                    Aa[ma + 2] = za.z;
                    D += 1
                } else if (E instanceof
                        THREE.PointLight) {
                    E = $ * 3;
                    Ga[E] = U.r * Ka;
                    Ga[E + 1] = U.g * Ka;
                    Ga[E + 2] = U.b * Ka;
                    Ia[E] = za.x;
                    Ia[E + 1] = za.y;
                    Ia[E + 2] = za.z;
                    Qa[$] = ma;
                    $ += 1
                }
            }
            for (u = D * 3; u < db.length; u++)db[u] = 0;
            for (u = $ * 3; u < Ga.length; u++)Ga[u] = 0;
            Ha.point.length = $;
            Ha.directional.length = D;
            Ha.ambient[0] = N;
            Ha.ambient[1] = O;
            Ha.ambient[2] = W;
            u = Ta;
            H.enableLighting.value = u.directional.length + u.point.length;
            H.ambientLightColor.value = u.ambient;
            H.directionalLightColor.value = u.directional.colors;
            H.directionalLightDirection.value = u.directional.positions;
            H.pointLightColor.value =
                    u.point.colors;
            H.pointLightPosition.value = u.point.positions;
            H.pointLightDistance.value = u.point.distances
        }
        if (x instanceof THREE.MeshBasicMaterial || x instanceof THREE.MeshLambertMaterial || x instanceof THREE.MeshPhongMaterial) {
            H.diffuse.value.setRGB(x.color.r, x.color.g, x.color.b);
            H.opacity.value = x.opacity;
            H.map.texture = x.map;
            H.lightMap.texture = x.lightMap;
            H.envMap.texture = x.envMap;
            H.reflectivity.value = x.reflectivity;
            H.refractionRatio.value = x.refractionRatio;
            H.combine.value = x.combine;
            H.useRefract.value =
                    x.envMap && x.envMap.mapping instanceof THREE.CubeRefractionMapping
        }
        if (x instanceof THREE.LineBasicMaterial) {
            H.diffuse.value.setRGB(x.color.r, x.color.g, x.color.b);
            H.opacity.value = x.opacity
        } else if (x instanceof THREE.ParticleBasicMaterial) {
            H.psColor.value.setRGB(x.color.r, x.color.g, x.color.b);
            H.opacity.value = x.opacity;
            H.size.value = x.size;
            H.scale.value = fa.height / 2;
            H.map.texture = x.map
        } else if (x instanceof THREE.MeshPhongMaterial) {
            H.ambient.value.setRGB(x.ambient.r, x.ambient.g, x.ambient.b);
            H.specular.value.setRGB(x.specular.r,
                    x.specular.g, x.specular.b);
            H.shininess.value = x.shininess
        } else if (x instanceof THREE.MeshDepthMaterial) {
            H.mNear.value = n.near;
            H.mFar.value = n.far;
            H.opacity.value = x.opacity
        } else if (x instanceof THREE.MeshNormalMaterial)H.opacity.value = x.opacity;
        for (var t in H)if (O = J.uniforms[t]) {
            I = H[t];
            N = I.type;
            u = I.value;
            if (N == "i")e.uniform1i(O, u); else if (N == "f")e.uniform1f(O, u); else if (N == "fv1")e.uniform1fv(O, u); else if (N == "fv")e.uniform3fv(O, u); else if (N == "v2")e.uniform2f(O, u.x, u.y); else if (N == "v3")e.uniform3f(O, u.x,
                    u.y, u.z); else if (N == "v4")e.uniform4f(O, u.x, u.y, u.z, u.w); else if (N == "c")e.uniform3f(O, u.r, u.g, u.b); else if (N == "t") {
                e.uniform1i(O, u);
                if (I = I.texture)if (I.image instanceof Array && I.image.length == 6) {
                    if (I.image.length == 6) {
                        if (I.needsUpdate) {
                            if (I.__webglInit) {
                                e.bindTexture(e.TEXTURE_CUBE_MAP, I.image.__webglTextureCube);
                                for (N = 0; N < 6; ++N)e.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + N, 0, 0, 0, e.RGBA, e.UNSIGNED_BYTE, I.image[N])
                            } else {
                                I.image.__webglTextureCube = e.createTexture();
                                e.bindTexture(e.TEXTURE_CUBE_MAP,
                                        I.image.__webglTextureCube);
                                for (N = 0; N < 6; ++N)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + N, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, I.image[N]);
                                I.__webglInit = !0
                            }
                            K(e.TEXTURE_CUBE_MAP, I, I.image[0]);
                            e.bindTexture(e.TEXTURE_CUBE_MAP, null);
                            I.needsUpdate = !1
                        }
                        e.activeTexture(e.TEXTURE0 + u);
                        e.bindTexture(e.TEXTURE_CUBE_MAP, I.image.__webglTextureCube)
                    }
                } else P(I, u)
            }
        }
        e.uniformMatrix4fv(M.modelViewMatrix, !1, B._modelViewMatrixArray);
        e.uniformMatrix3fv(M.normalMatrix, !1, B._normalMatrixArray);
        (x instanceof THREE.MeshShaderMaterial ||
                x instanceof THREE.MeshPhongMaterial || x.envMap) && e.uniform3f(M.cameraPosition, n.position.x, n.position.y, n.position.z);
        (x instanceof THREE.MeshShaderMaterial || x.envMap || x.skinning) && e.uniformMatrix4fv(M.objectMatrix, !1, B._objectMatrixArray);
        (x instanceof THREE.MeshPhongMaterial || x instanceof THREE.MeshLambertMaterial || x instanceof THREE.MeshShaderMaterial || x.skinning) && e.uniformMatrix4fv(M.viewMatrix, !1, $a);
        if (x instanceof THREE.ShadowVolumeDynamicMaterial) {
            n = H.directionalLightDirection.value;
            n[0] =
                    -C.position.x;
            n[1] = -C.position.y;
            n[2] = -C.position.z;
            e.uniform3fv(M.directionalLightDirection, n);
            e.uniformMatrix4fv(M.objectMatrix, !1, B._objectMatrixArray);
            e.uniformMatrix4fv(M.viewMatrix, !1, $a)
        }
        if (x.skinning) {
            e.uniformMatrix4fv(M.cameraInverseMatrix, !1, $a);
            e.uniformMatrix4fv(M.boneGlobalMatrices, !1, B.boneMatrices)
        }
        return J
    }

    function f(n, C, u, x, B, J) {
        if (x.opacity != 0) {
            var M;
            n = d(n, C, u, x, J).attributes;
            if (x.morphTargets) {
                C = x.program.attributes;
                J.morphTargetBase !== -1 ? e.bindBuffer(e.ARRAY_BUFFER, B.__webglMorphTargetsBuffers[J.morphTargetBase]) :
                        e.bindBuffer(e.ARRAY_BUFFER, B.__webglVertexBuffer);
                e.vertexAttribPointer(C.position, 3, e.FLOAT, !1, 0, 0);
                if (J.morphTargetForcedOrder.length) {
                    u = 0;
                    for (var H = J.morphTargetForcedOrder,I = J.morphTargetInfluences; u < x.numSupportedMorphTargets && u < H.length;) {
                        e.bindBuffer(e.ARRAY_BUFFER, B.__webglMorphTargetsBuffers[H[u]]);
                        e.vertexAttribPointer(C["morphTarget" + u], 3, e.FLOAT, !1, 0, 0);
                        J.__webglMorphTargetInfluences[u] = I[H[u]];
                        u++
                    }
                } else {
                    H = [];
                    var E = -1,N = 0;
                    I = J.morphTargetInfluences;
                    var O,W = I.length;
                    u = 0;
                    for (J.morphTargetBase !==
                                 -1 && (H[J.morphTargetBase] = !0); u < x.numSupportedMorphTargets;) {
                        for (O = 0; O < W; O++)if (!H[O] && I[O] > E) {
                            N = O;
                            E = I[N]
                        }
                        e.bindBuffer(e.ARRAY_BUFFER, B.__webglMorphTargetsBuffers[N]);
                        e.vertexAttribPointer(C["morphTarget" + u], 3, e.FLOAT, !1, 0, 0);
                        J.__webglMorphTargetInfluences[u] = E;
                        H[N] = 1;
                        E = -1;
                        u++
                    }
                }
                e.uniform1fv(x.program.uniforms.morphTargetInfluences, J.__webglMorphTargetInfluences)
            } else {
                e.bindBuffer(e.ARRAY_BUFFER, B.__webglVertexBuffer);
                e.vertexAttribPointer(n.position, 3, e.FLOAT, !1, 0, 0)
            }
            if (B.__webglCustomAttributes)for (M in B.__webglCustomAttributes)if (n[M] >=
                    0) {
                C = B.__webglCustomAttributes[M];
                e.bindBuffer(e.ARRAY_BUFFER, C.buffer);
                e.vertexAttribPointer(n[M], C.size, e.FLOAT, !1, 0, 0)
            }
            if (n.color >= 0) {
                e.bindBuffer(e.ARRAY_BUFFER, B.__webglColorBuffer);
                e.vertexAttribPointer(n.color, 3, e.FLOAT, !1, 0, 0)
            }
            if (n.normal >= 0) {
                e.bindBuffer(e.ARRAY_BUFFER, B.__webglNormalBuffer);
                e.vertexAttribPointer(n.normal, 3, e.FLOAT, !1, 0, 0)
            }
            if (n.tangent >= 0) {
                e.bindBuffer(e.ARRAY_BUFFER, B.__webglTangentBuffer);
                e.vertexAttribPointer(n.tangent, 4, e.FLOAT, !1, 0, 0)
            }
            if (n.uv >= 0)if (B.__webglUVBuffer) {
                e.bindBuffer(e.ARRAY_BUFFER,
                        B.__webglUVBuffer);
                e.vertexAttribPointer(n.uv, 2, e.FLOAT, !1, 0, 0);
                e.enableVertexAttribArray(n.uv)
            } else e.disableVertexAttribArray(n.uv);
            if (n.uv2 >= 0)if (B.__webglUV2Buffer) {
                e.bindBuffer(e.ARRAY_BUFFER, B.__webglUV2Buffer);
                e.vertexAttribPointer(n.uv2, 2, e.FLOAT, !1, 0, 0);
                e.enableVertexAttribArray(n.uv2)
            } else e.disableVertexAttribArray(n.uv2);
            if (x.skinning && n.skinVertexA >= 0 && n.skinVertexB >= 0 && n.skinIndex >= 0 && n.skinWeight >= 0) {
                e.bindBuffer(e.ARRAY_BUFFER, B.__webglSkinVertexABuffer);
                e.vertexAttribPointer(n.skinVertexA,
                        4, e.FLOAT, !1, 0, 0);
                e.bindBuffer(e.ARRAY_BUFFER, B.__webglSkinVertexBBuffer);
                e.vertexAttribPointer(n.skinVertexB, 4, e.FLOAT, !1, 0, 0);
                e.bindBuffer(e.ARRAY_BUFFER, B.__webglSkinIndicesBuffer);
                e.vertexAttribPointer(n.skinIndex, 4, e.FLOAT, !1, 0, 0);
                e.bindBuffer(e.ARRAY_BUFFER, B.__webglSkinWeightsBuffer);
                e.vertexAttribPointer(n.skinWeight, 4, e.FLOAT, !1, 0, 0)
            }
            if (J instanceof THREE.Mesh)if (x.wireframe) {
                e.lineWidth(x.wireframeLinewidth);
                e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, B.__webglLineBuffer);
                e.drawElements(e.LINES,
                        B.__webglLineCount, e.UNSIGNED_SHORT, 0)
            } else {
                e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, B.__webglFaceBuffer);
                e.drawElements(e.TRIANGLES, B.__webglFaceCount, e.UNSIGNED_SHORT, 0)
            } else if (J instanceof THREE.Line) {
                J = J.type == THREE.LineStrip ? e.LINE_STRIP : e.LINES;
                e.lineWidth(x.linewidth);
                e.drawArrays(J, 0, B.__webglLineCount)
            } else if (J instanceof THREE.ParticleSystem)e.drawArrays(e.POINTS, 0, B.__webglParticleCount); else J instanceof THREE.Ribbon && e.drawArrays(e.TRIANGLE_STRIP, 0, B.__webglVertexCount)
        }
    }

    function g(n, C, u) {
        if (!n.__webglVertexBuffer)n.__webglVertexBuffer = e.createBuffer();
        if (!n.__webglNormalBuffer)n.__webglNormalBuffer = e.createBuffer();
        if (n.hasPos) {
            e.bindBuffer(e.ARRAY_BUFFER, n.__webglVertexBuffer);
            e.bufferData(e.ARRAY_BUFFER, n.positionArray, e.DYNAMIC_DRAW);
            e.enableVertexAttribArray(C.attributes.position);
            e.vertexAttribPointer(C.attributes.position, 3, e.FLOAT, !1, 0, 0)
        }
        if (n.hasNormal) {
            e.bindBuffer(e.ARRAY_BUFFER, n.__webglNormalBuffer);
            if (u == THREE.FlatShading) {
                var x,B,J,M,H,I,E,N,O,W,U = n.count * 3;
                for (W =
                             0; W < U; W += 9) {
                    u = n.normalArray;
                    x = u[W];
                    B = u[W + 1];
                    J = u[W + 2];
                    M = u[W + 3];
                    I = u[W + 4];
                    N = u[W + 5];
                    H = u[W + 6];
                    E = u[W + 7];
                    O = u[W + 8];
                    x = (x + M + H) / 3;
                    B = (B + I + E) / 3;
                    J = (J + N + O) / 3;
                    u[W] = x;
                    u[W + 1] = B;
                    u[W + 2] = J;
                    u[W + 3] = x;
                    u[W + 4] = B;
                    u[W + 5] = J;
                    u[W + 6] = x;
                    u[W + 7] = B;
                    u[W + 8] = J
                }
            }
            e.bufferData(e.ARRAY_BUFFER, n.normalArray, e.DYNAMIC_DRAW);
            e.enableVertexAttribArray(C.attributes.normal);
            e.vertexAttribPointer(C.attributes.normal, 3, e.FLOAT, !1, 0, 0)
        }
        e.drawArrays(e.TRIANGLES, 0, n.count);
        n.count = 0
    }

    function h(n) {
        if (qa != n.doubleSided) {
            n.doubleSided ? e.disable(e.CULL_FACE) :
                    e.enable(e.CULL_FACE);
            qa = n.doubleSided
        }
        if (ta != n.flipSided) {
            n.flipSided ? e.frontFace(e.CW) : e.frontFace(e.CCW);
            ta = n.flipSided
        }
    }

    function j(n) {
        if (ia != n) {
            n ? e.enable(e.DEPTH_TEST) : e.disable(e.DEPTH_TEST);
            ia = n
        }
    }

    function k(n) {
        la[0].set(n.n41 - n.n11, n.n42 - n.n12, n.n43 - n.n13, n.n44 - n.n14);
        la[1].set(n.n41 + n.n11, n.n42 + n.n12, n.n43 + n.n13, n.n44 + n.n14);
        la[2].set(n.n41 + n.n21, n.n42 + n.n22, n.n43 + n.n23, n.n44 + n.n24);
        la[3].set(n.n41 - n.n21, n.n42 - n.n22, n.n43 - n.n23, n.n44 - n.n24);
        la[4].set(n.n41 - n.n31, n.n42 - n.n32, n.n43 - n.n33, n.n44 -
                n.n34);
        la[5].set(n.n41 + n.n31, n.n42 + n.n32, n.n43 + n.n33, n.n44 + n.n34);
        var C;
        for (n = 0; n < 6; n++) {
            C = la[n];
            C.divideScalar(Math.sqrt(C.x * C.x + C.y * C.y + C.z * C.z))
        }
    }

    function m(n) {
        for (var C = n.matrixWorld,u = -n.geometry.boundingSphere.radius * Math.max(n.scale.x, Math.max(n.scale.y, n.scale.z)),x = 0; x < 6; x++) {
            n = la[x].x * C.n14 + la[x].y * C.n24 + la[x].z * C.n34 + la[x].w;
            if (n <= u)return!1
        }
        return!0
    }

    function p(n, C) {
        n.list[n.count] = C;
        n.count += 1
    }

    function o(n) {
        var C,u,x = n.object,B = n.opaque,J = n.transparent;
        J.count = 0;
        n = B.count = 0;
        for (C = x.materials.length; n <
                C; n++) {
            u = x.materials[n];
            u.transparent ? p(J, u) : p(B, u)
        }
    }

    function w(n) {
        var C,u,x,B,J = n.object,M = n.buffer,H = n.opaque,I = n.transparent;
        I.count = 0;
        n = H.count = 0;
        for (x = J.materials.length; n < x; n++) {
            C = J.materials[n];
            if (C instanceof THREE.MeshFaceMaterial) {
                C = 0;
                for (u = M.materials.length; C < u; C++)(B = M.materials[C]) && (B.transparent ? p(I, B) : p(H, B))
            } else(B = C) && (B.transparent ? p(I, B) : p(H, B))
        }
    }

    function y(n, C) {
        return C.z - n.z
    }

    function v(n) {
        e.enable(e.POLYGON_OFFSET_FILL);
        e.polygonOffset(0.1, 1);
        e.enable(e.STENCIL_TEST);
        e.enable(e.DEPTH_TEST);
        e.depthMask(!1);
        e.colorMask(!1, !1, !1, !1);
        e.stencilFunc(e.ALWAYS, 1, 255);
        e.stencilOpSeparate(e.BACK, e.KEEP, e.INCR, e.KEEP);
        e.stencilOpSeparate(e.FRONT, e.KEEP, e.DECR, e.KEEP);
        var C,u = n.lights.length,x,B = n.lights,J = [],M,H,I,E,N,O = n.__webglShadowVolumes.length;
        for (C = 0; C < u; C++) {
            x = n.lights[C];
            if (x instanceof THREE.DirectionalLight) {
                J[0] = -x.position.x;
                J[1] = -x.position.y;
                J[2] = -x.position.z;
                for (N = 0; N < O; N++) {
                    x = n.__webglShadowVolumes[N].object;
                    M = n.__webglShadowVolumes[N].buffer;
                    H = x.materials[0];
                    H.program || Y.initMaterial(H,
                            B, undefined, x);
                    H = H.program;
                    I = H.uniforms;
                    E = H.attributes;
                    if (ya !== H) {
                        e.useProgram(H);
                        ya = H;
                        e.uniformMatrix4fv(I.projectionMatrix, !1, Sa);
                        e.uniformMatrix4fv(I.viewMatrix, !1, $a);
                        e.uniform3fv(I.directionalLightDirection, J)
                    }
                    x.matrixWorld.flattenToArray(x._objectMatrixArray);
                    e.uniformMatrix4fv(I.objectMatrix, !1, x._objectMatrixArray);
                    e.bindBuffer(e.ARRAY_BUFFER, M.__webglVertexBuffer);
                    e.vertexAttribPointer(E.position, 3, e.FLOAT, !1, 0, 0);
                    e.bindBuffer(e.ARRAY_BUFFER, M.__webglNormalBuffer);
                    e.vertexAttribPointer(E.normal,
                            3, e.FLOAT, !1, 0, 0);
                    e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, M.__webglFaceBuffer);
                    e.cullFace(e.FRONT);
                    e.drawElements(e.TRIANGLES, M.__webglFaceCount, e.UNSIGNED_SHORT, 0);
                    e.cullFace(e.BACK);
                    e.drawElements(e.TRIANGLES, M.__webglFaceCount, e.UNSIGNED_SHORT, 0)
                }
            }
        }
        e.disable(e.POLYGON_OFFSET_FILL);
        e.colorMask(!0, !0, !0, !0);
        e.stencilFunc(e.NOTEQUAL, 0, 255);
        e.stencilOp(e.KEEP, e.KEEP, e.KEEP);
        e.disable(e.DEPTH_TEST);
        va = "";
        ya = ja.program;
        e.useProgram(ja.program);
        e.uniformMatrix4fv(ja.projectionLocation, !1, Sa);
        e.uniform1f(ja.darknessLocation,
                ja.darkness);
        e.bindBuffer(e.ARRAY_BUFFER, ja.vertexBuffer);
        e.vertexAttribPointer(ja.vertexLocation, 3, e.FLOAT, !1, 0, 0);
        e.enableVertexAttribArray(ja.vertexLocation);
        e.blendFunc(e.ONE, e.ONE_MINUS_SRC_ALPHA);
        e.blendEquation(e.FUNC_ADD);
        e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, ja.elementBuffer);
        e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0);
        e.disable(e.STENCIL_TEST);
        e.enable(e.DEPTH_TEST);
        e.depthMask(Ea)
    }

    function A(n, C) {
        var u,x,B = n.__webglLensFlares.length,J,M,H,I = new THREE.Vector3,E = ka / Ba,N = Ba * 0.5,O = ka * 0.5,
                W = 16 / ka,U = [W * E,W],za = [1,1,0],Ka = [1,1],ma = ga.uniforms;
        u = ga.attributes;
        e.useProgram(ga.program);
        ya = ga.program;
        va = "";
        e.uniform1i(ma.occlusionMap, 0);
        e.uniform1i(ma.map, 1);
        e.bindBuffer(e.ARRAY_BUFFER, ga.vertexBuffer);
        e.vertexAttribPointer(u.vertex, 2, e.FLOAT, !1, 16, 0);
        e.vertexAttribPointer(u.uv, 2, e.FLOAT, !1, 16, 8);
        e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, ga.elementBuffer);
        e.disable(e.CULL_FACE);
        e.depthMask(!1);
        e.activeTexture(e.TEXTURE0);
        e.bindTexture(e.TEXTURE_2D, ga.occlusionTexture);
        e.activeTexture(e.TEXTURE1);
        for (x = 0; x < B; x++) {
            u = n.__webglLensFlares[x].object;
            I.set(u.matrixWorld.n14, u.matrixWorld.n24, u.matrixWorld.n34);
            C.matrixWorldInverse.multiplyVector3(I);
            C.projectionMatrix.multiplyVector3(I);
            za[0] = I.x;
            za[1] = I.y;
            za[2] = I.z;
            Ka[0] = za[0] * N + N;
            Ka[1] = za[1] * O + O;
            if (Ka[0] > 0 && Ka[0] < Ba && Ka[1] > 0 && Ka[1] < ka) {
                e.bindTexture(e.TEXTURE_2D, ga.tempTexture);
                e.copyTexSubImage2D(e.TEXTURE_2D, 0, 0, 0, Ka[0] - 8, Ka[1] - 8, 16, 16);
                e.uniform1i(ma.renderType, 0);
                e.uniform2fv(ma.scale, U);
                e.uniform3fv(ma.screenPosition, za);
                e.disable(e.BLEND);
                e.enable(e.DEPTH_TEST);
                e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0);
                e.bindTexture(e.TEXTURE_2D, ga.occlusionTexture);
                e.copyTexSubImage2D(e.TEXTURE_2D, 0, 0, 0, Ka[0] - 8, Ka[1] - 8, 16, 16);
                e.uniform1i(ma.renderType, 1);
                e.disable(e.DEPTH_TEST);
                e.bindTexture(e.TEXTURE_2D, ga.tempTexture);
                e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0);
                u.positionScreen.x = za[0];
                u.positionScreen.y = za[1];
                u.positionScreen.z = za[2];
                u.customUpdateCallback ? u.customUpdateCallback(u) : u.updateLensFlares();
                e.uniform1i(ma.renderType, 2);
                e.enable(e.BLEND);
                J = 0;
                for (M = u.lensFlares.length; J < M; J++) {
                    H = u.lensFlares[J];
                    if (H.opacity > 0.0010 && H.scale > 0.0010) {
                        za[0] = H.x;
                        za[1] = H.y;
                        za[2] = H.z;
                        W = H.size * H.scale / ka;
                        U[0] = W * E;
                        U[1] = W;
                        e.uniform3fv(ma.screenPosition, za);
                        e.uniform2fv(ma.scale, U);
                        e.uniform1f(ma.rotation, H.rotation);
                        e.uniform1f(ma.opacity, H.opacity);
                        z(H.blending);
                        P(H.texture, 1);
                        e.drawElements(e.TRIANGLES, 6, e.UNSIGNED_SHORT, 0)
                    }
                }
            }
        }
        e.enable(e.CULL_FACE);
        e.enable(e.DEPTH_TEST);
        e.depthMask(Ea)
    }

    function F(n, C) {
        n._modelViewMatrix.multiplyToArray(C.matrixWorldInverse,
                n.matrixWorld, n._modelViewMatrixArray);
        THREE.Matrix4.makeInvert3x3(n._modelViewMatrix).transposeIntoArray(n._normalMatrixArray)
    }

    function G(n) {
        var C,u,x,B,J;
        if (n instanceof THREE.Mesh) {
            u = n.geometry;
            for (C in u.geometryGroups) {
                x = u.geometryGroups[C];
                J = !1;
                for (B in x.__webglCustomAttributes)if (x.__webglCustomAttributes[B].needsUpdate) {
                    J = !0;
                    break
                }
                if (u.__dirtyVertices || u.__dirtyMorphTargets || u.__dirtyElements || u.__dirtyUvs || u.__dirtyNormals || u.__dirtyColors || u.__dirtyTangents || J) {
                    J = e.DYNAMIC_DRAW;
                    var M = void 0,
                            H = void 0,I = void 0,E = void 0;
                    I = void 0;
                    var N = void 0,O = void 0,W = void 0,U = void 0,za = void 0,Ka = void 0,ma = void 0,Ha = void 0,db = void 0,Aa = void 0,Ga = void 0,Ia = void 0,Qa = void 0;
                    O = void 0;
                    W = void 0;
                    E = void 0;
                    U = void 0;
                    E = void 0;
                    var D = void 0,$ = void 0;
                    O = void 0;
                    D = void 0;
                    $ = void 0;
                    var t = void 0,ab = void 0;
                    D = void 0;
                    $ = void 0;
                    t = void 0;
                    ab = void 0;
                    D = void 0;
                    $ = void 0;
                    t = void 0;
                    ab = void 0;
                    D = void 0;
                    $ = void 0;
                    t = void 0;
                    E = void 0;
                    U = void 0;
                    N = void 0;
                    I = void 0;
                    I = void 0;
                    D = void 0;
                    $ = void 0;
                    t = void 0;
                    var fb = void 0,Ma = 0,Va = 0,gb = 0,hb = 0,Wa = 0,eb = 0,Oa =
                            0,Ja = 0,La = 0,T = 0,Ra = 0;
                    $ = D = 0;
                    var Xa = x.__vertexArray,Za = x.__uvArray,X = x.__uv2Array,sa = x.__normalArray,ea = x.__tangentArray,da = x.__colorArray,wa = x.__skinVertexAArray,ua = x.__skinVertexBArray,ha = x.__skinIndexArray,Q = x.__skinWeightArray,Na = x.__morphTargetsArrays,cb = x.__webglCustomAttributes;
                    t = void 0;
                    var Ua = x.__faceArray,bb = x.__lineArray,lb = x.__needsSmoothNormals;
                    Ka = x.__vertexColorType;
                    za = x.__uvType;
                    ma = x.__normalType;
                    var Pa = n.geometry,ib = Pa.__dirtyVertices,sb = Pa.__dirtyElements,rb = Pa.__dirtyUvs,tb = Pa.__dirtyNormals,
                            ub = Pa.__dirtyTangents,vb = Pa.__dirtyColors,wb = Pa.__dirtyMorphTargets,nb = Pa.vertices,xb = x.faces,Ab = Pa.faces,yb = Pa.faceVertexUvs[0],zb = Pa.faceVertexUvs[1],ob = Pa.skinVerticesA,pb = Pa.skinVerticesB,qb = Pa.skinIndices,kb = Pa.skinWeights,mb = Pa.edgeFaces,jb = Pa.morphTargets;
                    if (cb)for (fb in cb) {
                        cb[fb].offset = 0;
                        cb[fb].offsetSrc = 0
                    }
                    M = 0;
                    for (H = xb.length; M < H; M++) {
                        I = xb[M];
                        E = Ab[I];
                        yb && (Ha = yb[I]);
                        zb && (db = zb[I]);
                        I = E.vertexNormals;
                        N = E.normal;
                        O = E.vertexColors;
                        W = E.color;
                        U = E.vertexTangents;
                        if (E instanceof THREE.Face3) {
                            if (ib) {
                                Aa =
                                        nb[E.a].position;
                                Ga = nb[E.b].position;
                                Ia = nb[E.c].position;
                                Xa[Va] = Aa.x;
                                Xa[Va + 1] = Aa.y;
                                Xa[Va + 2] = Aa.z;
                                Xa[Va + 3] = Ga.x;
                                Xa[Va + 4] = Ga.y;
                                Xa[Va + 5] = Ga.z;
                                Xa[Va + 6] = Ia.x;
                                Xa[Va + 7] = Ia.y;
                                Xa[Va + 8] = Ia.z;
                                Va += 9
                            }
                            if (cb)for (fb in cb) {
                                t = cb[fb];
                                if (t.needsUpdate) {
                                    D = t.offset;
                                    $ = t.offsetSrc;
                                    if (t.size === 1) {
                                        if (t.boundTo === undefined || t.boundTo === "vertices") {
                                            t.array[D + 0] = t.value[E.a];
                                            t.array[D + 1] = t.value[E.b];
                                            t.array[D + 2] = t.value[E.c]
                                        } else if (t.boundTo === "faces") {
                                            t.array[D + 0] = t.value[$];
                                            t.array[D + 1] = t.value[$];
                                            t.array[D + 2] = t.value[$];
                                            t.offsetSrc++
                                        } else if (t.boundTo === "faceVertices") {
                                            t.array[D + 0] = t.value[$ + 0];
                                            t.array[D + 1] = t.value[$ + 1];
                                            t.array[D + 2] = t.value[$ + 2];
                                            t.offsetSrc += 3
                                        }
                                        t.offset += 3
                                    } else {
                                        if (t.boundTo === undefined || t.boundTo === "vertices") {
                                            Aa = t.value[E.a];
                                            Ga = t.value[E.b];
                                            Ia = t.value[E.c]
                                        } else if (t.boundTo === "faces") {
                                            Aa = t.value[$];
                                            Ga = t.value[$];
                                            Ia = t.value[$];
                                            t.offsetSrc++
                                        } else if (t.boundTo === "faceVertices") {
                                            Aa = t.value[$ + 0];
                                            Ga = t.value[$ + 1];
                                            Ia = t.value[$ + 2];
                                            t.offsetSrc += 3
                                        }
                                        if (t.size === 2) {
                                            t.array[D + 0] = Aa.x;
                                            t.array[D + 1] = Aa.y;
                                            t.array[D +
                                                    2] = Ga.x;
                                            t.array[D + 3] = Ga.y;
                                            t.array[D + 4] = Ia.x;
                                            t.array[D + 5] = Ia.y;
                                            t.offset += 6
                                        } else if (t.size === 3) {
                                            if (t.type === "c") {
                                                t.array[D + 0] = Aa.r;
                                                t.array[D + 1] = Aa.g;
                                                t.array[D + 2] = Aa.b;
                                                t.array[D + 3] = Ga.r;
                                                t.array[D + 4] = Ga.g;
                                                t.array[D + 5] = Ga.b;
                                                t.array[D + 6] = Ia.r;
                                                t.array[D + 7] = Ia.g;
                                                t.array[D + 8] = Ia.b
                                            } else {
                                                t.array[D + 0] = Aa.x;
                                                t.array[D + 1] = Aa.y;
                                                t.array[D + 2] = Aa.z;
                                                t.array[D + 3] = Ga.x;
                                                t.array[D + 4] = Ga.y;
                                                t.array[D + 5] = Ga.z;
                                                t.array[D + 6] = Ia.x;
                                                t.array[D + 7] = Ia.y;
                                                t.array[D + 8] = Ia.z
                                            }
                                            t.offset += 9
                                        } else {
                                            t.array[D + 0] = Aa.x;
                                            t.array[D + 1] = Aa.y;
                                            t.array[D +
                                                    2] = Aa.z;
                                            t.array[D + 3] = Aa.w;
                                            t.array[D + 4] = Ga.x;
                                            t.array[D + 5] = Ga.y;
                                            t.array[D + 6] = Ga.z;
                                            t.array[D + 7] = Ga.w;
                                            t.array[D + 8] = Ia.x;
                                            t.array[D + 9] = Ia.y;
                                            t.array[D + 10] = Ia.z;
                                            t.array[D + 11] = Ia.w;
                                            t.offset += 12
                                        }
                                    }
                                }
                            }
                            if (wb) {
                                D = 0;
                                for ($ = jb.length; D < $; D++) {
                                    Aa = jb[D].vertices[E.a].position;
                                    Ga = jb[D].vertices[E.b].position;
                                    Ia = jb[D].vertices[E.c].position;
                                    t = Na[D];
                                    t[Ra + 0] = Aa.x;
                                    t[Ra + 1] = Aa.y;
                                    t[Ra + 2] = Aa.z;
                                    t[Ra + 3] = Ga.x;
                                    t[Ra + 4] = Ga.y;
                                    t[Ra + 5] = Ga.z;
                                    t[Ra + 6] = Ia.x;
                                    t[Ra + 7] = Ia.y;
                                    t[Ra + 8] = Ia.z
                                }
                                Ra += 9
                            }
                            if (kb.length) {
                                D = kb[E.a];
                                $ = kb[E.b];
                                t = kb[E.c];
                                Q[T] = D.x;
                                Q[T + 1] = D.y;
                                Q[T + 2] = D.z;
                                Q[T + 3] = D.w;
                                Q[T + 4] = $.x;
                                Q[T + 5] = $.y;
                                Q[T + 6] = $.z;
                                Q[T + 7] = $.w;
                                Q[T + 8] = t.x;
                                Q[T + 9] = t.y;
                                Q[T + 10] = t.z;
                                Q[T + 11] = t.w;
                                D = qb[E.a];
                                $ = qb[E.b];
                                t = qb[E.c];
                                ha[T] = D.x;
                                ha[T + 1] = D.y;
                                ha[T + 2] = D.z;
                                ha[T + 3] = D.w;
                                ha[T + 4] = $.x;
                                ha[T + 5] = $.y;
                                ha[T + 6] = $.z;
                                ha[T + 7] = $.w;
                                ha[T + 8] = t.x;
                                ha[T + 9] = t.y;
                                ha[T + 10] = t.z;
                                ha[T + 11] = t.w;
                                D = ob[E.a];
                                $ = ob[E.b];
                                t = ob[E.c];
                                wa[T] = D.x;
                                wa[T + 1] = D.y;
                                wa[T + 2] = D.z;
                                wa[T + 3] = 1;
                                wa[T + 4] = $.x;
                                wa[T + 5] = $.y;
                                wa[T + 6] = $.z;
                                wa[T + 7] = 1;
                                wa[T + 8] = t.x;
                                wa[T + 9] = t.y;
                                wa[T + 10] = t.z;
                                wa[T + 11] = 1;
                                D = pb[E.a];
                                $ = pb[E.b];
                                t = pb[E.c];
                                ua[T] =
                                        D.x;
                                ua[T + 1] = D.y;
                                ua[T + 2] = D.z;
                                ua[T + 3] = 1;
                                ua[T + 4] = $.x;
                                ua[T + 5] = $.y;
                                ua[T + 6] = $.z;
                                ua[T + 7] = 1;
                                ua[T + 8] = t.x;
                                ua[T + 9] = t.y;
                                ua[T + 10] = t.z;
                                ua[T + 11] = 1;
                                T += 12
                            }
                            if (vb && Ka) {
                                if (O.length == 3 && Ka == THREE.VertexColors) {
                                    E = O[0];
                                    D = O[1];
                                    $ = O[2]
                                } else $ = D = E = W;
                                da[La] = E.r;
                                da[La + 1] = E.g;
                                da[La + 2] = E.b;
                                da[La + 3] = D.r;
                                da[La + 4] = D.g;
                                da[La + 5] = D.b;
                                da[La + 6] = $.r;
                                da[La + 7] = $.g;
                                da[La + 8] = $.b;
                                La += 9
                            }
                            if (ub && Pa.hasTangents) {
                                O = U[0];
                                W = U[1];
                                E = U[2];
                                ea[Oa] = O.x;
                                ea[Oa + 1] = O.y;
                                ea[Oa + 2] = O.z;
                                ea[Oa + 3] = O.w;
                                ea[Oa + 4] = W.x;
                                ea[Oa + 5] = W.y;
                                ea[Oa + 6] = W.z;
                                ea[Oa + 7] = W.w;
                                ea[Oa + 8] = E.x;
                                ea[Oa + 9] = E.y;
                                ea[Oa + 10] = E.z;
                                ea[Oa + 11] = E.w;
                                Oa += 12
                            }
                            if (tb && ma)if (I.length == 3 && lb)for (U = 0; U < 3; U++) {
                                N = I[U];
                                sa[eb] = N.x;
                                sa[eb + 1] = N.y;
                                sa[eb + 2] = N.z;
                                eb += 3
                            } else for (U = 0; U < 3; U++) {
                                sa[eb] = N.x;
                                sa[eb + 1] = N.y;
                                sa[eb + 2] = N.z;
                                eb += 3
                            }
                            if (rb && Ha !== undefined && za)for (U = 0; U < 3; U++) {
                                I = Ha[U];
                                Za[gb] = I.u;
                                Za[gb + 1] = I.v;
                                gb += 2
                            }
                            if (rb && db !== undefined && za)for (U = 0; U < 3; U++) {
                                I = db[U];
                                X[hb] = I.u;
                                X[hb + 1] = I.v;
                                hb += 2
                            }
                            if (sb) {
                                Ua[Wa] = Ma;
                                Ua[Wa + 1] = Ma + 1;
                                Ua[Wa + 2] = Ma + 2;
                                Wa += 3;
                                bb[Ja] = Ma;
                                bb[Ja + 1] = Ma + 1;
                                bb[Ja + 2] = Ma;
                                bb[Ja + 3] = Ma + 2;
                                bb[Ja + 4] = Ma + 1;
                                bb[Ja + 5] = Ma + 2;
                                Ja +=
                                        6;
                                Ma += 3
                            }
                        } else if (E instanceof THREE.Face4) {
                            if (ib) {
                                Aa = nb[E.a].position;
                                Ga = nb[E.b].position;
                                Ia = nb[E.c].position;
                                Qa = nb[E.d].position;
                                Xa[Va] = Aa.x;
                                Xa[Va + 1] = Aa.y;
                                Xa[Va + 2] = Aa.z;
                                Xa[Va + 3] = Ga.x;
                                Xa[Va + 4] = Ga.y;
                                Xa[Va + 5] = Ga.z;
                                Xa[Va + 6] = Ia.x;
                                Xa[Va + 7] = Ia.y;
                                Xa[Va + 8] = Ia.z;
                                Xa[Va + 9] = Qa.x;
                                Xa[Va + 10] = Qa.y;
                                Xa[Va + 11] = Qa.z;
                                Va += 12
                            }
                            if (cb)for (fb in cb) {
                                t = cb[fb];
                                if (t.needsUpdate) {
                                    D = t.offset;
                                    $ = t.offsetSrc;
                                    if (t.size === 1) {
                                        if (t.boundTo === undefined || t.boundTo === "vertices") {
                                            t.array[D + 0] = t.value[E.a];
                                            t.array[D + 1] = t.value[E.b];
                                            t.array[D +
                                                    2] = t.value[E.c];
                                            t.array[D + 2] = t.value[E.d]
                                        } else if (t.boundTo === "faces") {
                                            t.array[D + 0] = t.value[$];
                                            t.array[D + 1] = t.value[$];
                                            t.array[D + 2] = t.value[$];
                                            t.array[D + 2] = t.value[$];
                                            t.offsetSrc++
                                        } else if (t.boundTo === "faceVertices") {
                                            t.array[D + 0] = t.value[$ + 0];
                                            t.array[D + 1] = t.value[$ + 1];
                                            t.array[D + 2] = t.value[$ + 2];
                                            t.array[D + 2] = t.value[$ + 3];
                                            t.offsetSrc += 4
                                        }
                                        t.offset += 4
                                    } else {
                                        if (t.boundTo === undefined || t.boundTo === "vertices") {
                                            Aa = t.value[E.a];
                                            Ga = t.value[E.b];
                                            Ia = t.value[E.c];
                                            Qa = t.value[E.d]
                                        } else if (t.boundTo === "faces") {
                                            Aa = t.value[$];
                                            Ga = t.value[$];
                                            Ia = t.value[$];
                                            Qa = t.value[$];
                                            t.offsetSrc++
                                        } else if (t.boundTo === "faceVertices") {
                                            Aa = t.value[$ + 0];
                                            Ga = t.value[$ + 1];
                                            Ia = t.value[$ + 2];
                                            Qa = t.value[$ + 3];
                                            t.offsetSrc += 4
                                        }
                                        if (t.size === 2) {
                                            t.array[D + 0] = Aa.x;
                                            t.array[D + 1] = Aa.y;
                                            t.array[D + 2] = Ga.x;
                                            t.array[D + 3] = Ga.y;
                                            t.array[D + 4] = Ia.x;
                                            t.array[D + 5] = Ia.y;
                                            t.array[D + 6] = Qa.x;
                                            t.array[D + 7] = Qa.y;
                                            t.offset += 8
                                        } else if (t.size === 3) {
                                            if (t.type === "c") {
                                                t.array[D + 0] = Aa.r;
                                                t.array[D + 1] = Aa.g;
                                                t.array[D + 2] = Aa.b;
                                                t.array[D + 3] = Ga.r;
                                                t.array[D + 4] = Ga.g;
                                                t.array[D + 5] = Ga.b;
                                                t.array[D + 6] = Ia.r;
                                                t.array[D + 7] = Ia.g;
                                                t.array[D + 8] = Ia.b;
                                                t.array[D + 9] = Qa.r;
                                                t.array[D + 10] = Qa.g;
                                                t.array[D + 11] = Qa.b
                                            } else {
                                                t.array[D + 0] = Aa.x;
                                                t.array[D + 1] = Aa.y;
                                                t.array[D + 2] = Aa.z;
                                                t.array[D + 3] = Ga.x;
                                                t.array[D + 4] = Ga.y;
                                                t.array[D + 5] = Ga.z;
                                                t.array[D + 6] = Ia.x;
                                                t.array[D + 7] = Ia.y;
                                                t.array[D + 8] = Ia.z;
                                                t.array[D + 9] = Qa.x;
                                                t.array[D + 10] = Qa.y;
                                                t.array[D + 11] = Qa.z
                                            }
                                            t.offset += 12
                                        } else {
                                            t.array[D + 0] = Aa.x;
                                            t.array[D + 1] = Aa.y;
                                            t.array[D + 2] = Aa.z;
                                            t.array[D + 3] = Aa.w;
                                            t.array[D + 4] = Ga.x;
                                            t.array[D + 5] = Ga.y;
                                            t.array[D + 6] = Ga.z;
                                            t.array[D + 7] = Ga.w;
                                            t.array[D + 8] = Ia.x;
                                            t.array[D +
                                                    9] = Ia.y;
                                            t.array[D + 10] = Ia.z;
                                            t.array[D + 11] = Ia.w;
                                            t.array[D + 12] = Qa.x;
                                            t.array[D + 13] = Qa.y;
                                            t.array[D + 14] = Qa.z;
                                            t.array[D + 15] = Qa.w;
                                            t.offset += 16
                                        }
                                    }
                                }
                            }
                            if (wb) {
                                D = 0;
                                for ($ = jb.length; D < $; D++) {
                                    Aa = jb[D].vertices[E.a].position;
                                    Ga = jb[D].vertices[E.b].position;
                                    Ia = jb[D].vertices[E.c].position;
                                    Qa = jb[D].vertices[E.d].position;
                                    t = Na[D];
                                    t[Ra + 0] = Aa.x;
                                    t[Ra + 1] = Aa.y;
                                    t[Ra + 2] = Aa.z;
                                    t[Ra + 3] = Ga.x;
                                    t[Ra + 4] = Ga.y;
                                    t[Ra + 5] = Ga.z;
                                    t[Ra + 6] = Ia.x;
                                    t[Ra + 7] = Ia.y;
                                    t[Ra + 8] = Ia.z;
                                    t[Ra + 9] = Qa.x;
                                    t[Ra + 10] = Qa.y;
                                    t[Ra + 11] = Qa.z
                                }
                                Ra += 12
                            }
                            if (kb.length) {
                                D = kb[E.a];
                                $ =
                                        kb[E.b];
                                t = kb[E.c];
                                ab = kb[E.d];
                                Q[T] = D.x;
                                Q[T + 1] = D.y;
                                Q[T + 2] = D.z;
                                Q[T + 3] = D.w;
                                Q[T + 4] = $.x;
                                Q[T + 5] = $.y;
                                Q[T + 6] = $.z;
                                Q[T + 7] = $.w;
                                Q[T + 8] = t.x;
                                Q[T + 9] = t.y;
                                Q[T + 10] = t.z;
                                Q[T + 11] = t.w;
                                Q[T + 12] = ab.x;
                                Q[T + 13] = ab.y;
                                Q[T + 14] = ab.z;
                                Q[T + 15] = ab.w;
                                D = qb[E.a];
                                $ = qb[E.b];
                                t = qb[E.c];
                                ab = qb[E.d];
                                ha[T] = D.x;
                                ha[T + 1] = D.y;
                                ha[T + 2] = D.z;
                                ha[T + 3] = D.w;
                                ha[T + 4] = $.x;
                                ha[T + 5] = $.y;
                                ha[T + 6] = $.z;
                                ha[T + 7] = $.w;
                                ha[T + 8] = t.x;
                                ha[T + 9] = t.y;
                                ha[T + 10] = t.z;
                                ha[T + 11] = t.w;
                                ha[T + 12] = ab.x;
                                ha[T + 13] = ab.y;
                                ha[T + 14] = ab.z;
                                ha[T + 15] = ab.w;
                                D = ob[E.a];
                                $ = ob[E.b];
                                t = ob[E.c];
                                ab = ob[E.d];
                                wa[T] =
                                        D.x;
                                wa[T + 1] = D.y;
                                wa[T + 2] = D.z;
                                wa[T + 3] = 1;
                                wa[T + 4] = $.x;
                                wa[T + 5] = $.y;
                                wa[T + 6] = $.z;
                                wa[T + 7] = 1;
                                wa[T + 8] = t.x;
                                wa[T + 9] = t.y;
                                wa[T + 10] = t.z;
                                wa[T + 11] = 1;
                                wa[T + 12] = ab.x;
                                wa[T + 13] = ab.y;
                                wa[T + 14] = ab.z;
                                wa[T + 15] = 1;
                                D = pb[E.a];
                                $ = pb[E.b];
                                t = pb[E.c];
                                E = pb[E.d];
                                ua[T] = D.x;
                                ua[T + 1] = D.y;
                                ua[T + 2] = D.z;
                                ua[T + 3] = 1;
                                ua[T + 4] = $.x;
                                ua[T + 5] = $.y;
                                ua[T + 6] = $.z;
                                ua[T + 7] = 1;
                                ua[T + 8] = t.x;
                                ua[T + 9] = t.y;
                                ua[T + 10] = t.z;
                                ua[T + 11] = 1;
                                ua[T + 12] = E.x;
                                ua[T + 13] = E.y;
                                ua[T + 14] = E.z;
                                ua[T + 15] = 1;
                                T += 16
                            }
                            if (vb && Ka) {
                                if (O.length == 4 && Ka == THREE.VertexColors) {
                                    E = O[0];
                                    D = O[1];
                                    $ = O[2];
                                    O = O[3]
                                } else O =
                                        $ = D = E = W;
                                da[La] = E.r;
                                da[La + 1] = E.g;
                                da[La + 2] = E.b;
                                da[La + 3] = D.r;
                                da[La + 4] = D.g;
                                da[La + 5] = D.b;
                                da[La + 6] = $.r;
                                da[La + 7] = $.g;
                                da[La + 8] = $.b;
                                da[La + 9] = O.r;
                                da[La + 10] = O.g;
                                da[La + 11] = O.b;
                                La += 12
                            }
                            if (ub && Pa.hasTangents) {
                                O = U[0];
                                W = U[1];
                                E = U[2];
                                U = U[3];
                                ea[Oa] = O.x;
                                ea[Oa + 1] = O.y;
                                ea[Oa + 2] = O.z;
                                ea[Oa + 3] = O.w;
                                ea[Oa + 4] = W.x;
                                ea[Oa + 5] = W.y;
                                ea[Oa + 6] = W.z;
                                ea[Oa + 7] = W.w;
                                ea[Oa + 8] = E.x;
                                ea[Oa + 9] = E.y;
                                ea[Oa + 10] = E.z;
                                ea[Oa + 11] = E.w;
                                ea[Oa + 12] = U.x;
                                ea[Oa + 13] = U.y;
                                ea[Oa + 14] = U.z;
                                ea[Oa + 15] = U.w;
                                Oa += 16
                            }
                            if (tb && ma)if (I.length == 4 && lb)for (U = 0; U < 4; U++) {
                                N = I[U];
                                sa[eb] =
                                        N.x;
                                sa[eb + 1] = N.y;
                                sa[eb + 2] = N.z;
                                eb += 3
                            } else for (U = 0; U < 4; U++) {
                                sa[eb] = N.x;
                                sa[eb + 1] = N.y;
                                sa[eb + 2] = N.z;
                                eb += 3
                            }
                            if (rb && Ha !== undefined && za)for (U = 0; U < 4; U++) {
                                I = Ha[U];
                                Za[gb] = I.u;
                                Za[gb + 1] = I.v;
                                gb += 2
                            }
                            if (rb && db !== undefined && za)for (U = 0; U < 4; U++) {
                                I = db[U];
                                X[hb] = I.u;
                                X[hb + 1] = I.v;
                                hb += 2
                            }
                            if (sb) {
                                Ua[Wa] = Ma;
                                Ua[Wa + 1] = Ma + 1;
                                Ua[Wa + 2] = Ma + 3;
                                Ua[Wa + 3] = Ma + 1;
                                Ua[Wa + 4] = Ma + 2;
                                Ua[Wa + 5] = Ma + 3;
                                Wa += 6;
                                bb[Ja] = Ma;
                                bb[Ja + 1] = Ma + 1;
                                bb[Ja + 2] = Ma;
                                bb[Ja + 3] = Ma + 3;
                                bb[Ja + 4] = Ma + 1;
                                bb[Ja + 5] = Ma + 2;
                                bb[Ja + 6] = Ma + 2;
                                bb[Ja + 7] = Ma + 3;
                                Ja += 8;
                                Ma += 4
                            }
                        }
                    }
                    if (mb) {
                        M = 0;
                        for (H = mb.length; M <
                                H; M++) {
                            Ua[Wa] = mb[M].a;
                            Ua[Wa + 1] = mb[M].b;
                            Ua[Wa + 2] = mb[M].c;
                            Ua[Wa + 3] = mb[M].a;
                            Ua[Wa + 4] = mb[M].c;
                            Ua[Wa + 5] = mb[M].d;
                            Wa += 6
                        }
                    }
                    if (ib) {
                        e.bindBuffer(e.ARRAY_BUFFER, x.__webglVertexBuffer);
                        e.bufferData(e.ARRAY_BUFFER, Xa, J)
                    }
                    if (cb)for (fb in cb) {
                        t = cb[fb];
                        if (t.needsUpdate) {
                            e.bindBuffer(e.ARRAY_BUFFER, t.buffer);
                            e.bufferData(e.ARRAY_BUFFER, t.array, J);
                            t.needsUpdate = !1
                        }
                    }
                    if (wb) {
                        D = 0;
                        for ($ = jb.length; D < $; D++) {
                            e.bindBuffer(e.ARRAY_BUFFER, x.__webglMorphTargetsBuffers[D]);
                            e.bufferData(e.ARRAY_BUFFER, Na[D], J)
                        }
                    }
                    if (vb && La > 0) {
                        e.bindBuffer(e.ARRAY_BUFFER,
                                x.__webglColorBuffer);
                        e.bufferData(e.ARRAY_BUFFER, da, J)
                    }
                    if (tb) {
                        e.bindBuffer(e.ARRAY_BUFFER, x.__webglNormalBuffer);
                        e.bufferData(e.ARRAY_BUFFER, sa, J)
                    }
                    if (ub && Pa.hasTangents) {
                        e.bindBuffer(e.ARRAY_BUFFER, x.__webglTangentBuffer);
                        e.bufferData(e.ARRAY_BUFFER, ea, J)
                    }
                    if (rb && gb > 0) {
                        e.bindBuffer(e.ARRAY_BUFFER, x.__webglUVBuffer);
                        e.bufferData(e.ARRAY_BUFFER, Za, J)
                    }
                    if (rb && hb > 0) {
                        e.bindBuffer(e.ARRAY_BUFFER, x.__webglUV2Buffer);
                        e.bufferData(e.ARRAY_BUFFER, X, J)
                    }
                    if (sb) {
                        e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, x.__webglFaceBuffer);
                        e.bufferData(e.ELEMENT_ARRAY_BUFFER, Ua, J);
                        e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, x.__webglLineBuffer);
                        e.bufferData(e.ELEMENT_ARRAY_BUFFER, bb, J)
                    }
                    if (T > 0) {
                        e.bindBuffer(e.ARRAY_BUFFER, x.__webglSkinVertexABuffer);
                        e.bufferData(e.ARRAY_BUFFER, wa, J);
                        e.bindBuffer(e.ARRAY_BUFFER, x.__webglSkinVertexBBuffer);
                        e.bufferData(e.ARRAY_BUFFER, ua, J);
                        e.bindBuffer(e.ARRAY_BUFFER, x.__webglSkinIndicesBuffer);
                        e.bufferData(e.ARRAY_BUFFER, ha, J);
                        e.bindBuffer(e.ARRAY_BUFFER, x.__webglSkinWeightsBuffer);
                        e.bufferData(e.ARRAY_BUFFER,
                                Q, J)
                    }
                }
            }
            u.__dirtyVertices = !1;
            u.__dirtyMorphTargets = !1;
            u.__dirtyElements = !1;
            u.__dirtyUvs = !1;
            u.__dirtyNormals = !1;
            u.__dirtyTangents = !1;
            u.__dirtyColors = !1
        } else if (n instanceof THREE.Ribbon) {
            u = n.geometry;
            if (u.__dirtyVertices || u.__dirtyColors) {
                n = u;
                C = e.DYNAMIC_DRAW;
                Ka = n.vertices;
                x = n.colors;
                ma = Ka.length;
                J = x.length;
                Ha = n.__vertexArray;
                M = n.__colorArray;
                db = n.__dirtyColors;
                if (n.__dirtyVertices) {
                    for (H = 0; H < ma; H++) {
                        za = Ka[H].position;
                        B = H * 3;
                        Ha[B] = za.x;
                        Ha[B + 1] = za.y;
                        Ha[B + 2] = za.z
                    }
                    e.bindBuffer(e.ARRAY_BUFFER, n.__webglVertexBuffer);
                    e.bufferData(e.ARRAY_BUFFER, Ha, C)
                }
                if (db) {
                    for (H = 0; H < J; H++) {
                        color = x[H];
                        B = H * 3;
                        M[B] = color.r;
                        M[B + 1] = color.g;
                        M[B + 2] = color.b
                    }
                    e.bindBuffer(e.ARRAY_BUFFER, n.__webglColorBuffer);
                    e.bufferData(e.ARRAY_BUFFER, M, C)
                }
            }
            u.__dirtyVertices = !1;
            u.__dirtyColors = !1
        } else if (n instanceof THREE.Line) {
            u = n.geometry;
            if (u.__dirtyVertices || u.__dirtyColors) {
                n = u;
                C = e.DYNAMIC_DRAW;
                Ka = n.vertices;
                x = n.colors;
                ma = Ka.length;
                J = x.length;
                Ha = n.__vertexArray;
                M = n.__colorArray;
                db = n.__dirtyColors;
                if (n.__dirtyVertices) {
                    for (H = 0; H < ma; H++) {
                        za = Ka[H].position;
                        B = H * 3;
                        Ha[B] = za.x;
                        Ha[B + 1] = za.y;
                        Ha[B + 2] = za.z
                    }
                    e.bindBuffer(e.ARRAY_BUFFER, n.__webglVertexBuffer);
                    e.bufferData(e.ARRAY_BUFFER, Ha, C)
                }
                if (db) {
                    for (H = 0; H < J; H++) {
                        color = x[H];
                        B = H * 3;
                        M[B] = color.r;
                        M[B + 1] = color.g;
                        M[B + 2] = color.b
                    }
                    e.bindBuffer(e.ARRAY_BUFFER, n.__webglColorBuffer);
                    e.bufferData(e.ARRAY_BUFFER, M, C)
                }
            }
            u.__dirtyVertices = !1;
            u.__dirtyColors = !1
        } else if (n instanceof THREE.ParticleSystem) {
            u = n.geometry;
            (u.__dirtyVertices || u.__dirtyColors || n.sortParticles) && c(u, e.DYNAMIC_DRAW, n);
            u.__dirtyVertices = !1;
            u.__dirtyColors =
                    !1
        }
    }

    function L(n) {
        function C(W) {
            var U = [];
            u = 0;
            for (x = W.length; u < x; u++)W[u] == undefined ? U.push("undefined") : U.push(W[u].id);
            return U.join("_")
        }

        var u,x,B,J,M,H,I,E,N = {},O = n.morphTargets !== undefined ? n.morphTargets.length : 0;
        n.geometryGroups = {};
        B = 0;
        for (J = n.faces.length; B < J; B++) {
            M = n.faces[B];
            H = M.materials;
            I = C(H);
            N[I] == undefined && (N[I] = {hash:I,counter:0});
            E = N[I].hash + "_" + N[I].counter;
            n.geometryGroups[E] == undefined && (n.geometryGroups[E] = {faces:[],materials:H,vertices:0,numMorphTargets:O});
            M = M instanceof THREE.Face3 ?
                    3 : 4;
            if (n.geometryGroups[E].vertices + M > 65535) {
                N[I].counter += 1;
                E = N[I].hash + "_" + N[I].counter;
                n.geometryGroups[E] == undefined && (n.geometryGroups[E] = {faces:[],materials:H,vertices:0,numMorphTargets:O})
            }
            n.geometryGroups[E].faces.push(B);
            n.geometryGroups[E].vertices += M
        }
    }

    function V(n, C, u) {
        n.push({buffer:C,object:u,opaque:{list:[],count:0},transparent:{list:[],count:0}})
    }

    function z(n) {
        if (n != va) {
            switch (n) {case THREE.AdditiveBlending:e.blendEquation(e.FUNC_ADD);e.blendFunc(e.SRC_ALPHA, e.ONE);break;case THREE.SubtractiveBlending:e.blendEquation(e.FUNC_ADD);
                e.blendFunc(e.ZERO, e.ONE_MINUS_SRC_COLOR);break;case THREE.MultiplyBlending:e.blendEquation(e.FUNC_ADD);e.blendFunc(e.ZERO, e.SRC_COLOR);break;default:e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD);e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA)
            }
            va = n
        }
    }

    function K(n, C, u) {
        if ((u.width & u.width - 1) == 0 && (u.height & u.height - 1) == 0) {
            e.texParameteri(n, e.TEXTURE_WRAP_S, pa(C.wrapS));
            e.texParameteri(n, e.TEXTURE_WRAP_T, pa(C.wrapT));
            e.texParameteri(n, e.TEXTURE_MAG_FILTER, pa(C.magFilter));
            e.texParameteri(n, e.TEXTURE_MIN_FILTER, pa(C.minFilter));
            e.generateMipmap(n)
        } else {
            e.texParameteri(n, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE);
            e.texParameteri(n, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
            e.texParameteri(n, e.TEXTURE_MAG_FILTER, ra(C.magFilter));
            e.texParameteri(n, e.TEXTURE_MIN_FILTER, ra(C.minFilter))
        }
    }

    function P(n, C) {
        if (n.needsUpdate) {
            if (n.__webglInit) {
                e.bindTexture(e.TEXTURE_2D, n.__webglTexture);
                e.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, e.RGBA, e.UNSIGNED_BYTE, n.image)
            } else {
                n.__webglTexture = e.createTexture();
                e.bindTexture(e.TEXTURE_2D, n.__webglTexture);
                e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, n.image);
                n.__webglInit = !0
            }
            K(e.TEXTURE_2D, n, n.image);
            e.bindTexture(e.TEXTURE_2D, null);
            n.needsUpdate = !1
        }
        e.activeTexture(e.TEXTURE0 + C);
        e.bindTexture(e.TEXTURE_2D, n.__webglTexture)
    }

    function S(n) {
        if (n && !n.__webglFramebuffer) {
            if (n.depthBuffer === undefined)n.depthBuffer = !0;
            if (n.stencilBuffer === undefined)n.stencilBuffer = !0;
            n.__webglFramebuffer = e.createFramebuffer();
            n.__webglRenderbuffer = e.createRenderbuffer();
            n.__webglTexture = e.createTexture();
            e.bindTexture(e.TEXTURE_2D, n.__webglTexture);
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, pa(n.wrapS));
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, pa(n.wrapT));
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, pa(n.magFilter));
            e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, pa(n.minFilter));
            e.texImage2D(e.TEXTURE_2D, 0, pa(n.format), n.width, n.height, 0, pa(n.format), pa(n.type), null);
            e.bindRenderbuffer(e.RENDERBUFFER, n.__webglRenderbuffer);
            e.bindFramebuffer(e.FRAMEBUFFER,
                    n.__webglFramebuffer);
            e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, n.__webglTexture, 0);
            if (n.depthBuffer && !n.stencilBuffer) {
                e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_COMPONENT16, n.width, n.height);
                e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_ATTACHMENT, e.RENDERBUFFER, n.__webglRenderbuffer)
            } else if (n.depthBuffer && n.stencilBuffer) {
                e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_STENCIL, n.width, n.height);
                e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_STENCIL_ATTACHMENT, e.RENDERBUFFER,
                        n.__webglRenderbuffer)
            } else e.renderbufferStorage(e.RENDERBUFFER, e.RGBA4, n.width, n.height);
            e.bindTexture(e.TEXTURE_2D, null);
            e.bindRenderbuffer(e.RENDERBUFFER, null);
            e.bindFramebuffer(e.FRAMEBUFFER, null)
        }
        var C,u;
        if (n) {
            C = n.__webglFramebuffer;
            u = n.width;
            n = n.height
        } else {
            C = null;
            u = Ba;
            n = ka
        }
        if (C != Fa) {
            e.bindFramebuffer(e.FRAMEBUFFER, C);
            e.viewport(Z, na, u, n);
            Fa = C
        }
    }

    function xa(n, C) {
        var u;
        if (n == "fragment")u = e.createShader(e.FRAGMENT_SHADER); else n == "vertex" && (u = e.createShader(e.VERTEX_SHADER));
        e.shaderSource(u,
                C);
        e.compileShader(u);
        if (!e.getShaderParameter(u, e.COMPILE_STATUS)) {
            console.error(e.getShaderInfoLog(u));
            console.error(C);
            return null
        }
        return u
    }

    function ra(n) {
        switch (n) {case THREE.NearestFilter:case THREE.NearestMipMapNearestFilter:case THREE.NearestMipMapLinearFilter:return e.NEAREST;default:return e.LINEAR
        }
    }

    function pa(n) {
        switch (n) {case THREE.RepeatWrapping:return e.REPEAT;case THREE.ClampToEdgeWrapping:return e.CLAMP_TO_EDGE;case THREE.MirroredRepeatWrapping:return e.MIRRORED_REPEAT;case THREE.NearestFilter:return e.NEAREST;
            case THREE.NearestMipMapNearestFilter:return e.NEAREST_MIPMAP_NEAREST;case THREE.NearestMipMapLinearFilter:return e.NEAREST_MIPMAP_LINEAR;case THREE.LinearFilter:return e.LINEAR;case THREE.LinearMipMapNearestFilter:return e.LINEAR_MIPMAP_NEAREST;case THREE.LinearMipMapLinearFilter:return e.LINEAR_MIPMAP_LINEAR;case THREE.ByteType:return e.BYTE;case THREE.UnsignedByteType:return e.UNSIGNED_BYTE;case THREE.ShortType:return e.SHORT;case THREE.UnsignedShortType:return e.UNSIGNED_SHORT;case THREE.IntType:return e.INT;
            case THREE.UnsignedShortType:return e.UNSIGNED_INT;case THREE.FloatType:return e.FLOAT;case THREE.AlphaFormat:return e.ALPHA;case THREE.RGBFormat:return e.RGB;case THREE.RGBAFormat:return e.RGBA;case THREE.LuminanceFormat:return e.LUMINANCE;case THREE.LuminanceAlphaFormat:return e.LUMINANCE_ALPHA
        }
        return 0
    }

    var e,fa = document.createElement("canvas"),ca = [],ya = null,Fa = null,Ea = !0,Y = this,qa = null,ta = null,va = null,ia = null,Z = 0,na = 0,Ba = 0,ka = 0,la = [new THREE.Vector4,new THREE.Vector4,new THREE.Vector4,new THREE.Vector4,
        new THREE.Vector4,new THREE.Vector4],Da = new THREE.Matrix4,Sa = new Float32Array(16),$a = new Float32Array(16),Ya = new THREE.Vector4,Ta = {ambient:[0,0,0],directional:{length:0,colors:[],positions:[]},point:{length:0,colors:[],positions:[],distances:[]}},R = !0,aa = !0,oa = new THREE.Color(0),Ca = 0;
    if (b) {
        if (b.stencil != undefined)R = b.stencil;
        if (b.antialias !== undefined)aa = b.antialias;
        b.clearColor !== undefined && oa.setHex(b.clearColor);
        if (b.clearAlpha !== undefined)Ca = b.clearAlpha
    }
    this.maxMorphTargets = 8;
    this.domElement =
            fa;
    this.autoClear = !0;
    this.sortObjects = !0;
    (function(n, C, u, x) {
        try {
            if (!(e = fa.getContext("experimental-webgl", {antialias:n,stencil:x})))throw"Error creating WebGL context.";
        } catch(B) {
            console.error(B)
        }
        e.clearColor(0, 0, 0, 1);
        e.clearDepth(1);
        e.enable(e.DEPTH_TEST);
        e.depthFunc(e.LEQUAL);
        e.frontFace(e.CCW);
        e.cullFace(e.BACK);
        e.enable(e.CULL_FACE);
        e.enable(e.BLEND);
        e.blendEquation(e.FUNC_ADD);
        e.blendFunc(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA);
        e.clearColor(C.r, C.g, C.b, u)
    })(aa, oa, Ca, R);
    this.context = e;
    
    if (R) {
        var ja =
        {};
        ja.vertices = new Float32Array(12);
        ja.faces = new Uint16Array(6);
        ja.darkness = 0.5;
        ja.vertices[0] = -20;
        ja.vertices[1] = -20;
        ja.vertices[2] = -1;
        ja.vertices[3] = 20;
        ja.vertices[4] = -20;
        ja.vertices[5] = -1;
        ja.vertices[6] = 20;
        ja.vertices[7] = 20;
        ja.vertices[8] = -1;
        ja.vertices[9] = -20;
        ja.vertices[10] = 20;
        ja.vertices[11] = -1;
        ja.faces[0] = 0;
        ja.faces[1] = 1;
        ja.faces[2] = 2;
        ja.faces[3] = 0;
        ja.faces[4] = 2;
        ja.faces[5] = 3;
        ja.vertexBuffer = e.createBuffer();
        ja.elementBuffer = e.createBuffer();
        e.bindBuffer(e.ARRAY_BUFFER, ja.vertexBuffer);
        e.bufferData(e.ARRAY_BUFFER,
                ja.vertices, e.STATIC_DRAW);
        e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, ja.elementBuffer);
        e.bufferData(e.ELEMENT_ARRAY_BUFFER, ja.faces, e.STATIC_DRAW);
        ja.program = e.createProgram();
        e.attachShader(ja.program, xa("fragment", THREE.ShaderLib.shadowPost.fragmentShader));
        e.attachShader(ja.program, xa("vertex", THREE.ShaderLib.shadowPost.vertexShader));
        e.linkProgram(ja.program);
        ja.vertexLocation = e.getAttribLocation(ja.program, "position");
        ja.projectionLocation = e.getUniformLocation(ja.program, "projectionMatrix");
        ja.darknessLocation =
                e.getUniformLocation(ja.program, "darkness")
    }
    var ga = {};
    ga.vertices = new Float32Array(16);
    ga.faces = new Uint16Array(6);
    b = 0;
    ga.vertices[b++] = -1;
    ga.vertices[b++] = -1;
    ga.vertices[b++] = 0;
    ga.vertices[b++] = 0;
    ga.vertices[b++] = 1;
    ga.vertices[b++] = -1;
    ga.vertices[b++] = 1;
    ga.vertices[b++] = 0;
    ga.vertices[b++] = 1;
    ga.vertices[b++] = 1;
    ga.vertices[b++] = 1;
    ga.vertices[b++] = 1;
    ga.vertices[b++] = -1;
    ga.vertices[b++] = 1;
    ga.vertices[b++] = 0;
    ga.vertices[b++] = 1;
    b = 0;
    ga.faces[b++] = 0;
    ga.faces[b++] = 1;
    ga.faces[b++] = 2;
    ga.faces[b++] = 0;
    ga.faces[b++] =
            2;
    ga.faces[b++] = 3;
    ga.vertexBuffer = e.createBuffer();
    ga.elementBuffer = e.createBuffer();
    ga.tempTexture = e.createTexture();
    ga.occlusionTexture = e.createTexture();
    e.bindBuffer(e.ARRAY_BUFFER, ga.vertexBuffer);
    e.bufferData(e.ARRAY_BUFFER, ga.vertices, e.STATIC_DRAW);
    e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, ga.elementBuffer);
    e.bufferData(e.ELEMENT_ARRAY_BUFFER, ga.faces, e.STATIC_DRAW);
    e.bindTexture(e.TEXTURE_2D, ga.tempTexture);
    e.texImage2D(e.TEXTURE_2D, 0, e.RGB, 16, 16, 0, e.RGB, e.UNSIGNED_BYTE, null);
    e.texParameteri(e.TEXTURE_2D,
            e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE);
    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.NEAREST);
    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST);
    e.bindTexture(e.TEXTURE_2D, ga.occlusionTexture);
    e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, 16, 16, 0, e.RGBA, e.UNSIGNED_BYTE, null);
    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE);
    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER,
            e.NEAREST);
    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.NEAREST);
    if (e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS) <= 0) {
        ga.hasVertexTexture = !1;
        ga.program = e.createProgram();
        e.attachShader(ga.program, xa("fragment", THREE.ShaderLib.lensFlare.fragmentShader));
        e.attachShader(ga.program, xa("vertex", THREE.ShaderLib.lensFlare.vertexShader))
    } else {
        ga.hasVertexTexture = !0;
        ga.program = e.createProgram();
        e.attachShader(ga.program, xa("fragment", THREE.ShaderLib.lensFlareVertexTexture.fragmentShader));
        e.attachShader(ga.program,
                xa("vertex", THREE.ShaderLib.lensFlareVertexTexture.vertexShader))
    }
    e.linkProgram(ga.program);
    ga.attributes = {};
    ga.uniforms = {};
    ga.attributes.vertex = e.getAttribLocation(ga.program, "position");
    ga.attributes.uv = e.getAttribLocation(ga.program, "UV");
    ga.uniforms.renderType = e.getUniformLocation(ga.program, "renderType");
    ga.uniforms.map = e.getUniformLocation(ga.program, "map");
    ga.uniforms.occlusionMap = e.getUniformLocation(ga.program, "occlusionMap");
    ga.uniforms.opacity = e.getUniformLocation(ga.program, "opacity");
    ga.uniforms.scale = e.getUniformLocation(ga.program, "scale");
    ga.uniforms.rotation = e.getUniformLocation(ga.program, "rotation");
    ga.uniforms.screenPosition = e.getUniformLocation(ga.program, "screenPosition");
    _sprite = {};
    _sprite.vertices = new Float32Array(16);
    _sprite.faces = new Uint16Array(6);
    b = 0;
    _sprite.vertices[b++] = -1;
    _sprite.vertices[b++] = -1;
    _sprite.vertices[b++] = 0;
    _sprite.vertices[b++] = 0;
    _sprite.vertices[b++] = 1;
    _sprite.vertices[b++] = -1;
    _sprite.vertices[b++] = 1;
    _sprite.vertices[b++] = 0;
    _sprite.vertices[b++] =
            1;
    _sprite.vertices[b++] = 1;
    _sprite.vertices[b++] = 1;
    _sprite.vertices[b++] = 1;
    _sprite.vertices[b++] = -1;
    _sprite.vertices[b++] = 1;
    _sprite.vertices[b++] = 0;
    _sprite.vertices[b++] = 1;
    b = 0;
    _sprite.faces[b++] = 0;
    _sprite.faces[b++] = 1;
    _sprite.faces[b++] = 2;
    _sprite.faces[b++] = 0;
    _sprite.faces[b++] = 2;
    _sprite.faces[b++] = 3;
    _sprite.vertexBuffer = e.createBuffer();
    _sprite.elementBuffer = e.createBuffer();
    e.bindBuffer(e.ARRAY_BUFFER, _sprite.vertexBuffer);
    e.bufferData(e.ARRAY_BUFFER, _sprite.vertices, e.STATIC_DRAW);
    e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,
            _sprite.elementBuffer);
    e.bufferData(e.ELEMENT_ARRAY_BUFFER, _sprite.faces, e.STATIC_DRAW);
    _sprite.program = e.createProgram();
    e.attachShader(_sprite.program, xa("fragment", THREE.ShaderLib.sprite.fragmentShader));
    e.attachShader(_sprite.program, xa("vertex", THREE.ShaderLib.sprite.vertexShader));
    e.linkProgram(_sprite.program);
    _sprite.attributes = {};
    _sprite.uniforms = {};
    _sprite.attributes.vertex = e.getAttribLocation(_sprite.program, "position");
    _sprite.attributes.uv = e.getAttribLocation(_sprite.program, "UV");
    _sprite.uniforms.map =
            e.getUniformLocation(_sprite.program, "map");
    _sprite.uniforms.opacity = e.getUniformLocation(_sprite.program, "opacity");
    _sprite.uniforms.scale = e.getUniformLocation(_sprite.program, "scale");
    _sprite.uniforms.rotation = e.getUniformLocation(_sprite.program, "rotation");
    _sprite.uniforms.screenPosition = e.getUniformLocation(_sprite.program, "screenPosition");
    this.setSize = function(n, C) {
        fa.width = n;
        fa.height = C;
        this.setViewport(0, 0, fa.width, fa.height)
    };
    this.setViewport = function(n, C, u, x) {
        Z = n;
        na = C;
        Ba = u;
        ka = x;
        e.viewport(Z,
                na, Ba, ka)
    };
    this.setScissor = function(n, C, u, x) {
        e.scissor(n, C, u, x)
    };
    this.enableScissorTest = function(n) {
        n ? e.enable(e.SCISSOR_TEST) : e.disable(e.SCISSOR_TEST)
    };
    this.enableDepthBufferWrite = function(n) {
        Ea = n;
        e.depthMask(n)
    };
    this.setClearColorHex = function(n, C) {
        var u = new THREE.Color(n);
        e.clearColor(u.r, u.g, u.b, C)
    };
    this.setClearColor = function(n, C) {
        e.clearColor(n.r, n.g, n.b, C)
    };
    this.clear = function() {
        e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT | e.STENCIL_BUFFER_BIT)
    };
    this.setStencilShadowDarkness = function(n) {
        ja.darkness =
                n
    };
    this.initMaterial = function(n, C, u, x) {
        var B,J,M;
        if (n instanceof THREE.MeshDepthMaterial)M = "depth"; else if (n instanceof THREE.ShadowVolumeDynamicMaterial)M = "shadowVolumeDynamic"; else if (n instanceof THREE.MeshNormalMaterial)M = "normal"; else if (n instanceof THREE.MeshBasicMaterial)M = "basic"; else if (n instanceof THREE.MeshLambertMaterial)M = "lambert"; else if (n instanceof THREE.MeshPhongMaterial)M = "phong"; else if (n instanceof THREE.LineBasicMaterial)M = "basic"; else n instanceof THREE.ParticleBasicMaterial &&
        (M = "particle_basic");
        if (M) {
            var H = THREE.ShaderLib[M];
            n.uniforms = Uniforms.clone(H.uniforms);
            n.vertexShader = H.vertexShader;
            n.fragmentShader = H.fragmentShader
        }
        var I,E,N;
        I = N = H = 0;
        for (E = C.length; I < E; I++) {
            J = C[I];
            J instanceof THREE.DirectionalLight && N++;
            J instanceof THREE.PointLight && H++
        }
        if (H + N <= 4)C = N; else {
            C = Math.ceil(4 * N / (H + N));
            H = 4 - C
        }
        J = {directional:C,point:H};
        N = 50;
        if (x !== undefined && x instanceof THREE.SkinnedMesh)N = x.bones.length;
        var O;
        a:{
            I = n.fragmentShader;
            E = n.vertexShader;
            H = n.uniforms;
            C = n.attributes;
            u = {map:!!n.map,
                envMap:!!n.envMap,lightMap:!!n.lightMap,vertexColors:n.vertexColors,fog:u,sizeAttenuation:n.sizeAttenuation,skinning:n.skinning,morphTargets:n.morphTargets,maxMorphTargets:this.maxMorphTargets,maxDirLights:J.directional,maxPointLights:J.point,maxBones:N};
            var W;
            J = [];
            if (M)J.push(M); else {
                J.push(I);
                J.push(E)
            }
            for (W in u) {
                J.push(W);
                J.push(u[W])
            }
            M = J.join();
            W = 0;
            for (J = ca.length; W < J; W++)if (ca[W].code == M) {
                O = ca[W].program;
                break a
            }
            W = e.createProgram();
            prefix_fragment = ["#ifdef GL_ES\nprecision highp float;\n#endif",
                "#define MAX_DIR_LIGHTS " + u.maxDirLights,"#define MAX_POINT_LIGHTS " + u.maxPointLights,u.fog ? "#define USE_FOG" : "",u.fog instanceof THREE.FogExp2 ? "#define FOG_EXP2" : "",u.map ? "#define USE_MAP" : "",u.envMap ? "#define USE_ENVMAP" : "",u.lightMap ? "#define USE_LIGHTMAP" : "",u.vertexColors ? "#define USE_COLOR" : "","uniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n"].join("\n");
            prefix_vertex = [e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS) > 0 ? "#define VERTEX_TEXTURES" : "","#define MAX_DIR_LIGHTS " + u.maxDirLights,
                "#define MAX_POINT_LIGHTS " + u.maxPointLights,"#define MAX_BONES " + u.maxBones,u.map ? "#define USE_MAP" : "",u.envMap ? "#define USE_ENVMAP" : "",u.lightMap ? "#define USE_LIGHTMAP" : "",u.vertexColors ? "#define USE_COLOR" : "",u.skinning ? "#define USE_SKINNING" : "",u.morphTargets ? "#define USE_MORPHTARGETS" : "",u.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "","uniform mat4 objectMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\nuniform mat4 cameraInverseMatrix;\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\n#ifdef USE_COLOR\nattribute vec3 color;\n#endif\n#ifdef USE_MORPHTARGETS\nattribute vec3 morphTarget0;\nattribute vec3 morphTarget1;\nattribute vec3 morphTarget2;\nattribute vec3 morphTarget3;\nattribute vec3 morphTarget4;\nattribute vec3 morphTarget5;\nattribute vec3 morphTarget6;\nattribute vec3 morphTarget7;\n#endif\n#ifdef USE_SKINNING\nattribute vec4 skinVertexA;\nattribute vec4 skinVertexB;\nattribute vec4 skinIndex;\nattribute vec4 skinWeight;\n#endif\n"].join("\n");
            e.attachShader(W, xa("fragment", prefix_fragment + I));
            e.attachShader(W, xa("vertex", prefix_vertex + E));
            e.linkProgram(W);
            e.getProgramParameter(W, e.LINK_STATUS) || console.error("Could not initialise shader\nVALIDATE_STATUS: " + e.getProgramParameter(W, e.VALIDATE_STATUS) + ", gl error [" + e.getError() + "]");
            W.uniforms = {};
            W.attributes = {};
            var U;
            I = ["viewMatrix","modelViewMatrix","projectionMatrix","normalMatrix","objectMatrix","cameraPosition","cameraInverseMatrix","boneGlobalMatrices","morphTargetInfluences"];
            for (U in H)I.push(U);
            U = I;
            H = 0;
            for (I = U.length; H < I; H++) {
                E = U[H];
                W.uniforms[E] = e.getUniformLocation(W, E)
            }
            I = ["position","normal","uv","uv2","tangent","color","skinVertexA","skinVertexB","skinIndex","skinWeight"];
            for (U = 0; U < u.maxMorphTargets; U++)I.push("morphTarget" + U);
            for (O in C)I.push(O);
            O = I;
            U = 0;
            for (C = O.length; U < C; U++) {
                u = O[U];
                W.attributes[u] = e.getAttribLocation(W, u)
            }
            ca.push({program:W,code:M});
            O = W
        }
        n.program = O;
        O = n.program.attributes;
        e.enableVertexAttribArray(O.position);
        O.color >= 0 && e.enableVertexAttribArray(O.color);
        O.normal >=
                0 && e.enableVertexAttribArray(O.normal);
        O.tangent >= 0 && e.enableVertexAttribArray(O.tangent);
        if (n.skinning && O.skinVertexA >= 0 && O.skinVertexB >= 0 && O.skinIndex >= 0 && O.skinWeight >= 0) {
            e.enableVertexAttribArray(O.skinVertexA);
            e.enableVertexAttribArray(O.skinVertexB);
            e.enableVertexAttribArray(O.skinIndex);
            e.enableVertexAttribArray(O.skinWeight)
        }
        for (B in n.attributes)O[B] >= 0 && e.enableVertexAttribArray(O[B]);
        if (n.morphTargets) {
            n.numSupportedMorphTargets = 0;
            if (O.morphTarget0 >= 0) {
                e.enableVertexAttribArray(O.morphTarget0);
                n.numSupportedMorphTargets++
            }
            if (O.morphTarget1 >= 0) {
                e.enableVertexAttribArray(O.morphTarget1);
                n.numSupportedMorphTargets++
            }
            if (O.morphTarget2 >= 0) {
                e.enableVertexAttribArray(O.morphTarget2);
                n.numSupportedMorphTargets++
            }
            if (O.morphTarget3 >= 0) {
                e.enableVertexAttribArray(O.morphTarget3);
                n.numSupportedMorphTargets++
            }
            if (O.morphTarget4 >= 0) {
                e.enableVertexAttribArray(O.morphTarget4);
                n.numSupportedMorphTargets++
            }
            if (O.morphTarget5 >= 0) {
                e.enableVertexAttribArray(O.morphTarget5);
                n.numSupportedMorphTargets++
            }
            if (O.morphTarget6 >=
                    0) {
                e.enableVertexAttribArray(O.morphTarget6);
                n.numSupportedMorphTargets++
            }
            if (O.morphTarget7 >= 0) {
                e.enableVertexAttribArray(O.morphTarget7);
                n.numSupportedMorphTargets++
            }
            x.__webglMorphTargetInfluences = new Float32Array(this.maxMorphTargets);
            n = 0;
            for (B = this.maxMorphTargets; n < B; n++)x.__webglMorphTargetInfluences[n] = 0
        }
    };
    this.render = function(n, C, u, x) {
        var B,J,M,H,I,E,N,O,W = n.lights,U = n.fog;
        C.matrixAutoUpdate && C.updateMatrix();
        n.update(undefined, !1, C);
        C.matrixWorldInverse.flattenToArray($a);
        C.projectionMatrix.flattenToArray(Sa);
        Da.multiply(C.projectionMatrix, C.matrixWorldInverse);
        k(Da);
        this.initWebGLObjects(n);
        S(u);
        (this.autoClear || x) && this.clear();
        I = n.__webglObjects.length;
        for (x = 0; x < I; x++) {
            B = n.__webglObjects[x];
            N = B.object;
            if (N.visible)if (!(N instanceof THREE.Mesh) || m(N)) {
                N.matrixWorld.flattenToArray(N._objectMatrixArray);
                F(N, C);
                w(B);
                B.render = !0;
                if (this.sortObjects) {
                    Ya.copy(N.position);
                    Da.multiplyVector3(Ya);
                    B.z = Ya.z
                }
            } else B.render = !1; else B.render = !1
        }
        this.sortObjects && n.__webglObjects.sort(y);
        E = n.__webglObjectsImmediate.length;
        for (x = 0; x < E; x++) {
            B = n.__webglObjectsImmediate[x];
            N = B.object;
            if (N.visible) {
                N.matrixAutoUpdate && N.matrixWorld.flattenToArray(N._objectMatrixArray);
                F(N, C);
                o(B)
            }
        }
        z(THREE.NormalBlending);
        for (x = 0; x < I; x++) {
            B = n.__webglObjects[x];
            if (B.render) {
                N = B.object;
                O = B.buffer;
                M = B.opaque;
                h(N);
                for (B = 0; B < M.count; B++) {
                    H = M.list[B];
                    j(H.depthTest);
                    f(C, W, U, H, O, N)
                }
            }
        }
        for (x = 0; x < E; x++) {
            B = n.__webglObjectsImmediate[x];
            N = B.object;
            if (N.visible) {
                M = B.opaque;
                h(N);
                for (B = 0; B < M.count; B++) {
                    H = M.list[B];
                    j(H.depthTest);
                    J = d(C, W, U, H, N);
                    N.render(function(za) {
                        g(za,
                                J, H.shading)
                    })
                }
            }
        }
        for (x = 0; x < I; x++) {
            B = n.__webglObjects[x];
            if (B.render) {
                N = B.object;
                O = B.buffer;
                M = B.transparent;
                h(N);
                for (B = 0; B < M.count; B++) {
                    H = M.list[B];
                    z(H.blending);
                    j(H.depthTest);
                    f(C, W, U, H, O, N)
                }
            }
        }
        for (x = 0; x < E; x++) {
            B = n.__webglObjectsImmediate[x];
            N = B.object;
            if (N.visible) {
                M = B.transparent;
                h(N);
                for (B = 0; B < M.count; B++) {
                    H = M.list[B];
                    z(H.blending);
                    j(H.depthTest);
                    J = d(C, W, U, H, N);
                    N.render(function(za) {
                        g(za, J, H.shading)
                    })
                }
            }
        }
        n.__webglSprites.length && renderSprites(n);
        R && n.__webglShadowVolumes.length && n.lights.length &&
        v(n);
        n.__webglLensFlares.length && A(n, C);
        if (u && u.minFilter !== THREE.NearestFilter && u.minFilter !== THREE.LinearFilter) {
            e.bindTexture(e.TEXTURE_2D, u.__webglTexture);
            e.generateMipmap(e.TEXTURE_2D);
            e.bindTexture(e.TEXTURE_2D, null)
        }
    };
    this.initWebGLObjects = function(n) {
        if (!n.__webglObjects) {
            n.__webglObjects = [];
            n.__webglObjectsImmediate = [];
            n.__webglShadowVolumes = [];
            n.__webglLensFlares = [];
            n.__webglSprites = []
        }
        for (; n.__objectsAdded.length;) {
            var C = n.__objectsAdded[0],u = n,x = void 0,B = void 0,J = void 0;
            if (C._modelViewMatrix ==
                    undefined) {
                C._modelViewMatrix = new THREE.Matrix4;
                C._normalMatrixArray = new Float32Array(9);
                C._modelViewMatrixArray = new Float32Array(16);
                C._objectMatrixArray = new Float32Array(16);
                C.matrixWorld.flattenToArray(C._objectMatrixArray)
            }
            if (C instanceof THREE.Mesh) {
                B = C.geometry;
                B.geometryGroups == undefined && L(B);
                for (x in B.geometryGroups) {
                    J = B.geometryGroups[x];
                    if (!J.__webglVertexBuffer) {
                        var M = J;
                        M.__webglVertexBuffer = e.createBuffer();
                        M.__webglNormalBuffer = e.createBuffer();
                        M.__webglTangentBuffer = e.createBuffer();
                        M.__webglColorBuffer = e.createBuffer();
                        M.__webglUVBuffer = e.createBuffer();
                        M.__webglUV2Buffer = e.createBuffer();
                        M.__webglSkinVertexABuffer = e.createBuffer();
                        M.__webglSkinVertexBBuffer = e.createBuffer();
                        M.__webglSkinIndicesBuffer = e.createBuffer();
                        M.__webglSkinWeightsBuffer = e.createBuffer();
                        M.__webglFaceBuffer = e.createBuffer();
                        M.__webglLineBuffer = e.createBuffer();
                        if (M.numMorphTargets) {
                            var H = void 0,I = void 0;
                            M.__webglMorphTargetsBuffers = [];
                            H = 0;
                            for (I = M.numMorphTargets; H < I; H++)M.__webglMorphTargetsBuffers.push(e.createBuffer())
                        }
                        M =
                                J;
                        H = C;
                        var E = void 0,N = void 0,O = void 0;
                        O = void 0;
                        var W = void 0,U = void 0,za = void 0,Ka = za = I = 0;
                        N = void 0;
                        O = void 0;
                        var ma = void 0;
                        E = void 0;
                        N = void 0;
                        W = H.geometry;
                        ma = W.faces;
                        U = M.faces;
                        E = 0;
                        for (N = U.length; E < N; E++) {
                            O = U[E];
                            O = ma[O];
                            if (O instanceof THREE.Face3) {
                                I += 3;
                                za += 1;
                                Ka += 3
                            } else if (O instanceof THREE.Face4) {
                                I += 4;
                                za += 2;
                                Ka += 4
                            }
                        }
                        E = M;
                        N = H;
                        ma = void 0;
                        U = void 0;
                        var Ha = void 0,db = void 0;
                        Ha = void 0;
                        O = [];
                        ma = 0;
                        for (U = N.materials.length; ma < U; ma++) {
                            Ha = N.materials[ma];
                            if (Ha instanceof THREE.MeshFaceMaterial) {
                                Ha = 0;
                                for (l = E.materials.length; Ha <
                                        l; Ha++)(db = E.materials[Ha]) && O.push(db)
                            } else(db = Ha) && O.push(db)
                        }
                        E = O;
                        a:{
                            N = void 0;
                            ma = void 0;
                            U = E.length;
                            for (N = 0; N < U; N++) {
                                ma = E[N];
                                if (ma.map || ma.lightMap || ma instanceof THREE.MeshShaderMaterial) {
                                    N = !0;
                                    break a
                                }
                            }
                            N = !1
                        }
                        a:{
                            ma = E;
                            U = void 0;
                            O = void 0;
                            Ha = ma.length;
                            for (U = 0; U < Ha; U++) {
                                O = ma[U];
                                if (!(O instanceof THREE.MeshBasicMaterial && !O.envMap || O instanceof THREE.MeshDepthMaterial)) {
                                    ma = O && O.shading != undefined && O.shading == THREE.SmoothShading ? THREE.SmoothShading : THREE.FlatShading;
                                    break a
                                }
                            }
                            ma = !1
                        }
                        a:{
                            U = void 0;
                            O = void 0;
                            Ha =
                                    E.length;
                            for (U = 0; U < Ha; U++) {
                                O = E[U];
                                if (O.vertexColors) {
                                    O = O.vertexColors;
                                    break a
                                }
                            }
                            O = !1
                        }
                        M.__vertexArray = new Float32Array(I * 3);
                        if (ma)M.__normalArray = new Float32Array(I * 3);
                        if (W.hasTangents)M.__tangentArray = new Float32Array(I * 4);
                        if (O)M.__colorArray = new Float32Array(I * 3);
                        if (N) {
                            if (W.faceUvs.length > 0 || W.faceVertexUvs.length > 0)M.__uvArray = new Float32Array(I * 2);
                            if (W.faceUvs.length > 1 || W.faceVertexUvs.length > 1)M.__uv2Array = new Float32Array(I * 2)
                        }
                        if (H.geometry.skinWeights.length && H.geometry.skinIndices.length) {
                            M.__skinVertexAArray =
                                    new Float32Array(I * 4);
                            M.__skinVertexBArray = new Float32Array(I * 4);
                            M.__skinIndexArray = new Float32Array(I * 4);
                            M.__skinWeightArray = new Float32Array(I * 4)
                        }
                        M.__faceArray = new Uint16Array(za * 3 + (H.geometry.edgeFaces ? H.geometry.edgeFaces.length * 6 : 0));
                        M.__lineArray = new Uint16Array(Ka * 2);
                        if (M.numMorphTargets) {
                            M.__morphTargetsArrays = [];
                            W = 0;
                            for (U = M.numMorphTargets; W < U; W++)M.__morphTargetsArrays.push(new Float32Array(I * 3))
                        }
                        M.__needsSmoothNormals = ma == THREE.SmoothShading;
                        M.__uvType = N;
                        M.__vertexColorType = O;
                        M.__normalType =
                                ma;
                        M.__webglFaceCount = za * 3 + (H.geometry.edgeFaces ? H.geometry.edgeFaces.length * 6 : 0);
                        M.__webglLineCount = Ka * 2;
                        W = 0;
                        for (U = E.length; W < U; W++)if (E[W].attributes) {
                            M.__webglCustomAttributes = {};
                            for (a in E[W].attributes) {
                                N = E[W].attributes[a];
                                za = 1;
                                if (N.type === "v2")za = 2; else if (N.type === "v3")za = 3; else if (N.type === "v4")za = 4; else N.type === "c" && (za = 3);
                                N.size = za;
                                N.needsUpdate = !0;
                                N.array = new Float32Array(I * za);
                                N.buffer = e.createBuffer();
                                M.__webglCustomAttributes[a] = N
                            }
                        }
                        B.__dirtyVertices = !0;
                        B.__dirtyMorphTargets = !0;
                        B.__dirtyElements =
                                !0;
                        B.__dirtyUvs = !0;
                        B.__dirtyNormals = !0;
                        B.__dirtyTangents = !0;
                        B.__dirtyColors = !0
                    }
                    C instanceof THREE.ShadowVolume ? V(u.__webglShadowVolumes, J, C) : V(u.__webglObjects, J, C)
                }
            } else if (C instanceof THREE.LensFlare)V(u.__webglLensFlares, undefined, C); else if (C instanceof THREE.Ribbon) {
                B = C.geometry;
                if (!B.__webglVertexBuffer) {
                    x = B;
                    x.__webglVertexBuffer = e.createBuffer();
                    x.__webglColorBuffer = e.createBuffer();
                    x = B;
                    J = x.vertices.length;
                    x.__vertexArray = new Float32Array(J * 3);
                    x.__colorArray = new Float32Array(J * 3);
                    x.__webglVertexCount =
                            J;
                    B.__dirtyVertices = !0;
                    B.__dirtyColors = !0
                }
                V(u.__webglObjects, B, C)
            } else if (C instanceof THREE.Line) {
                B = C.geometry;
                if (!B.__webglVertexBuffer) {
                    x = B;
                    x.__webglVertexBuffer = e.createBuffer();
                    x.__webglColorBuffer = e.createBuffer();
                    x = B;
                    J = x.vertices.length;
                    x.__vertexArray = new Float32Array(J * 3);
                    x.__colorArray = new Float32Array(J * 3);
                    x.__webglLineCount = J;
                    B.__dirtyVertices = !0;
                    B.__dirtyColors = !0
                }
                V(u.__webglObjects, B, C)
            } else if (C instanceof THREE.ParticleSystem) {
                B = C.geometry;
                if (!B.__webglVertexBuffer) {
                    x = B;
                    x.__webglVertexBuffer =
                            e.createBuffer();
                    x.__webglColorBuffer = e.createBuffer();
                    x = B;
                    J = x.vertices.length;
                    x.__vertexArray = new Float32Array(J * 3);
                    x.__colorArray = new Float32Array(J * 3);
                    x.__sortArray = [];
                    x.__webglParticleCount = J;
                    B.__dirtyVertices = !0;
                    B.__dirtyColors = !0
                }
                V(u.__webglObjects, B, C)
            } else THREE.MarchingCubes !== undefined && C instanceof THREE.MarchingCubes && u.__webglObjectsImmediate.push({object:C,opaque:{list:[],count:0},transparent:{list:[],count:0}});
            n.__objectsAdded.splice(0, 1)
        }
        for (; n.__objectsRemoved.length;) {
            C = n.__objectsRemoved[0];
            u = n;
            B = void 0;
            x = void 0;
            for (B = u.__webglObjects.length - 1; B >= 0; B--) {
                x = u.__webglObjects[B].object;
                C == x && u.__webglObjects.splice(B, 1)
            }
            n.__objectsRemoved.splice(0, 1)
        }
        C = 0;
        for (u = n.__webglObjects.length; C < u; C++)G(n.__webglObjects[C].object, n);
        C = 0;
        for (u = n.__webglShadowVolumes.length; C < u; C++)G(n.__webglShadowVolumes[C].object, n);
        C = 0;
        for (u = n.__webglLensFlares.length; C < u; C++)G(n.__webglLensFlares[C].object, n);
        C = 0;
        for (u = n.__webglSprites.length; C < u; C++)G(n.__webglSprites[C].object, n)
    };
    this.setFaceCulling = function(n, C) {
        if (n) {
            !C || C == "ccw" ? e.frontFace(e.CCW) : e.frontFace(e.CW);
            if (n == "back")e.cullFace(e.BACK); else n == "front" ? e.cullFace(e.FRONT) : e.cullFace(e.FRONT_AND_BACK);
            e.enable(e.CULL_FACE)
        } else e.disable(e.CULL_FACE)
    };
    this.supportsVertexTextures = function() {
        return e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS) > 0
    }
};
THREE.WebGLRenderTarget = function(b, c, d) {
    this.width = b;
    this.height = c;
    d = d || {};
    this.wrapS = d.wrapS !== undefined ? d.wrapS : THREE.ClampToEdgeWrapping;
    this.wrapT = d.wrapT !== undefined ? d.wrapT : THREE.ClampToEdgeWrapping;
    this.magFilter = d.magFilter !== undefined ? d.magFilter : THREE.LinearFilter;
    this.minFilter = d.minFilter !== undefined ? d.minFilter : THREE.LinearMipMapLinearFilter;
    this.format = d.format !== undefined ? d.format : THREE.RGBFormat;
    this.type = d.type !== undefined ? d.type : THREE.UnsignedByteType;
    this.depthBuffer = d.depthBuffer !==
            undefined ? d.depthBuffer : !0;
    this.stencilBuffer = d.stencilBuffer !== undefined ? d.stencilBuffer : !0
};
THREE.SoundRenderer = function() {
    this.volume = 1;
    this.domElement = document.createElement("div");
    this.domElement.id = "THREESound";
    this.cameraPosition = new THREE.Vector3;
    this.soundPosition = new THREE.Vector3;
    this.render = function(b, c, d) {
        d && b.update(undefined, !1, c);
        d = b.sounds;
        var f,g = d.length;
        for (f = 0; f < g; f++) {
            b = d[f];
            this.soundPosition.set(b.matrixWorld.n14, b.matrixWorld.n24, b.matrixWorld.n34);
            this.soundPosition.subSelf(c.position);
            if (b.isPlaying && b.isLoaded) {
                b.isAddedToDOM || b.addToDOM(this.domElement);
                b.calculateVolumeAndPan(this.soundPosition)
            }
        }
    }
};
THREE.RenderableVertex = function() {
    this.positionWorld = new THREE.Vector3;
    this.positionScreen = new THREE.Vector4;
    this.visible = !0
};
THREE.RenderableVertex.prototype.copy = function(b) {
    this.positionWorld.copy(b.positionWorld);
    this.positionScreen.copy(b.positionScreen)
};
THREE.RenderableFace3 = function() {
    this.v1 = new THREE.RenderableVertex;
    this.v2 = new THREE.RenderableVertex;
    this.v3 = new THREE.RenderableVertex;
    this.centroidWorld = new THREE.Vector3;
    this.centroidScreen = new THREE.Vector3;
    this.normalWorld = new THREE.Vector3;
    this.vertexNormalsWorld = [new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];
    this.faceMaterials = this.meshMaterials = null;
    this.overdraw = !1;
    this.uvs = [
        []
    ];
    this.z = null
};
THREE.RenderableFace4 = function() {
    this.v1 = new THREE.RenderableVertex;
    this.v2 = new THREE.RenderableVertex;
    this.v3 = new THREE.RenderableVertex;
    this.v4 = new THREE.RenderableVertex;
    this.centroidWorld = new THREE.Vector3;
    this.centroidScreen = new THREE.Vector3;
    this.normalWorld = new THREE.Vector3;
    this.vertexNormalsWorld = [new THREE.Vector3,new THREE.Vector3,new THREE.Vector3,new THREE.Vector3];
    this.faceMaterials = this.meshMaterials = null;
    this.overdraw = !1;
    this.uvs = [
        []
    ];
    this.z = null
};
THREE.RenderableObject = function() {
    this.z = this.object = null
};
THREE.RenderableParticle = function() {
    this.rotation = this.z = this.y = this.x = null;
    this.scale = new THREE.Vector2;
    this.materials = null
};
THREE.RenderableLine = function() {
    this.z = null;
    this.v1 = new THREE.RenderableVertex;
    this.v2 = new THREE.RenderableVertex;
    this.materials = null
};
THREE.PlaneCollider = function(b, c) {
    this.point = b;
    this.normal = c
};
THREE.SphereCollider = function(b, c) {
    this.center = b;
    this.radius = c;
    this.radiusSq = c * c
};
THREE.BoxCollider = function(b, c) {
    this.min = b;
    this.max = c;
    this.dynamic = !0
};
THREE.MeshCollider = function(b, c, d, f) {
    this.vertices = b;
    this.faces = c;
    this.normals = d;
    this.box = f;
    this.numFaces = this.faces.length
};
THREE.CollisionSystem = function() {
    this.colliders = [];
    this.hits = []
};
THREE.Collisions = new THREE.CollisionSystem;
THREE.CollisionSystem.prototype.rayCastAll = function(b) {
    b.direction.normalize();
    this.hits.length = 0;
    var c,d,f,g,h = 0;
    c = 0;
    for (d = this.colliders.length; c < d; c++) {
        g = this.colliders[c];
        f = this.rayCast(b, g);
        if (f < Number.MAX_VALUE) {
            g.distance = f;
            f > h ? this.hits.push(g) : this.hits.unshift(g);
            h = f
        }
    }
    return this.hits
};
THREE.CollisionSystem.prototype.rayCastNearest = function(b) {
    var c = this.rayCastAll(b);
    if (c.length == 0)return null;
    for (var d = 0; c[d]instanceof THREE.MeshCollider;) {
        var f = this.rayMesh(b, c[d]);
        if (f < Number.MAX_VALUE) {
            c[d].distance = f;
            break
        }
        d++
    }
    if (d > c.length)return null;
    return c[d]
};
THREE.CollisionSystem.prototype.rayCast = function(b, c) {
    if (c instanceof THREE.PlaneCollider)return this.rayPlane(b, c); else if (c instanceof THREE.SphereCollider)return this.raySphere(b, c); else if (c instanceof THREE.BoxCollider)return this.rayBox(b, c); else if (c instanceof THREE.MeshCollider && c.box)return this.rayBox(b, c.box)
};
THREE.CollisionSystem.prototype.rayMesh = function(b, c) {
    for (var d = this.makeRayLocal(b, c.mesh),f = Number.MAX_VALUE,g = 0; g < c.numFaces / 3; g++) {
        var h = g * 3;
        f = Math.min(f, this.rayTriangle(d, c.vertices[c.faces[h + 0]], c.vertices[c.faces[h + 1]], c.vertices[c.faces[h + 2]], c.normals[c.faces[g]], f))
    }
    return f
};
THREE.CollisionSystem.prototype.rayTriangle = function(b, c, d, f, g, h) {
    var j = THREE.CollisionSystem.__v1,k = THREE.CollisionSystem.__v2;
    j.sub(d, c);
    k.sub(f, d);
    g.cross(j, k);
    k = g.dot(b.direction);
    if (!(k < 0))return Number.MAX_VALUE;
    j = g.dot(c) - g.dot(b.origin);
    if (!(j <= 0))return Number.MAX_VALUE;
    if (!(j >= k * h))return Number.MAX_VALUE;
    j /= k;
    k = THREE.CollisionSystem.__v3;
    k.copy(b.direction);
    k.multiplyScalar(j);
    k.addSelf(b.origin);
    if (Math.abs(g.x) > Math.abs(g.y))if (Math.abs(g.x) > Math.abs(g.z)) {
        b = k.y - c.y;
        g = d.y - c.y;
        h = f.y - c.y;
        k = k.z - c.z;
        d = d.z - c.z;
        f = f.z - c.z
    } else {
        b = k.x - c.x;
        g = d.x - c.x;
        h = f.x - c.x;
        k = k.y - c.y;
        d = d.y - c.y;
        f = f.y - c.y
    } else if (Math.abs(g.y) > Math.abs(g.z)) {
        b = k.x - c.x;
        g = d.x - c.x;
        h = f.x - c.x;
        k = k.z - c.z;
        d = d.z - c.z;
        f = f.z - c.z
    } else {
        b = k.x - c.x;
        g = d.x - c.x;
        h = f.x - c.x;
        k = k.y - c.y;
        d = d.y - c.y;
        f = f.y - c.y
    }
    c = g * f - d * h;
    if (c == 0)return Number.MAX_VALUE;
    c = 1 / c;
    f = (b * f - k * h) * c;
    if (!(f >= 0))return Number.MAX_VALUE;
    c *= g * k - d * b;
    if (!(c >= 0))return Number.MAX_VALUE;
    if (!(1 - f - c >= 0))return Number.MAX_VALUE;
    return j
};
THREE.CollisionSystem.prototype.makeRayLocal = function(b, c) {
    var d = new THREE.Ray(b.origin.clone(), b.direction.clone()),f = THREE.Matrix4.makeInvert(c.matrixWorld);
    f.multiplyVector3(d.origin);
    f.rotateAxis(d.direction);
    d.direction.normalize();
    return d
};
THREE.CollisionSystem.prototype.rayBox = function(b, c) {
    var d;
    d = c.dynamic && c.mesh && c.mesh.matrixWorld ? this.makeRayLocal(b, c.mesh) : new THREE.Ray(b.origin.clone(), b.direction.clone());
    var f = 0,g = 0,h = 0,j = 0,k = 0,m = 0,p = !0;
    if (d.origin.x < c.min.x) {
        f = c.min.x - d.origin.x;
        f /= d.direction.x;
        p = !1;
        j = -1
    } else if (d.origin.x > c.max.x) {
        f = c.max.x - d.origin.x;
        f /= d.direction.x;
        p = !1;
        j = 1
    }
    if (d.origin.y < c.min.y) {
        g = c.min.y - d.origin.y;
        g /= d.direction.y;
        p = !1;
        k = -1
    } else if (d.origin.y > c.max.y) {
        g = c.max.y - d.origin.y;
        g /= d.direction.y;
        p = !1;
        k =
                1
    }
    if (d.origin.z < c.min.z) {
        h = c.min.z - d.origin.z;
        h /= d.direction.z;
        p = !1;
        m = -1
    } else if (d.origin.z > c.max.z) {
        h = c.max.z - d.origin.z;
        h /= d.direction.z;
        p = !1;
        m = 1
    }
    if (p)return-1;
    p = 0;
    if (g > f) {
        p = 1;
        f = g
    }
    if (h > f) {
        p = 2;
        f = h
    }
    switch (p) {case 0:k = d.origin.y + d.direction.y * f;if (k < c.min.y || k > c.max.y)return Number.MAX_VALUE;d = d.origin.z + d.direction.z * f;if (d < c.min.z || d > c.max.z)return Number.MAX_VALUE;c.normal = new THREE.Vector3(j, 0, 0);break;case 1:j = d.origin.x + d.direction.x * f;if (j < c.min.x || j > c.max.x)return Number.MAX_VALUE;d = d.origin.z +
            d.direction.z * f;if (d < c.min.z || d > c.max.z)return Number.MAX_VALUE;c.normal = new THREE.Vector3(0, k, 0);break;case 2:j = d.origin.x + d.direction.x * f;if (j < c.min.x || j > c.max.x)return Number.MAX_VALUE;k = d.origin.y + d.direction.y * f;if (k < c.min.y || k > c.max.y)return Number.MAX_VALUE;c.normal = new THREE.Vector3(0, 0, m)
    }
    return f
};
THREE.CollisionSystem.prototype.rayPlane = function(b, c) {
    var d = b.direction.dot(c.normal),f = c.point.dot(c.normal);
    if (d < 0)d = (f - b.origin.dot(c.normal)) / d; else return Number.MAX_VALUE;
    return d > 0 ? d : Number.MAX_VALUE
};
THREE.CollisionSystem.prototype.raySphere = function(b, c) {
    var d = c.center.clone().subSelf(b.origin);
    if (d.lengthSq < c.radiusSq)return-1;
    var f = d.dot(b.direction.clone());
    if (f <= 0)return Number.MAX_VALUE;
    d = c.radiusSq - (d.lengthSq() - f * f);
    if (d >= 0)return Math.abs(f) - Math.sqrt(d);
    return Number.MAX_VALUE
};
THREE.CollisionSystem.__v1 = new THREE.Vector3;
THREE.CollisionSystem.__v2 = new THREE.Vector3;
THREE.CollisionSystem.__v3 = new THREE.Vector3;
THREE.CollisionUtils = {};
THREE.CollisionUtils.MeshOBB = function(b) {
    b.geometry.computeBoundingBox();
    var c = b.geometry.boundingBox,d = new THREE.Vector3(c.x[0], c.y[0], c.z[0]);
    c = new THREE.Vector3(c.x[1], c.y[1], c.z[1]);
    d = new THREE.BoxCollider(d, c);
    d.mesh = b;
    return d
};
THREE.CollisionUtils.MeshAABB = function(b) {
    var c = THREE.CollisionUtils.MeshOBB(b);
    c.min.addSelf(b.position);
    c.max.addSelf(b.position);
    c.dynamic = !1;
    return c
};
THREE.CollisionUtils.MeshColliderWBox = function(b) {
    for (var c = b.geometry.vertices,d = c.length,f = b.geometry.faces,g = f.length,h = [],j = [],k = [],m = 0; m < d; m++)h.push(new THREE.Vector3(c[m].position.x, c[m].position.y, c[m].position.z));
    for (m = 0; m < g; m++) {
        j.push(f[m].a, f[m].b, f[m].c);
        k.push(new THREE.Vector3(f[m].normal.x, f[m].normal.y, f[m].normal.z))
    }
    c = new THREE.MeshCollider(h, j, k, THREE.CollisionUtils.MeshOBB(b));
    c.mesh = b;
    return c
};
var GeometryUtils = {merge:function(b, c) {
    var d = c instanceof THREE.Mesh,f = b.vertices.length,g = d ? c.geometry : c,h = b.vertices,j = g.vertices,k = b.faces,m = g.faces,p = b.faceVertexUvs[0];
    g = g.faceVertexUvs[0];
    d && c.matrixAutoUpdate && c.updateMatrix();
    for (var o = 0,w = j.length; o < w; o++) {
        var y = new THREE.Vertex(j[o].position.clone());
        d && c.matrix.multiplyVector3(y.position);
        h.push(y)
    }
    o = 0;
    for (w = m.length; o < w; o++) {
        j = m[o];
        var v,A,F = j.vertexNormals;
        y = j.vertexColors;
        if (j instanceof THREE.Face3)v = new THREE.Face3(j.a + f, j.b + f, j.c +
                f); else j instanceof THREE.Face4 && (v = new THREE.Face4(j.a + f, j.b + f, j.c + f, j.d + f));
        v.normal.copy(j.normal);
        d = 0;
        for (h = F.length; d < h; d++) {
            A = F[d];
            v.vertexNormals.push(A.clone())
        }
        v.color.copy(j.color);
        d = 0;
        for (h = y.length; d < h; d++) {
            A = y[d];
            v.vertexColors.push(A.clone())
        }
        v.materials = j.materials.slice();
        v.centroid.copy(j.centroid);
        k.push(v)
    }
    o = 0;
    for (w = g.length; o < w; o++) {
        f = g[o];
        k = [];
        d = 0;
        for (h = f.length; d < h; d++)k.push(new THREE.UV(f[d].u, f[d].v));
        p.push(k)
    }
}},ImageUtils = {loadTexture:function(b, c, d) {
    var f = new Image,g =
            new THREE.Texture(f, c);
    f.onload = function() {
        g.needsUpdate = !0;
        d && d(this)
    };
    f.src = b;
    return g
},loadTextureCube:function(b, c, d) {
    var f,g = [],h = new THREE.Texture(g, c);
    c = g.loadCount = 0;
    for (f = b.length; c < f; ++c) {
        g[c] = new Image;
        g[c].onload = function() {
            g.loadCount += 1;
            if (g.loadCount == 6)h.needsUpdate = !0;
            d && d(this)
        };
        g[c].src = b[c]
    }
    return h
}},SceneUtils = {addMesh:function(b, c, d, f, g, h, j, k, m, p) {
    c = new THREE.Mesh(c, p);
    c.scale.x = c.scale.y = c.scale.z = d;
    c.position.x = f;
    c.position.y = g;
    c.position.z = h;
    c.rotation.x = j;
    c.rotation.y = k;
    c.rotation.z = m;
    b.addObject(c);
    return c
},addPanoramaCubeWebGL:function(b, c, d) {
    var f = ShaderUtils.lib.cube;
    f.uniforms.tCube.texture = d;
    d = new THREE.MeshShaderMaterial({fragmentShader:f.fragmentShader,vertexShader:f.vertexShader,uniforms:f.uniforms});
    c = new THREE.Mesh(new Cube(c, c, c, 1, 1, 1, null, !0), d);
    b.addObject(c);
    return c
},addPanoramaCube:function(b, c, d) {
    var f = [];
    f.push(new THREE.MeshBasicMaterial({map:new THREE.Texture(d[0])}));
    f.push(new THREE.MeshBasicMaterial({map:new THREE.Texture(d[1])}));
    f.push(new THREE.MeshBasicMaterial({map:new THREE.Texture(d[2])}));
    f.push(new THREE.MeshBasicMaterial({map:new THREE.Texture(d[3])}));
    f.push(new THREE.MeshBasicMaterial({map:new THREE.Texture(d[4])}));
    f.push(new THREE.MeshBasicMaterial({map:new THREE.Texture(d[5])}));
    c = new THREE.Mesh(new Cube(c, c, c, 1, 1, f, !0), new THREE.MeshFaceMaterial);
    b.addObject(c);
    return c
},addPanoramaCubePlanes:function(b, c, d) {
    var f = c / 2;
    c = new Plane(c, c);
    var g = Math.PI,h = Math.PI / 2;
    SceneUtils.addMesh(b, c, 1, 0, 0, -f, 0, 0, 0, new THREE.MeshBasicMaterial({map:new THREE.Texture(d[5])}));
    SceneUtils.addMesh(b,
            c, 1, -f, 0, 0, 0, h, 0, new THREE.MeshBasicMaterial({map:new THREE.Texture(d[0])}));
    SceneUtils.addMesh(b, c, 1, f, 0, 0, 0, -h, 0, new THREE.MeshBasicMaterial({map:new THREE.Texture(d[1])}));
    SceneUtils.addMesh(b, c, 1, 0, f, 0, h, 0, g, new THREE.MeshBasicMaterial({map:new THREE.Texture(d[2])}));
    SceneUtils.addMesh(b, c, 1, 0, -f, 0, -h, 0, g, new THREE.MeshBasicMaterial({map:new THREE.Texture(d[3])}))
},showHierarchy:function(b, c) {
    SceneUtils.traverseHierarchy(b, function(d) {
        d.visible = c
    })
},traverseHierarchy:function(b, c) {
    var d,f,g = b.children.length;
    for (f = 0; f < g; f++) {
        d = b.children[f];
        c(d);
        SceneUtils.traverseHierarchy(d, c)
    }
}},ShaderUtils = {lib:{fresnel:{uniforms:{mRefractionRatio:{type:"f",value:1.02},mFresnelBias:{type:"f",value:0.1},mFresnelPower:{type:"f",value:2},mFresnelScale:{type:"f",value:1},tCube:{type:"t",value:1,texture:null}},fragmentShader:"uniform samplerCube tCube;\nvarying vec3 vReflect;\nvarying vec3 vRefract[3];\nvarying float vReflectionFactor;\nvoid main() {\nvec4 reflectedColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );\nvec4 refractedColor = vec4( 1.0, 1.0, 1.0, 1.0 );\nrefractedColor.r = textureCube( tCube, vec3( -vRefract[0].x, vRefract[0].yz ) ).r;\nrefractedColor.g = textureCube( tCube, vec3( -vRefract[1].x, vRefract[1].yz ) ).g;\nrefractedColor.b = textureCube( tCube, vec3( -vRefract[2].x, vRefract[2].yz ) ).b;\nrefractedColor.a = 1.0;\ngl_FragColor = mix( refractedColor, reflectedColor, clamp( vReflectionFactor, 0.0, 1.0 ) );\n}",
    vertexShader:"uniform float mRefractionRatio;\nuniform float mFresnelBias;\nuniform float mFresnelScale;\nuniform float mFresnelPower;\nvarying vec3 vReflect;\nvarying vec3 vRefract[3];\nvarying float vReflectionFactor;\nvoid main() {\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvec3 nWorld = normalize ( mat3( objectMatrix[0].xyz, objectMatrix[1].xyz, objectMatrix[2].xyz ) * normal );\nvec3 I = mPosition.xyz - cameraPosition;\nvReflect = reflect( I, nWorld );\nvRefract[0] = refract( normalize( I ), nWorld, mRefractionRatio );\nvRefract[1] = refract( normalize( I ), nWorld, mRefractionRatio * 0.99 );\nvRefract[2] = refract( normalize( I ), nWorld, mRefractionRatio * 0.98 );\nvReflectionFactor = mFresnelBias + mFresnelScale * pow( 1.0 + dot( normalize( I ), nWorld ), mFresnelPower );\ngl_Position = projectionMatrix * mvPosition;\n}"},
    normal:{uniforms:{enableAO:{type:"i",value:0},enableDiffuse:{type:"i",value:0},tDiffuse:{type:"t",value:0,texture:null},tNormal:{type:"t",value:2,texture:null},tAO:{type:"t",value:3,texture:null},uNormalScale:{type:"f",value:1},tDisplacement:{type:"t",value:4,texture:null},uDisplacementBias:{type:"f",value:-0.5},uDisplacementScale:{type:"f",value:2.5},uPointLightPos:{type:"v3",value:new THREE.Vector3},uPointLightColor:{type:"c",value:new THREE.Color(15658734)},uDirLightPos:{type:"v3",value:new THREE.Vector3},
        uDirLightColor:{type:"c",value:new THREE.Color(15658734)},uAmbientLightColor:{type:"c",value:new THREE.Color(328965)},uDiffuseColor:{type:"c",value:new THREE.Color(15658734)},uSpecularColor:{type:"c",value:new THREE.Color(1118481)},uAmbientColor:{type:"c",value:new THREE.Color(328965)},uShininess:{type:"f",value:30}},fragmentShader:"uniform vec3 uDirLightPos;\nuniform vec3 uAmbientLightColor;\nuniform vec3 uDirLightColor;\nuniform vec3 uPointLightColor;\nuniform vec3 uAmbientColor;\nuniform vec3 uDiffuseColor;\nuniform vec3 uSpecularColor;\nuniform float uShininess;\nuniform bool enableDiffuse;\nuniform bool enableAO;\nuniform sampler2D tDiffuse;\nuniform sampler2D tNormal;\nuniform sampler2D tAO;\nuniform float uNormalScale;\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec3 vPointLightVector;\nvarying vec3 vViewPosition;\nvoid main() {\nvec3 diffuseTex = vec3( 1.0, 1.0, 1.0 );\nvec3 aoTex = vec3( 1.0, 1.0, 1.0 );\nvec3 normalTex = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;\nnormalTex.xy *= uNormalScale;\nnormalTex = normalize( normalTex );\nif( enableDiffuse )\ndiffuseTex = texture2D( tDiffuse, vUv ).xyz;\nif( enableAO )\naoTex = texture2D( tAO, vUv ).xyz;\nmat3 tsb = mat3( vTangent, vBinormal, vNormal );\nvec3 finalNormal = tsb * normalTex;\nvec3 normal = normalize( finalNormal );\nvec3 viewPosition = normalize( vViewPosition );\nvec4 pointDiffuse  = vec4( 0.0, 0.0, 0.0, 0.0 );\nvec4 pointSpecular = vec4( 0.0, 0.0, 0.0, 0.0 );\nvec3 pointVector = normalize( vPointLightVector );\nvec3 pointHalfVector = normalize( vPointLightVector + vViewPosition );\nfloat pointDotNormalHalf = dot( normal, pointHalfVector );\nfloat pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );\nfloat pointSpecularWeight = 0.0;\nif ( pointDotNormalHalf >= 0.0 )\npointSpecularWeight = pow( pointDotNormalHalf, uShininess );\npointDiffuse  += vec4( uDiffuseColor, 1.0 ) * pointDiffuseWeight;\npointSpecular += vec4( uSpecularColor, 1.0 ) * pointSpecularWeight;\nvec4 dirDiffuse  = vec4( 0.0, 0.0, 0.0, 0.0 );\nvec4 dirSpecular = vec4( 0.0, 0.0, 0.0, 0.0 );\nvec4 lDirection = viewMatrix * vec4( uDirLightPos, 0.0 );\nvec3 dirVector = normalize( lDirection.xyz );\nvec3 dirHalfVector = normalize( lDirection.xyz + vViewPosition );\nfloat dirDotNormalHalf = dot( normal, dirHalfVector );\nfloat dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );\nfloat dirSpecularWeight = 0.0;\nif ( dirDotNormalHalf >= 0.0 )\ndirSpecularWeight = pow( dirDotNormalHalf, uShininess );\ndirDiffuse  += vec4( uDiffuseColor, 1.0 ) * dirDiffuseWeight;\ndirSpecular += vec4( uSpecularColor, 1.0 ) * dirSpecularWeight;\nvec4 totalLight = vec4( uAmbientLightColor * uAmbientColor, 1.0 );\ntotalLight += vec4( uDirLightColor, 1.0 ) * ( dirDiffuse + dirSpecular );\ntotalLight += vec4( uPointLightColor, 1.0 ) * ( pointDiffuse + pointSpecular );\ngl_FragColor = vec4( totalLight.xyz * aoTex * diffuseTex, 1.0 );\n}",
        vertexShader:"attribute vec4 tangent;\nuniform vec3 uPointLightPos;\n#ifdef VERTEX_TEXTURES\nuniform sampler2D tDisplacement;\nuniform float uDisplacementScale;\nuniform float uDisplacementBias;\n#endif\nvarying vec3 vTangent;\nvarying vec3 vBinormal;\nvarying vec3 vNormal;\nvarying vec2 vUv;\nvarying vec3 vPointLightVector;\nvarying vec3 vViewPosition;\nvoid main() {\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvViewPosition = cameraPosition - mPosition.xyz;\nvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\nvNormal = normalize( normalMatrix * normal );\nvTangent = normalize( normalMatrix * tangent.xyz );\nvBinormal = cross( vNormal, vTangent ) * tangent.w;\nvBinormal = normalize( vBinormal );\nvUv = uv;\nvec4 lPosition = viewMatrix * vec4( uPointLightPos, 1.0 );\nvPointLightVector = normalize( lPosition.xyz - mvPosition.xyz );\n#ifdef VERTEX_TEXTURES\nvec3 dv = texture2D( tDisplacement, uv ).xyz;\nfloat df = uDisplacementScale * dv.x + uDisplacementBias;\nvec4 displacedPosition = vec4( vNormal.xyz * df, 0.0 ) + mvPosition;\ngl_Position = projectionMatrix * displacedPosition;\n#else\ngl_Position = projectionMatrix * mvPosition;\n#endif\n}"},
    cube:{uniforms:{tCube:{type:"t",value:1,texture:null}},vertexShader:"varying vec3 vViewPosition;\nvoid main() {\nvec4 mPosition = objectMatrix * vec4( position, 1.0 );\nvViewPosition = cameraPosition - mPosition.xyz;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader:"uniform samplerCube tCube;\nvarying vec3 vViewPosition;\nvoid main() {\nvec3 wPos = cameraPosition - vViewPosition;\ngl_FragColor = textureCube( tCube, vec3( - wPos.x, wPos.yz ) );\n}"},convolution:{uniforms:{tDiffuse:{type:"t",
        value:0,texture:null},uImageIncrement:{type:"v2",value:new THREE.Vector2(0.001953125, 0)},cKernel:{type:"fv1",value:[]}},vertexShader:"varying vec2 vUv;\nuniform vec2 uImageIncrement;\nvoid main(void) {\nvUv = uv - ((KERNEL_SIZE - 1.0) / 2.0) * uImageIncrement;\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader:"varying vec2 vUv;\nuniform sampler2D tDiffuse;\nuniform vec2 uImageIncrement;\nuniform float cKernel[KERNEL_SIZE];\nvoid main(void) {\nvec2 imageCoord = vUv;\nvec4 sum = vec4( 0.0, 0.0, 0.0, 0.0 );\nfor( int i=0; i<KERNEL_SIZE; ++i ) {\nsum += texture2D( tDiffuse, imageCoord ) * cKernel[i];\nimageCoord += uImageIncrement;\n}\ngl_FragColor = sum;\n}"},
    film:{uniforms:{tDiffuse:{type:"t",value:0,texture:null},time:{type:"f",value:0},nIntensity:{type:"f",value:0.5},sIntensity:{type:"f",value:0.05},sCount:{type:"f",value:4096},grayscale:{type:"i",value:1}},vertexShader:"varying vec2 vUv;\nvoid main() {\nvUv = vec2( uv.x, 1.0 - uv.y );\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader:"varying vec2 vUv;\nuniform sampler2D tDiffuse;\nuniform float time;\nuniform bool grayscale;\nuniform float nIntensity;\nuniform float sIntensity;\nuniform float sCount;\nvoid main() {\nvec4 cTextureScreen = texture2D( tDiffuse, vUv );\nfloat x = vUv.x * vUv.y * time *  1000.0;\nx = mod( x, 13.0 ) * mod( x, 123.0 );\nfloat dx = mod( x, 0.01 );\nvec3 cResult = cTextureScreen.rgb + cTextureScreen.rgb * clamp( 0.1 + dx * 100.0, 0.0, 1.0 );\nvec2 sc = vec2( sin( vUv.y * sCount ), cos( vUv.y * sCount ) );\ncResult += cTextureScreen.rgb * vec3( sc.x, sc.y, sc.x ) * sIntensity;\ncResult = cTextureScreen.rgb + clamp( nIntensity, 0.0,1.0 ) * ( cResult - cTextureScreen.rgb );\nif( grayscale ) {\ncResult = vec3( cResult.r * 0.3 + cResult.g * 0.59 + cResult.b * 0.11 );\n}\ngl_FragColor =  vec4( cResult, cTextureScreen.a );\n}"},
    screen:{uniforms:{tDiffuse:{type:"t",value:0,texture:null},opacity:{type:"f",value:1}},vertexShader:"varying vec2 vUv;\nvoid main() {\nvUv = vec2( uv.x, 1.0 - uv.y );\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",fragmentShader:"varying vec2 vUv;\nuniform sampler2D tDiffuse;\nuniform float opacity;\nvoid main() {\nvec4 texel = texture2D( tDiffuse, vUv );\ngl_FragColor = opacity * texel;\n}"},basic:{uniforms:{},vertexShader:"void main() {\ngl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
        fragmentShader:"void main() {\ngl_FragColor = vec4( 1.0, 0.0, 0.0, 0.5 );\n}"}},buildKernel:function(b) {
    var c,d,f,g,h = 2 * Math.ceil(b * 3) + 1;
    h > 25 && (h = 25);
    g = (h - 1) * 0.5;
    d = Array(h);
    for (c = f = 0; c < h; ++c) {
        d[c] = Math.exp(-((c - g) * (c - g)) / (2 * b * b));
        f += d[c]
    }
    for (c = 0; c < h; ++c)d[c] /= f;
    return d
}};
THREE.QuakeCamera = function(b) {
    function c(d, f) {
        return function() {
            f.apply(d, arguments)
        }
    }

    THREE.Camera.call(this, b.fov, b.aspect, b.near, b.far, b.target);
    this.movementSpeed = 1;
    this.lookSpeed = 0.0050;
    this.noFly = !1;
    this.lookVertical = !0;
    this.autoForward = !1;
    this.activeLook = !0;
    this.heightSpeed = !1;
    this.heightCoef = 1;
    this.heightMin = 0;
    this.constrainVertical = !1;
    this.verticalMin = 0;
    this.verticalMax = 3.14;
    this.domElement = document;
    if (b) {
        if (b.movementSpeed !== undefined)this.movementSpeed = b.movementSpeed;
        if (b.lookSpeed !== undefined)this.lookSpeed =
                b.lookSpeed;
        if (b.noFly !== undefined)this.noFly = b.noFly;
        if (b.lookVertical !== undefined)this.lookVertical = b.lookVertical;
        if (b.autoForward !== undefined)this.autoForward = b.autoForward;
        if (b.activeLook !== undefined)this.activeLook = b.activeLook;
        if (b.heightSpeed !== undefined)this.heightSpeed = b.heightSpeed;
        if (b.heightCoef !== undefined)this.heightCoef = b.heightCoef;
        if (b.heightMin !== undefined)this.heightMin = b.heightMin;
        if (b.heightMax !== undefined)this.heightMax = b.heightMax;
        if (b.constrainVertical !== undefined)this.constrainVertical =
                b.constrainVertical;
        if (b.verticalMin !== undefined)this.verticalMin = b.verticalMin;
        if (b.verticalMax !== undefined)this.verticalMax = b.verticalMax;
        if (b.domElement !== undefined)this.domElement = b.domElement
    }
    this.theta = this.phi = this.lon = this.lat = this.mouseY = this.mouseX = this.autoSpeedFactor = 0;
    this.moveForward = !1;
    this.moveBackward = !1;
    this.moveLeft = !1;
    this.moveRight = !1;
    this.freeze = !1;
    this.mouseDragOn = !1;
    this.windowHalfX = window.innerWidth / 2;
    this.windowHalfY = window.innerHeight / 2;
    this.onMouseDown = function(d) {
        d.preventDefault();
        d.stopPropagation();
        if (this.activeLook)switch (d.button) {case 0:this.moveForward = !0;break;case 2:this.moveBackward = !0
        }
        this.mouseDragOn = !0
    };
    this.onMouseUp = function(d) {
        d.preventDefault();
        d.stopPropagation();
        if (this.activeLook)switch (d.button) {case 0:this.moveForward = !1;break;case 2:this.moveBackward = !1
        }
        this.mouseDragOn = !1
    };
    this.onMouseMove = function(d) {
        this.mouseX = d.clientX - this.windowHalfX;
        this.mouseY = d.clientY - this.windowHalfY
    };
    this.onKeyDown = function(d) {
        switch (d.keyCode) {case 38:case 87:this.moveForward =
                !0;break;case 37:case 65:this.moveLeft = !0;break;case 40:case 83:this.moveBackward = !0;break;case 39:case 68:this.moveRight = !0;break;case 81:this.freeze = !this.freeze
        }
    };
    this.onKeyUp = function(d) {
        switch (d.keyCode) {case 38:case 87:this.moveForward = !1;break;case 37:case 65:this.moveLeft = !1;break;case 40:case 83:this.moveBackward = !1;break;case 39:case 68:this.moveRight = !1
        }
    };
    this.update = function() {
        if (!this.freeze) {
            this.autoSpeedFactor = this.heightSpeed ? ((this.position.y < this.heightMin ? this.heightMin : this.position.y >
                    this.heightMax ? this.heightMax : this.position.y) - this.heightMin) * this.heightCoef : 0;
            (this.moveForward || this.autoForward) && this.translateZ(-(this.movementSpeed + this.autoSpeedFactor));
            this.moveBackward && this.translateZ(this.movementSpeed);
            this.moveLeft && this.translateX(-this.movementSpeed);
            this.moveRight && this.translateX(this.movementSpeed);
            var d = this.lookSpeed;
            this.activeLook || (d = 0);
            this.lon += this.mouseX * d;
            this.lookVertical && (this.lat -= this.mouseY * d);
            this.lat = Math.max(-85, Math.min(85, this.lat));
            this.phi =
                    (90 - this.lat) * Math.PI / 180;
            this.theta = this.lon * Math.PI / 180;
            var f = this.target.position,g = this.position;
            f.x = g.x + 100 * Math.sin(this.phi) * Math.cos(this.theta);
            f.y = g.y + 100 * Math.cos(this.phi);
            f.z = g.z + 100 * Math.sin(this.phi) * Math.sin(this.theta)
        }
        this.lon += this.mouseX * d;
        this.lookVertical && (this.lat -= this.mouseY * d);
        this.lat = Math.max(-85, Math.min(85, this.lat));
        this.phi = (90 - this.lat) * Math.PI / 180;
        this.theta = this.lon * Math.PI / 180;
        if (this.constrainVertical)this.phi = (this.phi - 0) * (this.verticalMax - this.verticalMin) /
                3.14 + this.verticalMin;
        f = this.target.position;
        g = this.position;
        f.x = g.x + 100 * Math.sin(this.phi) * Math.cos(this.theta);
        f.y = g.y + 100 * Math.cos(this.phi);
        f.z = g.z + 100 * Math.sin(this.phi) * Math.sin(this.theta);
        this.supr.update.call(this)
    };
    this.domElement.addEventListener("contextmenu", function(d) {
        d.preventDefault()
    }, !1);
    this.domElement.addEventListener("mousemove", c(this, this.onMouseMove), !1);
    this.domElement.addEventListener("mousedown", c(this, this.onMouseDown), !1);
    this.domElement.addEventListener("mouseup", c(this,
            this.onMouseUp), !1);
    this.domElement.addEventListener("keydown", c(this, this.onKeyDown), !1);
    this.domElement.addEventListener("keyup", c(this, this.onKeyUp), !1)
};
THREE.QuakeCamera.prototype = new THREE.Camera;
THREE.QuakeCamera.prototype.constructor = THREE.QuakeCamera;
THREE.QuakeCamera.prototype.supr = THREE.Camera.prototype;
THREE.QuakeCamera.prototype.translate = function(b, c) {
    this.matrix.rotateAxis(c);
    if (this.noFly)c.y = 0;
    this.position.addSelf(c.multiplyScalar(b));
    this.target.position.addSelf(c.multiplyScalar(b))
};
THREE.PathCamera = function(b) {
    function c(p, o, w, y) {
        var v = {name:w,fps:0.6,length:y,hierarchy:[]},A,F = o.getControlPointsArray(),G = o.getLength(),L = F.length,V = 0;
        A = L - 1;
        o = {parent:-1,keys:[]};
        o.keys[0] = {time:0,pos:F[0],rot:[0,0,0,1],scl:[1,1,1]};
        o.keys[A] = {time:y,pos:F[A],rot:[0,0,0,1],scl:[1,1,1]};
        for (A = 1; A < L - 1; A++) {
            V = y * G.chunks[A] / G.total;
            o.keys[A] = {time:V,pos:F[A]}
        }
        v.hierarchy[0] = o;
        THREE.AnimationHandler.add(v);
        return new THREE.Animation(p, w, THREE.AnimationHandler.CATMULLROM_FORWARD, !1)
    }

    function d(p, o) {
        var w,
                y,v = new THREE.Geometry;
        for (w = 0; w < p.points.length * o; w++) {
            y = w / (p.points.length * o);
            y = p.getPoint(y);
            v.vertices[w] = new THREE.Vertex(new THREE.Vector3(y.x, y.y, y.z))
        }
        return v
    }

    function f(p, o) {
        var w = d(o, 10),y = d(o, 10),v = new THREE.LineBasicMaterial({color:16711680,linewidth:3});
        lineObj = new THREE.Line(w, v);
        particleObj = new THREE.ParticleSystem(y, new THREE.ParticleBasicMaterial({color:16755200,size:3}));
        lineObj.scale.set(1, 1, 1);
        p.addChild(lineObj);
        particleObj.scale.set(1, 1, 1);
        p.addChild(particleObj);
        y = new Sphere(1,
                16, 8);
        v = new THREE.MeshBasicMaterial({color:65280});
        for (i = 0; i < o.points.length; i++) {
            w = new THREE.Mesh(y, v);
            w.position.copy(o.points[i]);
            w.updateMatrix();
            p.addChild(w)
        }
    }

    THREE.Camera.call(this, b.fov, b.aspect, b.near, b.far, b.target);
    this.id = "PathCamera" + THREE.PathCameraIdCounter++;
    this.duration = 1E4;
    this.waypoints = [];
    this.useConstantSpeed = !0;
    this.resamplingCoef = 50;
    this.debugPath = new THREE.Object3D;
    this.debugDummy = new THREE.Object3D;
    this.animationParent = new THREE.Object3D;
    this.lookSpeed = 0.0050;
    this.lookVertical =
            !0;
    this.lookHorizontal = !0;
    this.verticalAngleMap = {srcRange:[0,6.28],dstRange:[0,6.28]};
    this.horizontalAngleMap = {srcRange:[0,6.28],dstRange:[0,6.28]};
    this.domElement = document;
    if (b) {
        if (b.duration !== undefined)this.duration = b.duration * 1E3;
        if (b.waypoints !== undefined)this.waypoints = b.waypoints;
        if (b.useConstantSpeed !== undefined)this.useConstantSpeed = b.useConstantSpeed;
        if (b.resamplingCoef !== undefined)this.resamplingCoef = b.resamplingCoef;
        if (b.createDebugPath !== undefined)this.createDebugPath = b.createDebugPath;
        if (b.createDebugDummy !== undefined)this.createDebugDummy = b.createDebugDummy;
        if (b.lookSpeed !== undefined)this.lookSpeed = b.lookSpeed;
        if (b.lookVertical !== undefined)this.lookVertical = b.lookVertical;
        if (b.lookHorizontal !== undefined)this.lookHorizontal = b.lookHorizontal;
        if (b.verticalAngleMap !== undefined)this.verticalAngleMap = b.verticalAngleMap;
        if (b.horizontalAngleMap !== undefined)this.horizontalAngleMap = b.horizontalAngleMap;
        if (b.domElement !== undefined)this.domElement = b.domElement
    }
    this.theta = this.phi = this.lon =
            this.lat = this.mouseY = this.mouseX = 0;
    this.windowHalfX = window.innerWidth / 2;
    this.windowHalfY = window.innerHeight / 2;
    var g = Math.PI * 2,h = Math.PI / 180;
    this.update = function(p, o, w) {
        var y,v;
        this.lookHorizontal && (this.lon += this.mouseX * this.lookSpeed);
        this.lookVertical && (this.lat -= this.mouseY * this.lookSpeed);
        this.lon = Math.max(0, Math.min(360, this.lon));
        this.lat = Math.max(-85, Math.min(85, this.lat));
        this.phi = (90 - this.lat) * h;
        this.theta = this.lon * h;
        y = this.phi % g;
        this.phi = y >= 0 ? y : y + g;
        y = this.verticalAngleMap.srcRange;
        v = this.verticalAngleMap.dstRange;
        this.phi = (this.phi - y[0]) * (v[1] - v[0]) / (y[1] - y[0]) + v[0];
        y = this.horizontalAngleMap.srcRange;
        v = this.horizontalAngleMap.dstRange;
        this.theta = (this.theta - y[0]) * (v[1] - v[0]) / (y[1] - y[0]) + v[0];
        y = this.target.position;
        y.x = 100 * Math.sin(this.phi) * Math.cos(this.theta);
        y.y = 100 * Math.cos(this.phi);
        y.z = 100 * Math.sin(this.phi) * Math.sin(this.theta);
        this.supr.update.call(this, p, o, w)
    };
    this.onMouseMove = function(p) {
        this.mouseX = p.clientX - this.windowHalfX;
        this.mouseY = p.clientY - this.windowHalfY
    };
    this.spline = new THREE.Spline;
    this.spline.initFromArray(this.waypoints);
    this.useConstantSpeed && this.spline.reparametrizeByArcLength(this.resamplingCoef);
    if (this.createDebugDummy) {
        b = new THREE.MeshLambertMaterial({color:30719});
        var j = new THREE.MeshLambertMaterial({color:65280}),k = new Cube(10, 10, 20),m = new Cube(2, 2, 10);
        this.animationParent = new THREE.Mesh(k, b);
        b = new THREE.Mesh(m, j);
        b.position.set(0, 10, 0);
        this.animation = c(this.animationParent, this.spline, this.id, this.duration);
        this.animationParent.addChild(this);
        this.animationParent.addChild(this.target);
        this.animationParent.addChild(b)
    } else {
        this.animation =
                c(this.animationParent, this.spline, this.id, this.duration);
        this.animationParent.addChild(this.target);
        this.animationParent.addChild(this)
    }
    this.createDebugPath && f(this.debugPath, this.spline);
    this.domElement.addEventListener("mousemove", function(p, o) {
        return function() {
            o.apply(p, arguments)
        }
    }(this, this.onMouseMove), !1)
};
THREE.PathCamera.prototype = new THREE.Camera;
THREE.PathCamera.prototype.constructor = THREE.PathCamera;
THREE.PathCamera.prototype.supr = THREE.Camera.prototype;
THREE.PathCameraIdCounter = 0;
var Cube = function(b, c, d, f, g, h, j, k, m) {
    function p(G, L, V, z, K, P, S, xa) {
        var ra,pa,e = f || 1,fa = g || 1,ca = K / 2,ya = P / 2,Fa = o.vertices.length;
        if (G == "x" && L == "y" || G == "y" && L == "x")ra = "z"; else if (G == "x" && L == "z" || G == "z" && L == "x") {
            ra = "y";
            fa = h || 1
        } else if (G == "z" && L == "y" || G == "y" && L == "z") {
            ra = "x";
            e = h || 1
        }
        var Ea = e + 1,Y = fa + 1;
        K /= e;
        var qa = P / fa;
        for (pa = 0; pa < Y; pa++)for (P = 0; P < Ea; P++) {
            var ta = new THREE.Vector3;
            ta[G] = (P * K - ca) * V;
            ta[L] = (pa * qa - ya) * z;
            ta[ra] = S;
            o.vertices.push(new THREE.Vertex(ta))
        }
        for (pa = 0; pa < fa; pa++)for (P = 0; P < e; P++) {
            o.faces.push(new THREE.Face4(P +
                    Ea * pa + Fa, P + Ea * (pa + 1) + Fa, P + 1 + Ea * (pa + 1) + Fa, P + 1 + Ea * pa + Fa, null, null, xa));
            o.faceVertexUvs[0].push([new THREE.UV(P / e, pa / fa),new THREE.UV(P / e, (pa + 1) / fa),new THREE.UV((P + 1) / e, (pa + 1) / fa),new THREE.UV((P + 1) / e, pa / fa)])
        }
    }

    THREE.Geometry.call(this);
    var o = this,w = b / 2,y = c / 2,v = d / 2;
    k = k ? -1 : 1;
    if (j !== undefined)if (j instanceof Array)this.materials = j; else {
        this.materials = [];
        for (var A = 0; A < 6; A++)this.materials.push([j])
    } else this.materials = [];
    this.sides = {px:!0,nx:!0,py:!0,ny:!0,pz:!0,nz:!0};
    if (m != undefined)for (var F in m)this.sides[F] !=
            undefined && (this.sides[F] = m[F]);
    this.sides.px && p("z", "y", 1 * k, -1, d, c, -w, this.materials[0]);
    this.sides.nx && p("z", "y", -1 * k, -1, d, c, w, this.materials[1]);
    this.sides.py && p("x", "z", 1 * k, 1, b, d, y, this.materials[2]);
    this.sides.ny && p("x", "z", 1 * k, -1, b, d, -y, this.materials[3]);
    this.sides.pz && p("x", "y", 1 * k, -1, b, c, v, this.materials[4]);
    this.sides.nz && p("x", "y", -1 * k, -1, b, c, -v, this.materials[5]);
    (function() {
        for (var G = [],L = [],V = 0,z = o.vertices.length; V < z; V++) {
            for (var K = o.vertices[V],P = !1,S = 0,xa = G.length; S < xa; S++) {
                var ra =
                        G[S];
                if (K.position.x == ra.position.x && K.position.y == ra.position.y && K.position.z == ra.position.z) {
                    L[V] = S;
                    P = !0;
                    break
                }
            }
            if (!P) {
                L[V] = G.length;
                G.push(new THREE.Vertex(K.position.clone()))
            }
        }
        V = 0;
        for (z = o.faces.length; V < z; V++) {
            K = o.faces[V];
            K.a = L[K.a];
            K.b = L[K.b];
            K.c = L[K.c];
            K.d = L[K.d]
        }
        o.vertices = G
    })();
    this.computeCentroids();
    this.computeFaceNormals()
};
Cube.prototype = new THREE.Geometry;
Cube.prototype.constructor = Cube;
var Cylinder = function(b, c, d, f, g, h) {
    function j(y, v, A) {
        k.vertices.push(new THREE.Vertex(new THREE.Vector3(y, v, A)))
    }

    THREE.Geometry.call(this);
    var k = this,m,p = Math.PI * 2,o = f / 2;
    for (m = 0; m < b; m++)j(Math.sin(p * m / b) * c, Math.cos(p * m / b) * c, -o);
    for (m = 0; m < b; m++)j(Math.sin(p * m / b) * d, Math.cos(p * m / b) * d, o);
    for (m = 0; m < b; m++)k.faces.push(new THREE.Face4(m, m + b, b + (m + 1) % b, (m + 1) % b));
    if (d > 0) {
        j(0, 0, -o - (h || 0));
        for (m = b; m < b + b / 2; m++)k.faces.push(new THREE.Face4(2 * b, (2 * m - 2 * b) % b, (2 * m - 2 * b + 1) % b, (2 * m - 2 * b + 2) % b))
    }
    if (c > 0) {
        j(0, 0, o + (g || 0));
        for (m =
                     b + b / 2; m < 2 * b; m++)k.faces.push(new THREE.Face4(2 * b + 1, (2 * m - 2 * b + 2) % b + b, (2 * m - 2 * b + 1) % b + b, (2 * m - 2 * b) % b + b))
    }
    m = 0;
    for (b = this.faces.length; m < b; m++) {
        c = [];
        d = this.faces[m];
        g = this.vertices[d.a];
        h = this.vertices[d.b];
        o = this.vertices[d.c];
        var w = this.vertices[d.d];
        c.push(new THREE.UV(0.5 + Math.atan2(g.position.x, g.position.y) / p, 0.5 + g.position.z / f));
        c.push(new THREE.UV(0.5 + Math.atan2(h.position.x, h.position.y) / p, 0.5 + h.position.z / f));
        c.push(new THREE.UV(0.5 + Math.atan2(o.position.x, o.position.y) / p, 0.5 + o.position.z / f));
        d instanceof
                THREE.Face4 && c.push(new THREE.UV(0.5 + Math.atan2(w.position.x, w.position.y) / p, 0.5 + w.position.z / f));
        this.faceVertexUvs[0].push(c)
    }
    this.computeCentroids();
    this.computeFaceNormals()
};
Cylinder.prototype = new THREE.Geometry;
Cylinder.prototype.constructor = Cylinder;
var Icosahedron = function(b) {
    function c(w, y, v) {
        var A = Math.sqrt(w * w + y * y + v * v);
        return g.vertices.push(new THREE.Vertex(new THREE.Vector3(w / A, y / A, v / A))) - 1
    }

    function d(w, y, v, A) {
        A.faces.push(new THREE.Face3(w, y, v))
    }

    function f(w, y) {
        var v = g.vertices[w].position,A = g.vertices[y].position;
        return c((v.x + A.x) / 2, (v.y + A.y) / 2, (v.z + A.z) / 2)
    }

    var g = this,h = new THREE.Geometry,j;
    this.subdivisions = b || 0;
    THREE.Geometry.call(this);
    b = (1 + Math.sqrt(5)) / 2;
    c(-1, b, 0);
    c(1, b, 0);
    c(-1, -b, 0);
    c(1, -b, 0);
    c(0, -1, b);
    c(0, 1, b);
    c(0, -1, -b);
    c(0,
            1, -b);
    c(b, 0, -1);
    c(b, 0, 1);
    c(-b, 0, -1);
    c(-b, 0, 1);
    d(0, 11, 5, h);
    d(0, 5, 1, h);
    d(0, 1, 7, h);
    d(0, 7, 10, h);
    d(0, 10, 11, h);
    d(1, 5, 9, h);
    d(5, 11, 4, h);
    d(11, 10, 2, h);
    d(10, 7, 6, h);
    d(7, 1, 8, h);
    d(3, 9, 4, h);
    d(3, 4, 2, h);
    d(3, 2, 6, h);
    d(3, 6, 8, h);
    d(3, 8, 9, h);
    d(4, 9, 5, h);
    d(2, 4, 11, h);
    d(6, 2, 10, h);
    d(8, 6, 7, h);
    d(9, 8, 1, h);
    for (b = 0; b < this.subdivisions; b++) {
        j = new THREE.Geometry;
        for (var k in h.faces) {
            var m = f(h.faces[k].a, h.faces[k].b),p = f(h.faces[k].b, h.faces[k].c),o = f(h.faces[k].c, h.faces[k].a);
            d(h.faces[k].a, m, o, j);
            d(h.faces[k].b, p, m, j);
            d(h.faces[k].c,
                    o, p, j);
            d(m, p, o, j)
        }
        h.faces = j.faces
    }
    g.faces = h.faces;
    delete h;
    delete j;
    this.computeCentroids();
    this.computeFaceNormals();
    this.computeVertexNormals()
};
Icosahedron.prototype = new THREE.Geometry;
Icosahedron.prototype.constructor = Icosahedron;
function Lathe(b, c, d) {
    THREE.Geometry.call(this);
    this.steps = c || 12;
    this.angle = d || 2 * Math.PI;
    c = this.angle / this.steps;
    d = [];
    for (var f = [],g = [],h = [],j = (new THREE.Matrix4).setRotationZ(c),k = 0; k < b.length; k++) {
        this.vertices.push(new THREE.Vertex(b[k]));
        d[k] = b[k].clone();
        f[k] = this.vertices.length - 1
    }
    for (var m = 0; m <= this.angle + 0.0010; m += c) {
        for (k = 0; k < d.length; k++)if (m < this.angle) {
            d[k] = j.multiplyVector3(d[k].clone());
            this.vertices.push(new THREE.Vertex(d[k]));
            g[k] = this.vertices.length - 1
        } else g = h;
        m == 0 && (h = f);
        for (k =
                     0; k < f.length - 1; k++) {
            this.faces.push(new THREE.Face4(g[k], g[k + 1], f[k + 1], f[k]));
            this.faceVertexUvs[0].push([new THREE.UV(1 - m / this.angle, k / b.length),new THREE.UV(1 - m / this.angle, (k + 1) / b.length),new THREE.UV(1 - (m - c) / this.angle, (k + 1) / b.length),new THREE.UV(1 - (m - c) / this.angle, k / b.length)])
        }
        f = g;
        g = []
    }
    this.computeCentroids();
    this.computeFaceNormals();
    this.computeVertexNormals()
}
Lathe.prototype = new THREE.Geometry;
Lathe.prototype.constructor = Lathe;
var Plane = function(b, c, d, f) {
    THREE.Geometry.call(this);
    var g,h = b / 2,j = c / 2;
    d = d || 1;
    f = f || 1;
    var k = d + 1,m = f + 1;
    b /= d;
    var p = c / f;
    for (g = 0; g < m; g++)for (c = 0; c < k; c++)this.vertices.push(new THREE.Vertex(new THREE.Vector3(c * b - h, -(g * p - j), 0)));
    for (g = 0; g < f; g++)for (c = 0; c < d; c++) {
        this.faces.push(new THREE.Face4(c + k * g, c + k * (g + 1), c + 1 + k * (g + 1), c + 1 + k * g));
        this.faceVertexUvs[0].push([new THREE.UV(c / d, g / f),new THREE.UV(c / d, (g + 1) / f),new THREE.UV((c + 1) / d, (g + 1) / f),new THREE.UV((c + 1) / d, g / f)])
    }
    this.computeCentroids();
    this.computeFaceNormals()
};
Plane.prototype = new THREE.Geometry;
Plane.prototype.constructor = Plane;
var Sphere = function(b, c, d) {
    THREE.Geometry.call(this);
    var f,g = Math.PI,h = Math.max(3, c || 8),j = Math.max(2, d || 6);
    c = [];
    for (d = 0; d < j + 1; d++) {
        f = d / j;
        var k = b * Math.cos(f * g),m = b * Math.sin(f * g),p = [],o = 0;
        for (f = 0; f < h; f++) {
            var w = 2 * f / h,y = m * Math.sin(w * g);
            w = m * Math.cos(w * g);
            (d == 0 || d == j) && f > 0 || (o = this.vertices.push(new THREE.Vertex(new THREE.Vector3(w, k, y))) - 1);
            p.push(o)
        }
        c.push(p)
    }
    var v,A,F;
    g = c.length;
    for (d = 0; d < g; d++) {
        h = c[d].length;
        if (d > 0)for (f = 0; f < h; f++) {
            p = f == h - 1;
            j = c[d][p ? 0 : f + 1];
            k = c[d][p ? h - 1 : f];
            m = c[d - 1][p ? h - 1 : f];
            p = c[d - 1][p ?
                    0 : f + 1];
            y = d / (g - 1);
            v = (d - 1) / (g - 1);
            A = (f + 1) / h;
            w = f / h;
            o = new THREE.UV(1 - A, y);
            y = new THREE.UV(1 - w, y);
            w = new THREE.UV(1 - w, v);
            var G = new THREE.UV(1 - A, v);
            if (d < c.length - 1) {
                v = this.vertices[j].position.clone();
                A = this.vertices[k].position.clone();
                F = this.vertices[m].position.clone();
                v.normalize();
                A.normalize();
                F.normalize();
                this.faces.push(new THREE.Face3(j, k, m, [new THREE.Vector3(v.x, v.y, v.z),new THREE.Vector3(A.x, A.y, A.z),new THREE.Vector3(F.x, F.y, F.z)]));
                this.faceVertexUvs[0].push([o,y,w])
            }
            if (d > 1) {
                v = this.vertices[j].position.clone();
                A = this.vertices[m].position.clone();
                F = this.vertices[p].position.clone();
                v.normalize();
                A.normalize();
                F.normalize();
                this.faces.push(new THREE.Face3(j, m, p, [new THREE.Vector3(v.x, v.y, v.z),new THREE.Vector3(A.x, A.y, A.z),new THREE.Vector3(F.x, F.y, F.z)]));
                this.faceVertexUvs[0].push([o,w,G])
            }
        }
    }
    this.computeCentroids();
    this.computeFaceNormals();
    this.computeVertexNormals();
    this.boundingSphere = {radius:b}
};
Sphere.prototype = new THREE.Geometry;
Sphere.prototype.constructor = Sphere;
var Torus = function(b, c, d, f) {
    this.radius = b || 100;
    this.tube = c || 40;
    this.segmentsR = d || 8;
    this.segmentsT = f || 6;
    b = [];
    THREE.Geometry.call(this);
    for (c = 0; c <= this.segmentsR; ++c)for (d = 0; d <= this.segmentsT; ++d) {
        f = d / this.segmentsT * 2 * Math.PI;
        var g = c / this.segmentsR * 2 * Math.PI;
        this.vertices.push(new THREE.Vertex(new THREE.Vector3((this.radius + this.tube * Math.cos(g)) * Math.cos(f), (this.radius + this.tube * Math.cos(g)) * Math.sin(f), this.tube * Math.sin(g))));
        b.push([d / this.segmentsT,1 - c / this.segmentsR])
    }
    for (c = 1; c <= this.segmentsR; ++c)for (d =
                                                      1; d <= this.segmentsT; ++d) {
        f = (this.segmentsT + 1) * c + d;
        g = (this.segmentsT + 1) * c + d - 1;
        var h = (this.segmentsT + 1) * (c - 1) + d - 1,j = (this.segmentsT + 1) * (c - 1) + d;
        this.faces.push(new THREE.Face4(f, g, h, j));
        this.faceVertexUvs[0].push([new THREE.UV(b[f][0], b[f][1]),new THREE.UV(b[g][0], b[g][1]),new THREE.UV(b[h][0], b[h][1]),new THREE.UV(b[j][0], b[j][1])])
    }
    delete b;
    this.computeCentroids();
    this.computeFaceNormals();
    this.computeVertexNormals()
};
Torus.prototype = new THREE.Geometry;
Torus.prototype.constructor = Torus;
var TorusKnot = function(b, c, d, f, g, h, j) {
    function k(w, y, v, A, F, G) {
        y = v / A * w;
        v = Math.cos(y);
        return new THREE.Vector3(F * (2 + v) * 0.5 * Math.cos(w), F * (2 + v) * Math.sin(w) * 0.5, G * F * Math.sin(y) * 0.5)
    }

    THREE.Geometry.call(this);
    this.radius = b || 200;
    this.tube = c || 40;
    this.segmentsR = d || 64;
    this.segmentsT = f || 8;
    this.p = g || 2;
    this.q = h || 3;
    this.heightScale = j || 1;
    this.grid = Array(this.segmentsR);
    d = new THREE.Vector3;
    f = new THREE.Vector3;
    h = new THREE.Vector3;
    for (b = 0; b < this.segmentsR; ++b) {
        this.grid[b] = Array(this.segmentsT);
        for (c = 0; c < this.segmentsT; ++c) {
            var m =
                    b / this.segmentsR * 2 * this.p * Math.PI;
            j = c / this.segmentsT * 2 * Math.PI;
            g = k(m, j, this.q, this.p, this.radius, this.heightScale);
            m = k(m + 0.01, j, this.q, this.p, this.radius, this.heightScale);
            d.x = m.x - g.x;
            d.y = m.y - g.y;
            d.z = m.z - g.z;
            f.x = m.x + g.x;
            f.y = m.y + g.y;
            f.z = m.z + g.z;
            h.cross(d, f);
            f.cross(h, d);
            h.normalize();
            f.normalize();
            m = -this.tube * Math.cos(j);
            j = this.tube * Math.sin(j);
            g.x += m * f.x + j * h.x;
            g.y += m * f.y + j * h.y;
            g.z += m * f.z + j * h.z;
            this.grid[b][c] = this.vertices.push(new THREE.Vertex(new THREE.Vector3(g.x, g.y, g.z))) - 1
        }
    }
    for (b = 0; b < this.segmentsR; ++b)for (c =
                                                     0; c < this.segmentsT; ++c) {
        f = (b + 1) % this.segmentsR;
        h = (c + 1) % this.segmentsT;
        g = this.grid[b][c];
        d = this.grid[f][c];
        f = this.grid[f][h];
        h = this.grid[b][h];
        j = new THREE.UV(b / this.segmentsR, c / this.segmentsT);
        m = new THREE.UV((b + 1) / this.segmentsR, c / this.segmentsT);
        var p = new THREE.UV((b + 1) / this.segmentsR, (c + 1) / this.segmentsT),o = new THREE.UV(b / this.segmentsR, (c + 1) / this.segmentsT);
        this.faces.push(new THREE.Face4(g, d, f, h));
        this.faceVertexUvs[0].push([j,m,p,o])
    }
    this.computeCentroids();
    this.computeFaceNormals();
    this.computeVertexNormals()
};
TorusKnot.prototype = new THREE.Geometry;
TorusKnot.prototype.constructor = TorusKnot;
THREE.Loader = function(b) {
    this.statusDomElement = (this.showStatus = b) ? THREE.Loader.prototype.addStatusElement() : null;
    this.onLoadStart = function() {
    };
    this.onLoadProgress = function() {
    };
    this.onLoadComplete = function() {
    }
};
THREE.Loader.prototype = {addStatusElement:function() {
    var b = document.createElement("div");
    b.style.position = "absolute";
    b.style.right = "0px";
    b.style.top = "0px";
    b.style.fontSize = "0.8em";
    b.style.textAlign = "left";
    b.style.background = "rgba(0,0,0,0.25)";
    b.style.color = "#fff";
    b.style.width = "120px";
    b.style.padding = "0.5em 0.5em 0.5em 0.5em";
    b.style.zIndex = 1E3;
    b.innerHTML = "Loading ...";
    return b
},updateProgress:function(b) {
    var c = "Loaded ";
    c += b.total ? (100 * b.loaded / b.total).toFixed(0) + "%" : (b.loaded / 1E3).toFixed(2) + " KB";
    this.statusDomElement.innerHTML = c
},extractUrlbase:function(b) {
    b = b.split("/");
    b.pop();
    return b.join("/")
},init_materials:function(b, c, d) {
    b.materials = [];
    for (var f = 0; f < c.length; ++f)b.materials[f] = [THREE.Loader.prototype.createMaterial(c[f], d)]
},createMaterial:function(b, c) {
    function d(k) {
        k = Math.log(k) / Math.LN2;
        return Math.floor(k) == k
    }

    function f(k, m) {
        var p = new Image;
        p.onload = function() {
            if (!d(this.width) || !d(this.height)) {
                var o = Math.pow(2, Math.round(Math.log(this.width) / Math.LN2)),w = Math.pow(2, Math.round(Math.log(this.height) /
                        Math.LN2));
                k.image.width = o;
                k.image.height = w;
                k.image.getContext("2d").drawImage(this, 0, 0, o, w)
            } else k.image = this;
            k.needsUpdate = !0
        };
        p.src = m
    }

    var g,h,j;
    g = "MeshLambertMaterial";
    h = {color:15658734,opacity:1,map:null,lightMap:null,wireframe:b.wireframe};
    if (b.shading)if (b.shading == "Phong")g = "MeshPhongMaterial"; else b.shading == "Basic" && (g = "MeshBasicMaterial");
    if (b.blending)if (b.blending == "Additive")h.blending = THREE.AdditiveBlending; else if (b.blending == "Subtractive")h.blending = THREE.SubtractiveBlending; else if (b.blending ==
            "Multiply")h.blending = THREE.MultiplyBlending;
    if (b.transparent !== undefined)h.transparent = b.transparent;
    if (b.depthTest !== undefined)h.depthTest = b.depthTest;
    if (b.vertexColors !== undefined)if (b.vertexColors == "face")h.vertexColors = THREE.FaceColors; else if (b.vertexColors)h.vertexColors = THREE.VertexColors;
    if (b.mapDiffuse && c) {
        j = document.createElement("canvas");
        h.map = new THREE.Texture(j);
        h.map.sourceFile = b.mapDiffuse;
        f(h.map, c + "/" + b.mapDiffuse)
    } else if (b.colorDiffuse) {
        j = (b.colorDiffuse[0] * 255 << 16) + (b.colorDiffuse[1] *
                255 << 8) + b.colorDiffuse[2] * 255;
        h.color = j;
        h.opacity = b.transparency
    } else if (b.DbgColor)h.color = b.DbgColor;
    if (b.mapLightmap && c) {
        j = document.createElement("canvas");
        h.lightMap = new THREE.Texture(j);
        h.lightMap.sourceFile = b.mapLightmap;
        f(h.lightMap, c + "/" + b.mapLightmap)
    }
    return new THREE[g](h)
}};
THREE.JSONLoader = function(b) {
    THREE.Loader.call(this, b)
};
THREE.JSONLoader.prototype = new THREE.Loader;
THREE.JSONLoader.prototype.constructor = THREE.JSONLoader;
THREE.JSONLoader.prototype.supr = THREE.Loader.prototype;
THREE.JSONLoader.prototype.load = function(b) {
    var c = this,d = b.model,f = b.callback,g = b.texture_path ? b.texture_path : this.extractUrlbase(d);
    b = new Worker(d);
    b.onmessage = function(h) {
        c.createModel(h.data, f, g);
        c.onLoadComplete()
    };
    this.onLoadStart();
    b.postMessage((new Date).getTime())
};
THREE.JSONLoader.prototype.createModel = function(b, c, d) {
    var f = new THREE.Geometry;
    this.init_materials(f, b.materials, d);
    (function() {
        if (b.version === undefined || b.version != 2)console.error("Deprecated file format."); else {
            var g,h,j,k,m,p,o,w,y,v,A,F,G,L,V,z = b.faces;
            v = b.vertices;
            var K = b.normals,P = b.colors;
            p = b.scale !== undefined ? b.scale : 1;
            var S = 0;
            for (g = 0; g < b.uvs.length; g++)b.uvs[g].length && S++;
            for (g = 0; g < S; g++) {
                f.faceUvs[g] = [];
                f.faceVertexUvs[g] = []
            }
            k = 0;
            for (m = v.length; k < m;) {
                o = new THREE.Vertex;
                o.position.x = v[k++] /
                        p;
                o.position.y = v[k++] / p;
                o.position.z = v[k++] / p;
                f.vertices.push(o)
            }
            k = 0;
            for (m = z.length; k < m;) {
                v = z[k++];
                p = v & 1;
                j = v & 2;
                g = v & 4;
                h = v & 8;
                w = v & 16;
                o = v & 32;
                A = v & 64;
                v &= 128;
                if (p) {
                    F = new THREE.Face4;
                    F.a = z[k++];
                    F.b = z[k++];
                    F.c = z[k++];
                    F.d = z[k++];
                    p = 4
                } else {
                    F = new THREE.Face3;
                    F.a = z[k++];
                    F.b = z[k++];
                    F.c = z[k++];
                    p = 3
                }
                if (j) {
                    j = z[k++];
                    F.materials = f.materials[j]
                }
                j = f.faces.length;
                if (g)for (g = 0; g < S; g++) {
                    G = b.uvs[g];
                    y = z[k++];
                    V = G[y * 2];
                    y = G[y * 2 + 1];
                    f.faceUvs[g][j] = new THREE.UV(V, y)
                }
                if (h)for (g = 0; g < S; g++) {
                    G = b.uvs[g];
                    L = [];
                    for (h = 0; h < p; h++) {
                        y = z[k++];
                        V = G[y * 2];
                        y = G[y * 2 + 1];
                        L[h] = new THREE.UV(V, y)
                    }
                    f.faceVertexUvs[g][j] = L
                }
                if (w) {
                    w = z[k++] * 3;
                    h = new THREE.Vector3;
                    h.x = K[w++];
                    h.y = K[w++];
                    h.z = K[w];
                    F.normal = h
                }
                if (o)for (g = 0; g < p; g++) {
                    w = z[k++] * 3;
                    h = new THREE.Vector3;
                    h.x = K[w++];
                    h.y = K[w++];
                    h.z = K[w];
                    F.vertexNormals.push(h)
                }
                if (A) {
                    o = z[k++];
                    o = new THREE.Color(P[o]);
                    F.color = o
                }
                if (v)for (g = 0; g < p; g++) {
                    o = z[k++];
                    o = new THREE.Color(P[o]);
                    F.vertexColors.push(o)
                }
                f.faces.push(F)
            }
        }
    })();
    (function() {
        var g,h,j,k;
        if (b.skinWeights) {
            g = 0;
            for (h = b.skinWeights.length; g < h; g += 2) {
                j = b.skinWeights[g];
                k = b.skinWeights[g + 1];
                f.skinWeights.push(new THREE.Vector4(j, k, 0, 0))
            }
        }
        if (b.skinIndices) {
            g = 0;
            for (h = b.skinIndices.length; g < h; g += 2) {
                j = b.skinIndices[g];
                k = b.skinIndices[g + 1];
                f.skinIndices.push(new THREE.Vector4(j, k, 0, 0))
            }
        }
        f.bones = b.bones;
        f.animation = b.animation
    })();
    (function() {
        if (b.morphTargets !== undefined) {
            var g,h,j,k,m,p;
            g = 0;
            for (h = b.morphTargets.length; g < h; g++) {
                f.morphTargets[g] = {};
                f.morphTargets[g].name = b.morphTargets[g].name;
                f.morphTargets[g].vertices = [];
                m = f.morphTargets[g].vertices;
                p = b.morphTargets[g].vertices;
                j = 0;
                for (k = p.length; j < k; j += 3)m.push(new THREE.Vertex(new THREE.Vector3(p[j], p[j + 1], p[j + 2])))
            }
        }
        if (b.morphColors !== undefined) {
            var o,w;
            g = 0;
            for (h = b.morphColors.length; g < h; g++) {
                f.morphColors[g] = {};
                f.morphColors[g].name = b.morphColors[g].name;
                f.morphColors[g].colors = [];
                p = f.morphColors[g].colors;
                o = b.morphColors[g].colors;
                k = 0;
                for (m = o.length; k < m; k += 3) {
                    w = new THREE.Color(16755200);
                    w.setRGB(o[j], o[j + 1], o[j + 2]);
                    p.push(w)
                }
            }
        }
    })();
    (function() {
        if (b.edges !== undefined) {
            var g,h,j;
            for (g = 0; g < b.edges.length; g += 2) {
                h = b.edges[g];
                j = b.edges[g + 1];
                f.edges.push(new THREE.Edge(f.vertices[h], f.vertices[j], h, j))
            }
        }
    })();
    f.computeCentroids();
    f.computeFaceNormals();
    f.computeEdgeFaces();
    c(f)
};
THREE.BinaryLoader = function(b) {
    THREE.Loader.call(this, b)
};
THREE.BinaryLoader.prototype = new THREE.Loader;
THREE.BinaryLoader.prototype.constructor = THREE.BinaryLoader;
THREE.BinaryLoader.prototype.supr = THREE.Loader.prototype;
THREE.BinaryLoader.prototype = {load:function(b) {
    var c = b.model,d = b.callback,f = b.texture_path ? b.texture_path : THREE.Loader.prototype.extractUrlbase(c),g = b.bin_path ? b.bin_path : THREE.Loader.prototype.extractUrlbase(c);
    b = (new Date).getTime();
    c = new Worker(c);
    var h = this.showProgress ? THREE.Loader.prototype.updateProgress : null;
    c.onmessage = function(j) {
        THREE.BinaryLoader.prototype.loadAjaxBuffers(j.data.buffers, j.data.materials, d, g, f, h)
    };
    c.onerror = function(j) {
        alert("worker.onerror: " + j.message + "\n" + j.data);
        j.preventDefault()
    };
    c.postMessage(b)
},loadAjaxBuffers:function(b, c, d, f, g, h) {
    var j = new XMLHttpRequest,k = f + "/" + b,m = 0;
    j.onreadystatechange = function() {
        if (j.readyState == 4)j.status == 200 || j.status == 0 ? THREE.BinaryLoader.prototype.createBinModel(j.responseText, d, g, c) : alert("Couldn't load [" + k + "] [" + j.status + "]"); else if (j.readyState == 3) {
            if (h) {
                m == 0 && (m = j.getResponseHeader("Content-Length"));
                h({total:m,loaded:j.responseText.length})
            }
        } else j.readyState == 2 && (m = j.getResponseHeader("Content-Length"))
    };
    j.open("GET", k, !0);
    j.overrideMimeType("text/plain; charset=x-user-defined");
    j.setRequestHeader("Content-Type", "text/plain");
    j.send(null)
},createBinModel:function(b, c, d, f) {
    var g = function(h) {
        function j(R, aa) {
            var oa = o(R, aa),Ca = o(R, aa + 1),ja = o(R, aa + 2),ga = o(R, aa + 3),n = (ga << 1 & 255 | ja >> 7) - 127;
            oa |= (ja & 127) << 16 | Ca << 8;
            if (oa == 0 && n == -127)return 0;
            return(1 - 2 * (ga >> 7)) * (1 + oa * Math.pow(2, -23)) * Math.pow(2, n)
        }

        function k(R, aa) {
            var oa = o(R, aa),Ca = o(R, aa + 1),ja = o(R, aa + 2);
            return(o(R, aa + 3) << 24) + (ja << 16) + (Ca << 8) + oa
        }

        function m(R, aa) {
            var oa = o(R, aa);
            return(o(R, aa + 1) << 8) + oa
        }

        function p(R, aa) {
            var oa = o(R, aa);
            return oa > 127 ? oa - 256 : oa
        }

        function o(R, aa) {
            return R.charCodeAt(aa) & 255
        }

        function w(R) {
            var aa,oa,Ca;
            aa = k(b, R);
            oa = k(b, R + S);
            Ca = k(b, R + xa);
            R = m(b, R + ra);
            THREE.BinaryLoader.prototype.f3(L, aa, oa, Ca, R)
        }

        function y(R) {
            var aa,oa,Ca,ja,ga,n;
            aa = k(b, R);
            oa = k(b, R + S);
            Ca = k(b, R + xa);
            ja = m(b, R + ra);
            ga = k(b, R + pa);
            n = k(b, R + e);
            R = k(b, R + fa);
            THREE.BinaryLoader.prototype.f3n(L, K, aa, oa, Ca, ja, ga, n, R)
        }

        function v(R) {
            var aa,oa,Ca,ja;
            aa = k(b, R);
            oa = k(b, R + ca);
            Ca = k(b, R + ya);
            ja = k(b, R + Fa);
            R = m(b, R + Ea);
            THREE.BinaryLoader.prototype.f4(L, aa, oa, Ca, ja,
                    R)
        }

        function A(R) {
            var aa,oa,Ca,ja,ga,n,C,u;
            aa = k(b, R);
            oa = k(b, R + ca);
            Ca = k(b, R + ya);
            ja = k(b, R + Fa);
            ga = m(b, R + Ea);
            n = k(b, R + Y);
            C = k(b, R + qa);
            u = k(b, R + ta);
            R = k(b, R + va);
            THREE.BinaryLoader.prototype.f4n(L, K, aa, oa, Ca, ja, ga, n, C, u, R)
        }

        function F(R) {
            var aa,oa;
            aa = k(b, R);
            oa = k(b, R + ia);
            R = k(b, R + Z);
            THREE.BinaryLoader.prototype.uv3(L.faceVertexUvs[0], P[aa * 2], P[aa * 2 + 1], P[oa * 2], P[oa * 2 + 1], P[R * 2], P[R * 2 + 1])
        }

        function G(R) {
            var aa,oa,Ca;
            aa = k(b, R);
            oa = k(b, R + na);
            Ca = k(b, R + Ba);
            R = k(b, R + ka);
            THREE.BinaryLoader.prototype.uv4(L.faceVertexUvs[0],
                    P[aa * 2], P[aa * 2 + 1], P[oa * 2], P[oa * 2 + 1], P[Ca * 2], P[Ca * 2 + 1], P[R * 2], P[R * 2 + 1])
        }

        var L = this,V = 0,z,K = [],P = [],S,xa,ra,pa,e,fa,ca,ya,Fa,Ea,Y,qa,ta,va,ia,Z,na,Ba,ka,la,Da,Sa,$a,Ya,Ta;
        THREE.Geometry.call(this);
        THREE.Loader.prototype.init_materials(L, f, h);
        z = {signature:b.substr(V, 8),header_bytes:o(b, V + 8),vertex_coordinate_bytes:o(b, V + 9),normal_coordinate_bytes:o(b, V + 10),uv_coordinate_bytes:o(b, V + 11),vertex_index_bytes:o(b, V + 12),normal_index_bytes:o(b, V + 13),uv_index_bytes:o(b, V + 14),material_index_bytes:o(b, V + 15),nvertices:k(b,
                V + 16),nnormals:k(b, V + 16 + 4),nuvs:k(b, V + 16 + 8),ntri_flat:k(b, V + 16 + 12),ntri_smooth:k(b, V + 16 + 16),ntri_flat_uv:k(b, V + 16 + 20),ntri_smooth_uv:k(b, V + 16 + 24),nquad_flat:k(b, V + 16 + 28),nquad_smooth:k(b, V + 16 + 32),nquad_flat_uv:k(b, V + 16 + 36),nquad_smooth_uv:k(b, V + 16 + 40)};
        V += z.header_bytes;
        S = z.vertex_index_bytes;
        xa = z.vertex_index_bytes * 2;
        ra = z.vertex_index_bytes * 3;
        pa = z.vertex_index_bytes * 3 + z.material_index_bytes;
        e = z.vertex_index_bytes * 3 + z.material_index_bytes + z.normal_index_bytes;
        fa = z.vertex_index_bytes * 3 + z.material_index_bytes +
                z.normal_index_bytes * 2;
        ca = z.vertex_index_bytes;
        ya = z.vertex_index_bytes * 2;
        Fa = z.vertex_index_bytes * 3;
        Ea = z.vertex_index_bytes * 4;
        Y = z.vertex_index_bytes * 4 + z.material_index_bytes;
        qa = z.vertex_index_bytes * 4 + z.material_index_bytes + z.normal_index_bytes;
        ta = z.vertex_index_bytes * 4 + z.material_index_bytes + z.normal_index_bytes * 2;
        va = z.vertex_index_bytes * 4 + z.material_index_bytes + z.normal_index_bytes * 3;
        ia = z.uv_index_bytes;
        Z = z.uv_index_bytes * 2;
        na = z.uv_index_bytes;
        Ba = z.uv_index_bytes * 2;
        ka = z.uv_index_bytes * 3;
        h = z.vertex_index_bytes *
                3 + z.material_index_bytes;
        Ta = z.vertex_index_bytes * 4 + z.material_index_bytes;
        la = z.ntri_flat * h;
        Da = z.ntri_smooth * (h + z.normal_index_bytes * 3);
        Sa = z.ntri_flat_uv * (h + z.uv_index_bytes * 3);
        $a = z.ntri_smooth_uv * (h + z.normal_index_bytes * 3 + z.uv_index_bytes * 3);
        Ya = z.nquad_flat * Ta;
        h = z.nquad_smooth * (Ta + z.normal_index_bytes * 4);
        Ta = z.nquad_flat_uv * (Ta + z.uv_index_bytes * 4);
        V += function(R) {
            for (var aa,oa,Ca,ja = z.vertex_coordinate_bytes * 3,ga = R + z.nvertices * ja; R < ga; R += ja) {
                aa = j(b, R);
                oa = j(b, R + z.vertex_coordinate_bytes);
                Ca = j(b, R + z.vertex_coordinate_bytes *
                        2);
                THREE.BinaryLoader.prototype.v(L, aa, oa, Ca)
            }
            return z.nvertices * ja
        }(V);
        V += function(R) {
            for (var aa,oa,Ca,ja = z.normal_coordinate_bytes * 3,ga = R + z.nnormals * ja; R < ga; R += ja) {
                aa = p(b, R);
                oa = p(b, R + z.normal_coordinate_bytes);
                Ca = p(b, R + z.normal_coordinate_bytes * 2);
                K.push(aa / 127, oa / 127, Ca / 127)
            }
            return z.nnormals * ja
        }(V);
        V += function(R) {
            for (var aa,oa,Ca = z.uv_coordinate_bytes * 2,ja = R + z.nuvs * Ca; R < ja; R += Ca) {
                aa = j(b, R);
                oa = j(b, R + z.uv_coordinate_bytes);
                P.push(aa, oa)
            }
            return z.nuvs * Ca
        }(V);
        la = V + la;
        Da = la + Da;
        Sa = Da + Sa;
        $a = Sa + $a;
        Ya =
                $a + Ya;
        h = Ya + h;
        Ta = h + Ta;
        (function(R) {
            var aa,oa = z.vertex_index_bytes * 3 + z.material_index_bytes,Ca = oa + z.uv_index_bytes * 3,ja = R + z.ntri_flat_uv * Ca;
            for (aa = R; aa < ja; aa += Ca) {
                w(aa);
                F(aa + oa)
            }
            return ja - R
        })(Da);
        (function(R) {
            var aa,oa = z.vertex_index_bytes * 3 + z.material_index_bytes + z.normal_index_bytes * 3,Ca = oa + z.uv_index_bytes * 3,ja = R + z.ntri_smooth_uv * Ca;
            for (aa = R; aa < ja; aa += Ca) {
                y(aa);
                F(aa + oa)
            }
            return ja - R
        })(Sa);
        (function(R) {
            var aa,oa = z.vertex_index_bytes * 4 + z.material_index_bytes,Ca = oa + z.uv_index_bytes * 4,ja = R + z.nquad_flat_uv *
                    Ca;
            for (aa = R; aa < ja; aa += Ca) {
                v(aa);
                G(aa + oa)
            }
            return ja - R
        })(h);
        (function(R) {
            var aa,oa = z.vertex_index_bytes * 4 + z.material_index_bytes + z.normal_index_bytes * 4,Ca = oa + z.uv_index_bytes * 4,ja = R + z.nquad_smooth_uv * Ca;
            for (aa = R; aa < ja; aa += Ca) {
                A(aa);
                G(aa + oa)
            }
            return ja - R
        })(Ta);
        (function(R) {
            var aa,oa = z.vertex_index_bytes * 3 + z.material_index_bytes,Ca = R + z.ntri_flat * oa;
            for (aa = R; aa < Ca; aa += oa)w(aa);
            return Ca - R
        })(V);
        (function(R) {
            var aa,oa = z.vertex_index_bytes * 3 + z.material_index_bytes + z.normal_index_bytes * 3,Ca = R + z.ntri_smooth *
                    oa;
            for (aa = R; aa < Ca; aa += oa)y(aa);
            return Ca - R
        })(la);
        (function(R) {
            var aa,oa = z.vertex_index_bytes * 4 + z.material_index_bytes,Ca = R + z.nquad_flat * oa;
            for (aa = R; aa < Ca; aa += oa)v(aa);
            return Ca - R
        })($a);
        (function(R) {
            var aa,oa = z.vertex_index_bytes * 4 + z.material_index_bytes + z.normal_index_bytes * 4,Ca = R + z.nquad_smooth * oa;
            for (aa = R; aa < Ca; aa += oa)A(aa);
            return Ca - R
        })(Ya);
        this.computeCentroids();
        this.computeFaceNormals()
    };
    g.prototype = new THREE.Geometry;
    g.prototype.constructor = g;
    c(new g(d))
},v:function(b, c, d, f) {
    b.vertices.push(new THREE.Vertex(new THREE.Vector3(c,
            d, f)))
},f3:function(b, c, d, f, g) {
    b.faces.push(new THREE.Face3(c, d, f, null, null, b.materials[g]))
},f4:function(b, c, d, f, g, h) {
    b.faces.push(new THREE.Face4(c, d, f, g, null, null, b.materials[h]))
},f3n:function(b, c, d, f, g, h, j, k, m) {
    h = b.materials[h];
    var p = c[k * 3],o = c[k * 3 + 1];
    k = c[k * 3 + 2];
    var w = c[m * 3],y = c[m * 3 + 1];
    m = c[m * 3 + 2];
    b.faces.push(new THREE.Face3(d, f, g, [new THREE.Vector3(c[j * 3], c[j * 3 + 1], c[j * 3 + 2]),new THREE.Vector3(p, o, k),new THREE.Vector3(w, y, m)], null, h))
},f4n:function(b, c, d, f, g, h, j, k, m, p, o) {
    j = b.materials[j];
    var w =
            c[m * 3],y = c[m * 3 + 1];
    m = c[m * 3 + 2];
    var v = c[p * 3],A = c[p * 3 + 1];
    p = c[p * 3 + 2];
    var F = c[o * 3],G = c[o * 3 + 1];
    o = c[o * 3 + 2];
    b.faces.push(new THREE.Face4(d, f, g, h, [new THREE.Vector3(c[k * 3], c[k * 3 + 1], c[k * 3 + 2]),new THREE.Vector3(w, y, m),new THREE.Vector3(v, A, p),new THREE.Vector3(F, G, o)], null, j))
},uv3:function(b, c, d, f, g, h, j) {
    var k = [];
    k.push(new THREE.UV(c, d));
    k.push(new THREE.UV(f, g));
    k.push(new THREE.UV(h, j));
    b.push(k)
},uv4:function(b, c, d, f, g, h, j, k, m) {
    var p = [];
    p.push(new THREE.UV(c, d));
    p.push(new THREE.UV(f, g));
    p.push(new THREE.UV(h,
            j));
    p.push(new THREE.UV(k, m));
    b.push(p)
}};
THREE.SceneLoader = function() {
};
THREE.SceneLoader.prototype = {load:function(b, c, d, f) {
    var g = new Worker(b);
    g.postMessage(0);
    var h = THREE.Loader.prototype.extractUrlbase(b);
    g.onmessage = function(j) {
        function k(ia, Z) {
            return Z == "relativeToHTML" ? ia : h + "/" + ia
        }

        function m() {
            for (v in e.objects)if (!Y.objects[v]) {
                V = e.objects[v];
                if (S = Y.geometries[V.geometry]) {
                    pa = [];
                    for (va = 0; va < V.materials.length; va++)pa[va] = Y.materials[V.materials[va]];
                    z = V.position;
                    r = V.rotation;
                    q = V.quaternion;
                    s = V.scale;
                    q = 0;
                    pa.length == 0 && (pa[0] = new THREE.MeshFaceMaterial);
                    object =
                            new THREE.Mesh(S, pa);
                    object.position.set(z[0], z[1], z[2]);
                    if (q) {
                        object.quaternion.set(q[0], q[1], q[2], q[3]);
                        object.useQuaternion = !0
                    } else object.rotation.set(r[0], r[1], r[2]);
                    object.scale.set(s[0], s[1], s[2]);
                    object.visible = V.visible;
                    Y.scene.addObject(object);
                    Y.objects[v] = object
                }
            }
        }

        function p(ia) {
            return function(Z) {
                Y.geometries[ia] = Z;
                m();
                ca -= 1;
                o()
            }
        }

        function o() {
            f({total_models:Fa,total_textures:Ea,loaded_models:Fa - ca,loaded_textures:Ea - ya}, Y);
            ca == 0 && ya == 0 && d(Y)
        }

        var w,y,v,A,F,G,L,V,z,K,P,S,xa,ra,pa,e,fa,
                ca,ya,Fa,Ea,Y;
        e = j.data;
        j = new THREE.BinaryLoader;
        fa = new THREE.JSONLoader;
        ya = ca = 0;
        Y = {scene:new THREE.Scene,geometries:{},materials:{},textures:{},objects:{},cameras:{},lights:{},fogs:{}};
        if (e.transform) {
            var qa = e.transform.position;
            K = e.transform.rotation;
            var ta = e.transform.scale;
            qa && Y.scene.position.set(qa[0], qa[1], qa[2]);
            K && Y.scene.rotation.set(K[0], K[1], K[2]);
            ta && Y.scene.scale.set(ta[0], ta[1], ta[2]);
            (qa || K || ta) && Y.scene.updateMatrix()
        }
        qa = function() {
            ya -= 1;
            o()
        };
        for (F in e.cameras) {
            K = e.cameras[F];
            if (K.type ==
                    "perspective")xa = new THREE.Camera(K.fov, K.aspect, K.near, K.far); else if (K.type == "ortho") {
                xa = new THREE.Camera;
                xa.projectionMatrix = THREE.Matrix4.makeOrtho(K.left, K.right, K.top, K.bottom, K.near, K.far)
            }
            z = K.position;
            K = K.target;
            xa.position.set(z[0], z[1], z[2]);
            xa.target.position.set(K[0], K[1], K[2]);
            Y.cameras[F] = xa
        }
        for (A in e.lights) {
            F = e.lights[A];
            xa = F.color !== undefined ? F.color : 16777215;
            K = F.intensity !== undefined ? F.intensity : 1;
            if (F.type == "directional") {
                z = F.direction;
                light = new THREE.DirectionalLight(xa, K);
                light.position.set(z[0],
                        z[1], z[2]);
                light.position.normalize()
            } else if (F.type == "point") {
                z = F.position;
                light = new THREE.PointLight(xa, K);
                light.position.set(z[0], z[1], z[2])
            }
            Y.scene.addLight(light);
            Y.lights[A] = light
        }
        for (G in e.fogs) {
            A = e.fogs[G];
            if (A.type == "linear")ra = new THREE.Fog(0, A.near, A.far); else A.type == "exp2" && (ra = new THREE.FogExp2(0, A.density));
            K = A.color;
            ra.color.setRGB(K[0], K[1], K[2]);
            Y.fogs[G] = ra
        }
        if (Y.cameras && e.defaults.camera)Y.currentCamera = Y.cameras[e.defaults.camera];
        if (Y.fogs && e.defaults.fog)Y.scene.fog = Y.fogs[e.defaults.fog];
        K = e.defaults.bgcolor;
        Y.bgColor = new THREE.Color;
        Y.bgColor.setRGB(K[0], K[1], K[2]);
        Y.bgColorAlpha = e.defaults.bgalpha;
        for (w in e.geometries) {
            G = e.geometries[w];
            if (G.type == "bin_mesh" || G.type == "ascii_mesh")ca += 1
        }
        Fa = ca;
        for (w in e.geometries) {
            G = e.geometries[w];
            if (G.type == "cube") {
                S = new Cube(G.width, G.height, G.depth, G.segmentsWidth, G.segmentsHeight, G.segmentsDepth, null, G.flipped, G.sides);
                Y.geometries[w] = S
            } else if (G.type == "plane") {
                S = new Plane(G.width, G.height, G.segmentsWidth, G.segmentsHeight);
                Y.geometries[w] =
                        S
            } else if (G.type == "sphere") {
                S = new Sphere(G.radius, G.segmentsWidth, G.segmentsHeight);
                Y.geometries[w] = S
            } else if (G.type == "cylinder") {
                S = new Cylinder(G.numSegs, G.topRad, G.botRad, G.height, G.topOffset, G.botOffset);
                Y.geometries[w] = S
            } else if (G.type == "torus") {
                S = new Torus(G.radius, G.tube, G.segmentsR, G.segmentsT);
                Y.geometries[w] = S
            } else if (G.type == "icosahedron") {
                S = new Icosahedron(G.subdivisions);
                Y.geometries[w] = S
            } else if (G.type == "bin_mesh")j.load({model:k(G.url, e.urlBaseType),callback:p(w)}); else G.type == "ascii_mesh" &&
            fa.load({model:k(G.url, e.urlBaseType),callback:p(w)})
        }
        for (L in e.textures) {
            w = e.textures[L];
            ya += w.url instanceof Array ? w.url.length : 1
        }
        Ea = ya;
        for (L in e.textures) {
            w = e.textures[L];
            if (w.mapping != undefined && THREE[w.mapping] != undefined)w.mapping = new THREE[w.mapping];
            if (w.url instanceof Array) {
                G = [];
                for (var va = 0; va < w.url.length; va++)G[va] = k(w.url[va], e.urlBaseType);
                G = ImageUtils.loadTextureCube(G, w.mapping, qa)
            } else {
                G = ImageUtils.loadTexture(k(w.url, e.urlBaseType), w.mapping, qa);
                if (THREE[w.minFilter] != undefined)G.minFilter =
                        THREE[w.minFilter];
                if (THREE[w.magFilter] != undefined)G.magFilter = THREE[w.magFilter]
            }
            Y.textures[L] = G
        }
        for (y in e.materials) {
            L = e.materials[y];
            for (P in L.parameters)if (P == "envMap" || P == "map" || P == "lightMap")L.parameters[P] = Y.textures[L.parameters[P]]; else if (P == "shading")L.parameters[P] = L.parameters[P] == "flat" ? THREE.FlatShading : THREE.SmoothShading; else if (P == "blending")L.parameters[P] = THREE[L.parameters[P]] ? THREE[L.parameters[P]] : THREE.NormalBlending; else P == "combine" && (L.parameters[P] = L.parameters[P] ==
                    "MixOperation" ? THREE.MixOperation : THREE.MultiplyOperation);
            L = new THREE[L.type](L.parameters);
            Y.materials[y] = L
        }
        m();
        c(Y)
    }
}};
if (!window.Int32Array) {
    window.Int32Array = Array;
    window.Float32Array = Array
}
THREE.MarchingCubes = function(b, c) {
    THREE.Object3D.call(this);
    this.materials = c instanceof Array ? c : [c];
    this.init = function(d) {
        this.isolation = 80;
        this.size = d;
        this.size2 = this.size * this.size;
        this.size3 = this.size2 * this.size;
        this.halfsize = this.size / 2;
        this.delta = 2 / this.size;
        this.yd = this.size;
        this.zd = this.size2;
        this.field = new Float32Array(this.size3);
        this.normal_cache = new Float32Array(this.size3 * 3);
        this.vlist = new Float32Array(36);
        this.nlist = new Float32Array(36);
        this.firstDraw = !0;
        this.maxCount = 4096;
        this.count =
                0;
        this.hasPos = !1;
        this.hasNormal = !1;
        this.positionArray = new Float32Array(this.maxCount * 3);
        this.normalArray = new Float32Array(this.maxCount * 3)
    };
    this.lerp = function(d, f, g) {
        return d + (f - d) * g
    };
    this.VIntX = function(d, f, g, h, j, k, m, p, o, w) {
        j = (j - o) / (w - o);
        o = this.normal_cache;
        f[h] = k + j * this.delta;
        f[h + 1] = m;
        f[h + 2] = p;
        g[h] = this.lerp(o[d], o[d + 3], j);
        g[h + 1] = this.lerp(o[d + 1], o[d + 4], j);
        g[h + 2] = this.lerp(o[d + 2], o[d + 5], j)
    };
    this.VIntY = function(d, f, g, h, j, k, m, p, o, w) {
        j = (j - o) / (w - o);
        o = this.normal_cache;
        f[h] = k;
        f[h + 1] = m + j * this.delta;
        f[h +
                2] = p;
        f = d + this.yd * 3;
        g[h] = this.lerp(o[d], o[f], j);
        g[h + 1] = this.lerp(o[d + 1], o[f + 1], j);
        g[h + 2] = this.lerp(o[d + 2], o[f + 2], j)
    };
    this.VIntZ = function(d, f, g, h, j, k, m, p, o, w) {
        j = (j - o) / (w - o);
        o = this.normal_cache;
        f[h] = k;
        f[h + 1] = m;
        f[h + 2] = p + j * this.delta;
        f = d + this.zd * 3;
        g[h] = this.lerp(o[d], o[f], j);
        g[h + 1] = this.lerp(o[d + 1], o[f + 1], j);
        g[h + 2] = this.lerp(o[d + 2], o[f + 2], j)
    };
    this.compNorm = function(d) {
        var f = d * 3;
        if (this.normal_cache[f] == 0) {
            this.normal_cache[f] = this.field[d - 1] - this.field[d + 1];
            this.normal_cache[f + 1] = this.field[d - this.yd] -
                    this.field[d + this.yd];
            this.normal_cache[f + 2] = this.field[d - this.zd] - this.field[d + this.zd]
        }
    };
    this.polygonize = function(d, f, g, h, j, k) {
        var m = h + 1,p = h + this.yd,o = h + this.zd,w = m + this.yd,y = m + this.zd,v = h + this.yd + this.zd,A = m + this.yd + this.zd,F = 0,G = this.field[h],L = this.field[m],V = this.field[p],z = this.field[w],K = this.field[o],P = this.field[y],S = this.field[v],xa = this.field[A];
        G < j && (F |= 1);
        L < j && (F |= 2);
        V < j && (F |= 8);
        z < j && (F |= 4);
        K < j && (F |= 16);
        P < j && (F |= 32);
        S < j && (F |= 128);
        xa < j && (F |= 64);
        var ra = THREE.edgeTable[F];
        if (ra == 0)return 0;
        var pa = this.delta,e = d + pa,fa = f + pa;
        pa = g + pa;
        if (ra & 1) {
            this.compNorm(h);
            this.compNorm(m);
            this.VIntX(h * 3, this.vlist, this.nlist, 0, j, d, f, g, G, L)
        }
        if (ra & 2) {
            this.compNorm(m);
            this.compNorm(w);
            this.VIntY(m * 3, this.vlist, this.nlist, 3, j, e, f, g, L, z)
        }
        if (ra & 4) {
            this.compNorm(p);
            this.compNorm(w);
            this.VIntX(p * 3, this.vlist, this.nlist, 6, j, d, fa, g, V, z)
        }
        if (ra & 8) {
            this.compNorm(h);
            this.compNorm(p);
            this.VIntY(h * 3, this.vlist, this.nlist, 9, j, d, f, g, G, V)
        }
        if (ra & 16) {
            this.compNorm(o);
            this.compNorm(y);
            this.VIntX(o * 3, this.vlist, this.nlist,
                    12, j, d, f, pa, K, P)
        }
        if (ra & 32) {
            this.compNorm(y);
            this.compNorm(A);
            this.VIntY(y * 3, this.vlist, this.nlist, 15, j, e, f, pa, P, xa)
        }
        if (ra & 64) {
            this.compNorm(v);
            this.compNorm(A);
            this.VIntX(v * 3, this.vlist, this.nlist, 18, j, d, fa, pa, S, xa)
        }
        if (ra & 128) {
            this.compNorm(o);
            this.compNorm(v);
            this.VIntY(o * 3, this.vlist, this.nlist, 21, j, d, f, pa, K, S)
        }
        if (ra & 256) {
            this.compNorm(h);
            this.compNorm(o);
            this.VIntZ(h * 3, this.vlist, this.nlist, 24, j, d, f, g, G, K)
        }
        if (ra & 512) {
            this.compNorm(m);
            this.compNorm(y);
            this.VIntZ(m * 3, this.vlist, this.nlist, 27, j, e,
                    f, g, L, P)
        }
        if (ra & 1024) {
            this.compNorm(w);
            this.compNorm(A);
            this.VIntZ(w * 3, this.vlist, this.nlist, 30, j, e, fa, g, z, xa)
        }
        if (ra & 2048) {
            this.compNorm(p);
            this.compNorm(v);
            this.VIntZ(p * 3, this.vlist, this.nlist, 33, j, d, fa, g, V, S)
        }
        F <<= 4;
        for (j = h = 0; THREE.triTable[F + j] != -1;) {
            d = F + j;
            f = d + 1;
            g = d + 2;
            this.posnormtriv(this.vlist, this.nlist, 3 * THREE.triTable[d], 3 * THREE.triTable[f], 3 * THREE.triTable[g], k);
            j += 3;
            h++
        }
        return h
    };
    this.posnormtriv = function(d, f, g, h, j, k) {
        var m = this.count * 3;
        this.positionArray[m] = d[g];
        this.positionArray[m + 1] = d[g +
                1];
        this.positionArray[m + 2] = d[g + 2];
        this.positionArray[m + 3] = d[h];
        this.positionArray[m + 4] = d[h + 1];
        this.positionArray[m + 5] = d[h + 2];
        this.positionArray[m + 6] = d[j];
        this.positionArray[m + 7] = d[j + 1];
        this.positionArray[m + 8] = d[j + 2];
        this.normalArray[m] = f[g];
        this.normalArray[m + 1] = f[g + 1];
        this.normalArray[m + 2] = f[g + 2];
        this.normalArray[m + 3] = f[h];
        this.normalArray[m + 4] = f[h + 1];
        this.normalArray[m + 5] = f[h + 2];
        this.normalArray[m + 6] = f[j];
        this.normalArray[m + 7] = f[j + 1];
        this.normalArray[m + 8] = f[j + 2];
        this.hasPos = !0;
        this.hasNormal = !0;
        this.count += 3;
        this.count >= this.maxCount - 3 && k(this)
    };
    this.begin = function() {
        this.count = 0;
        this.hasPos = !1;
        this.hasNormal = !1
    };
    this.end = function(d) {
        if (this.count != 0) {
            for (var f = this.count * 3; f < this.positionArray.length; f++)this.positionArray[f] = 0;
            d(this)
        }
    };
    this.addBall = function(d, f, g, h, j) {
        var k = this.size * Math.sqrt(h / j),m = g * this.size,p = f * this.size,o = d * this.size,w = Math.floor(m - k);
        w < 1 && (w = 1);
        m = Math.floor(m + k);
        m > this.size - 1 && (m = this.size - 1);
        var y = Math.floor(p - k);
        y < 1 && (y = 1);
        p = Math.floor(p + k);
        p > this.size - 1 && (p =
                this.size - 1);
        var v = Math.floor(o - k);
        v < 1 && (v = 1);
        k = Math.floor(o + k);
        k > this.size - 1 && (k = this.size - 1);
        for (var A,F,G,L,V,z; w < m; w++) {
            o = this.size2 * w;
            F = w / this.size - g;
            V = F * F;
            for (F = y; F < p; F++) {
                G = o + this.size * F;
                A = F / this.size - f;
                z = A * A;
                for (A = v; A < k; A++) {
                    L = A / this.size - d;
                    L = h / (1.0E-6 + L * L + z + V) - j;
                    L > 0 && (this.field[G + A] += L)
                }
            }
        }
    };
    this.addPlaneX = function(d, f) {
        var g,h,j,k,m,p = this.size,o = this.yd,w = this.zd,y = this.field,v = p * Math.sqrt(d / f);
        v > p && (v = p);
        for (g = 0; g < v; g++) {
            h = g / p;
            h *= h;
            k = d / (1.0E-4 + h) - f;
            if (k > 0)for (h = 0; h < p; h++) {
                m = g + h * o;
                for (j =
                             0; j < p; j++)y[w * j + m] += k
            }
        }
    };
    this.addPlaneY = function(d, f) {
        var g,h,j,k,m,p,o = this.size,w = this.yd,y = this.zd,v = this.field,A = o * Math.sqrt(d / f);
        A > o && (A = o);
        for (h = 0; h < A; h++) {
            g = h / o;
            g *= g;
            k = d / (1.0E-4 + g) - f;
            if (k > 0) {
                m = h * w;
                for (g = 0; g < o; g++) {
                    p = m + g;
                    for (j = 0; j < o; j++)v[y * j + p] += k
                }
            }
        }
    };
    this.addPlaneZ = function(d, f) {
        var g,h,j,k,m,p;
        size = this.size;
        yd = this.yd;
        zd = this.zd;
        field = this.field;
        dist = size * Math.sqrt(d / f);
        dist > size && (dist = size);
        for (j = 0; j < dist; j++) {
            g = j / size;
            g *= g;
            k = d / (1.0E-4 + g) - f;
            if (k > 0) {
                m = zd * j;
                for (h = 0; h < size; h++) {
                    p = m + h * yd;
                    for (g = 0; g < size; g++)field[p + g] += k
                }
            }
        }
    };
    this.reset = function() {
        var d;
        for (d = 0; d < this.size3; d++) {
            this.normal_cache[d * 3] = 0;
            this.field[d] = 0
        }
    };
    this.render = function(d) {
        this.begin();
        var f,g,h,j,k,m,p,o,w,y = this.size - 2;
        for (j = 1; j < y; j++) {
            w = this.size2 * j;
            p = (j - this.halfsize) / this.halfsize;
            for (h = 1; h < y; h++) {
                o = w + this.size * h;
                m = (h - this.halfsize) / this.halfsize;
                for (g = 1; g < y; g++) {
                    k = (g - this.halfsize) / this.halfsize;
                    f = o + g;
                    this.polygonize(k, m, p, f, this.isolation, d)
                }
            }
        }
        this.end(d)
    };
    this.generateGeometry = function() {
        var d = 0,f = new THREE.Geometry,
                g = [];
        this.render(function(h) {
            var j,k,m,p,o,w,y,v;
            for (j = 0; j < h.count; j++) {
                y = j * 3;
                o = y + 1;
                v = y + 2;
                k = h.positionArray[y];
                m = h.positionArray[o];
                p = h.positionArray[v];
                w = new THREE.Vector3(k, m, p);
                k = h.normalArray[y];
                m = h.normalArray[o];
                p = h.normalArray[v];
                y = new THREE.Vector3(k, m, p);
                y.normalize();
                o = new THREE.Vertex(w);
                f.vertices.push(o);
                g.push(y)
            }
            nfaces = h.count / 3;
            for (j = 0; j < nfaces; j++) {
                y = (d + j) * 3;
                o = y + 1;
                v = y + 2;
                w = g[y];
                k = g[o];
                m = g[v];
                y = new THREE.Face3(y, o, v, [w,k,m]);
                f.faces.push(y)
            }
            d += nfaces;
            h.count = 0
        });
        return f
    };
    this.init(b)
};
THREE.MarchingCubes.prototype = new THREE.Object3D;
THREE.MarchingCubes.prototype.constructor = THREE.MarchingCubes;
THREE.edgeTable = new Int32Array([0,265,515,778,1030,1295,1541,1804,2060,2309,2575,2822,3082,3331,3593,3840,400,153,915,666,1430,1183,1941,1692,2460,2197,2975,2710,3482,3219,3993,3728,560,825,51,314,1590,1855,1077,1340,2620,2869,2111,2358,3642,3891,3129,3376,928,681,419,170,1958,1711,1445,1196,2988,2725,2479,2214,4010,3747,3497,3232,1120,1385,1635,1898,102,367,613,876,3180,3429,3695,3942,2154,2403,2665,2912,1520,1273,2035,1786,502,255,1013,764,3580,3317,4095,3830,2554,2291,3065,2800,1616,1881,1107,
    1370,598,863,85,348,3676,3925,3167,3414,2650,2899,2137,2384,1984,1737,1475,1226,966,719,453,204,4044,3781,3535,3270,3018,2755,2505,2240,2240,2505,2755,3018,3270,3535,3781,4044,204,453,719,966,1226,1475,1737,1984,2384,2137,2899,2650,3414,3167,3925,3676,348,85,863,598,1370,1107,1881,1616,2800,3065,2291,2554,3830,4095,3317,3580,764,1013,255,502,1786,2035,1273,1520,2912,2665,2403,2154,3942,3695,3429,3180,876,613,367,102,1898,1635,1385,1120,3232,3497,3747,4010,2214,2479,2725,2988,1196,1445,1711,1958,170,
    419,681,928,3376,3129,3891,3642,2358,2111,2869,2620,1340,1077,1855,1590,314,51,825,560,3728,3993,3219,3482,2710,2975,2197,2460,1692,1941,1183,1430,666,915,153,400,3840,3593,3331,3082,2822,2575,2309,2060,1804,1541,1295,1030,778,515,265,0]);
THREE.triTable = new Int32Array([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,9,8,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,2,10,0,2,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,8,3,2,10,8,10,9,8,-1,-1,-1,-1,-1,-1,-1,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,8,11,0,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,11,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,1,11,2,1,9,11,9,8,11,-1,-1,-1,-1,-1,-1,-1,3,10,1,11,10,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,10,1,0,8,10,8,11,10,-1,-1,-1,-1,-1,-1,-1,3,9,0,3,11,9,11,10,9,-1,-1,-1,-1,-1,-1,-1,9,8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,7,3,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,1,9,4,7,1,7,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,8,4,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,4,7,3,0,4,1,2,10,-1,-1,-1,-1,-1,-1,-1,9,2,10,9,0,2,8,4,7,
    -1,-1,-1,-1,-1,-1,-1,2,10,9,2,9,7,2,7,3,7,9,4,-1,-1,-1,-1,8,4,7,3,11,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,4,7,11,2,4,2,0,4,-1,-1,-1,-1,-1,-1,-1,9,0,1,8,4,7,2,3,11,-1,-1,-1,-1,-1,-1,-1,4,7,11,9,4,11,9,11,2,9,2,1,-1,-1,-1,-1,3,10,1,3,11,10,7,8,4,-1,-1,-1,-1,-1,-1,-1,1,11,10,1,4,11,1,0,4,7,11,4,-1,-1,-1,-1,4,7,8,9,0,11,9,11,10,11,0,3,-1,-1,-1,-1,4,7,11,4,11,9,9,11,10,-1,-1,-1,-1,-1,-1,-1,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,5,4,1,5,0,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,8,5,4,8,3,5,3,1,5,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,10,4,9,5,-1,-1,-1,-1,-1,-1,-1,5,2,10,5,4,2,4,0,2,-1,-1,-1,-1,-1,-1,-1,2,10,5,3,2,5,3,5,4,3,4,8,-1,-1,-1,-1,9,5,4,2,3,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,11,2,0,8,11,4,9,5,-1,-1,-1,-1,-1,-1,-1,0,5,4,0,1,5,2,3,11,-1,-1,-1,-1,-1,-1,-1,2,1,5,2,5,8,2,8,11,4,8,5,-1,-1,-1,-1,10,3,11,10,1,3,9,5,4,-1,-1,-1,-1,-1,-1,-1,4,9,5,0,8,1,8,10,1,8,11,10,-1,-1,-1,-1,5,4,0,5,0,11,5,11,10,11,0,3,-1,-1,-1,-1,5,4,8,5,
    8,10,10,8,11,-1,-1,-1,-1,-1,-1,-1,9,7,8,5,7,9,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,3,0,9,5,3,5,7,3,-1,-1,-1,-1,-1,-1,-1,0,7,8,0,1,7,1,5,7,-1,-1,-1,-1,-1,-1,-1,1,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,7,8,9,5,7,10,1,2,-1,-1,-1,-1,-1,-1,-1,10,1,2,9,5,0,5,3,0,5,7,3,-1,-1,-1,-1,8,0,2,8,2,5,8,5,7,10,5,2,-1,-1,-1,-1,2,10,5,2,5,3,3,5,7,-1,-1,-1,-1,-1,-1,-1,7,9,5,7,8,9,3,11,2,-1,-1,-1,-1,-1,-1,-1,9,5,7,9,7,2,9,2,0,2,7,11,-1,-1,-1,-1,2,3,11,0,1,8,1,7,8,1,5,7,-1,-1,-1,-1,11,2,1,11,1,7,7,1,5,-1,-1,-1,-1,-1,-1,
    -1,9,5,8,8,5,7,10,1,3,10,3,11,-1,-1,-1,-1,5,7,0,5,0,9,7,11,0,1,0,10,11,10,0,-1,11,10,0,11,0,3,10,5,0,8,0,7,5,7,0,-1,11,10,5,7,11,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,6,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,0,1,5,10,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,8,3,1,9,8,5,10,6,-1,-1,-1,-1,-1,-1,-1,1,6,5,2,6,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,6,5,1,2,6,3,0,8,-1,-1,-1,-1,-1,-1,-1,9,6,5,9,0,6,0,2,6,-1,-1,-1,-1,-1,-1,-1,5,9,8,5,8,2,5,2,6,3,2,8,-1,-1,-1,-1,2,3,11,10,6,
    5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,0,8,11,2,0,10,6,5,-1,-1,-1,-1,-1,-1,-1,0,1,9,2,3,11,5,10,6,-1,-1,-1,-1,-1,-1,-1,5,10,6,1,9,2,9,11,2,9,8,11,-1,-1,-1,-1,6,3,11,6,5,3,5,1,3,-1,-1,-1,-1,-1,-1,-1,0,8,11,0,11,5,0,5,1,5,11,6,-1,-1,-1,-1,3,11,6,0,3,6,0,6,5,0,5,9,-1,-1,-1,-1,6,5,9,6,9,11,11,9,8,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,3,0,4,7,3,6,5,10,-1,-1,-1,-1,-1,-1,-1,1,9,0,5,10,6,8,4,7,-1,-1,-1,-1,-1,-1,-1,10,6,5,1,9,7,1,7,3,7,9,4,-1,-1,-1,-1,6,1,2,6,5,1,4,7,8,-1,-1,-1,-1,
    -1,-1,-1,1,2,5,5,2,6,3,0,4,3,4,7,-1,-1,-1,-1,8,4,7,9,0,5,0,6,5,0,2,6,-1,-1,-1,-1,7,3,9,7,9,4,3,2,9,5,9,6,2,6,9,-1,3,11,2,7,8,4,10,6,5,-1,-1,-1,-1,-1,-1,-1,5,10,6,4,7,2,4,2,0,2,7,11,-1,-1,-1,-1,0,1,9,4,7,8,2,3,11,5,10,6,-1,-1,-1,-1,9,2,1,9,11,2,9,4,11,7,11,4,5,10,6,-1,8,4,7,3,11,5,3,5,1,5,11,6,-1,-1,-1,-1,5,1,11,5,11,6,1,0,11,7,11,4,0,4,11,-1,0,5,9,0,6,5,0,3,6,11,6,3,8,4,7,-1,6,5,9,6,9,11,4,7,9,7,11,9,-1,-1,-1,-1,10,4,9,6,4,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,10,6,4,9,10,0,8,3,-1,-1,-1,-1,-1,-1,-1,
    10,0,1,10,6,0,6,4,0,-1,-1,-1,-1,-1,-1,-1,8,3,1,8,1,6,8,6,4,6,1,10,-1,-1,-1,-1,1,4,9,1,2,4,2,6,4,-1,-1,-1,-1,-1,-1,-1,3,0,8,1,2,9,2,4,9,2,6,4,-1,-1,-1,-1,0,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,3,2,8,2,4,4,2,6,-1,-1,-1,-1,-1,-1,-1,10,4,9,10,6,4,11,2,3,-1,-1,-1,-1,-1,-1,-1,0,8,2,2,8,11,4,9,10,4,10,6,-1,-1,-1,-1,3,11,2,0,1,6,0,6,4,6,1,10,-1,-1,-1,-1,6,4,1,6,1,10,4,8,1,2,1,11,8,11,1,-1,9,6,4,9,3,6,9,1,3,11,6,3,-1,-1,-1,-1,8,11,1,8,1,0,11,6,1,9,1,4,6,4,1,-1,3,11,6,3,6,0,0,6,4,-1,-1,-1,-1,-1,-1,-1,
    6,4,8,11,6,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,10,6,7,8,10,8,9,10,-1,-1,-1,-1,-1,-1,-1,0,7,3,0,10,7,0,9,10,6,7,10,-1,-1,-1,-1,10,6,7,1,10,7,1,7,8,1,8,0,-1,-1,-1,-1,10,6,7,10,7,1,1,7,3,-1,-1,-1,-1,-1,-1,-1,1,2,6,1,6,8,1,8,9,8,6,7,-1,-1,-1,-1,2,6,9,2,9,1,6,7,9,0,9,3,7,3,9,-1,7,8,0,7,0,6,6,0,2,-1,-1,-1,-1,-1,-1,-1,7,3,2,6,7,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,11,10,6,8,10,8,9,8,6,7,-1,-1,-1,-1,2,0,7,2,7,11,0,9,7,6,7,10,9,10,7,-1,1,8,0,1,7,8,1,10,7,6,7,10,2,3,11,-1,11,2,1,11,1,7,10,6,1,6,7,1,-1,-1,-1,-1,
    8,9,6,8,6,7,9,1,6,11,6,3,1,3,6,-1,0,9,1,11,6,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,8,0,7,0,6,3,11,0,11,6,0,-1,-1,-1,-1,7,11,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,8,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,9,11,7,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,1,9,8,3,1,11,7,6,-1,-1,-1,-1,-1,-1,-1,10,1,2,6,11,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,10,3,0,8,6,11,7,-1,-1,-1,-1,-1,-1,-1,2,9,0,2,10,9,6,11,7,-1,-1,-1,-1,-1,-1,-1,6,11,7,2,10,3,10,8,3,10,9,8,-1,-1,-1,-1,7,
    2,3,6,2,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7,0,8,7,6,0,6,2,0,-1,-1,-1,-1,-1,-1,-1,2,7,6,2,3,7,0,1,9,-1,-1,-1,-1,-1,-1,-1,1,6,2,1,8,6,1,9,8,8,7,6,-1,-1,-1,-1,10,7,6,10,1,7,1,3,7,-1,-1,-1,-1,-1,-1,-1,10,7,6,1,7,10,1,8,7,1,0,8,-1,-1,-1,-1,0,3,7,0,7,10,0,10,9,6,10,7,-1,-1,-1,-1,7,6,10,7,10,8,8,10,9,-1,-1,-1,-1,-1,-1,-1,6,8,4,11,8,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,6,11,3,0,6,0,4,6,-1,-1,-1,-1,-1,-1,-1,8,6,11,8,4,6,9,0,1,-1,-1,-1,-1,-1,-1,-1,9,4,6,9,6,3,9,3,1,11,3,6,-1,-1,-1,-1,6,8,4,6,11,8,2,10,1,-1,-1,-1,
    -1,-1,-1,-1,1,2,10,3,0,11,0,6,11,0,4,6,-1,-1,-1,-1,4,11,8,4,6,11,0,2,9,2,10,9,-1,-1,-1,-1,10,9,3,10,3,2,9,4,3,11,3,6,4,6,3,-1,8,2,3,8,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,0,4,2,4,6,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,9,0,2,3,4,2,4,6,4,3,8,-1,-1,-1,-1,1,9,4,1,4,2,2,4,6,-1,-1,-1,-1,-1,-1,-1,8,1,3,8,6,1,8,4,6,6,10,1,-1,-1,-1,-1,10,1,0,10,0,6,6,0,4,-1,-1,-1,-1,-1,-1,-1,4,6,3,4,3,8,6,10,3,0,3,9,10,9,3,-1,10,9,4,6,10,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,5,7,6,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,5,11,7,6,
    -1,-1,-1,-1,-1,-1,-1,5,0,1,5,4,0,7,6,11,-1,-1,-1,-1,-1,-1,-1,11,7,6,8,3,4,3,5,4,3,1,5,-1,-1,-1,-1,9,5,4,10,1,2,7,6,11,-1,-1,-1,-1,-1,-1,-1,6,11,7,1,2,10,0,8,3,4,9,5,-1,-1,-1,-1,7,6,11,5,4,10,4,2,10,4,0,2,-1,-1,-1,-1,3,4,8,3,5,4,3,2,5,10,5,2,11,7,6,-1,7,2,3,7,6,2,5,4,9,-1,-1,-1,-1,-1,-1,-1,9,5,4,0,8,6,0,6,2,6,8,7,-1,-1,-1,-1,3,6,2,3,7,6,1,5,0,5,4,0,-1,-1,-1,-1,6,2,8,6,8,7,2,1,8,4,8,5,1,5,8,-1,9,5,4,10,1,6,1,7,6,1,3,7,-1,-1,-1,-1,1,6,10,1,7,6,1,0,7,8,7,0,9,5,4,-1,4,0,10,4,10,5,0,3,10,6,10,7,3,7,10,
    -1,7,6,10,7,10,8,5,4,10,4,8,10,-1,-1,-1,-1,6,9,5,6,11,9,11,8,9,-1,-1,-1,-1,-1,-1,-1,3,6,11,0,6,3,0,5,6,0,9,5,-1,-1,-1,-1,0,11,8,0,5,11,0,1,5,5,6,11,-1,-1,-1,-1,6,11,3,6,3,5,5,3,1,-1,-1,-1,-1,-1,-1,-1,1,2,10,9,5,11,9,11,8,11,5,6,-1,-1,-1,-1,0,11,3,0,6,11,0,9,6,5,6,9,1,2,10,-1,11,8,5,11,5,6,8,0,5,10,5,2,0,2,5,-1,6,11,3,6,3,5,2,10,3,10,5,3,-1,-1,-1,-1,5,8,9,5,2,8,5,6,2,3,8,2,-1,-1,-1,-1,9,5,6,9,6,0,0,6,2,-1,-1,-1,-1,-1,-1,-1,1,5,8,1,8,0,5,6,8,3,8,2,6,2,8,-1,1,5,6,2,1,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
    1,3,6,1,6,10,3,8,6,5,6,9,8,9,6,-1,10,1,0,10,0,6,9,5,0,5,6,0,-1,-1,-1,-1,0,3,8,5,6,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,10,5,6,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,7,5,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,5,10,11,7,5,8,3,0,-1,-1,-1,-1,-1,-1,-1,5,11,7,5,10,11,1,9,0,-1,-1,-1,-1,-1,-1,-1,10,7,5,10,11,7,9,8,1,8,3,1,-1,-1,-1,-1,11,1,2,11,7,1,7,5,1,-1,-1,-1,-1,-1,-1,-1,0,8,3,1,2,7,1,7,5,7,2,11,-1,-1,-1,-1,9,7,5,9,2,7,9,0,2,2,11,7,-1,-1,-1,-1,7,5,2,7,2,11,5,9,2,3,2,8,9,8,2,-1,2,5,10,2,3,5,3,7,5,-1,-1,
    -1,-1,-1,-1,-1,8,2,0,8,5,2,8,7,5,10,2,5,-1,-1,-1,-1,9,0,1,5,10,3,5,3,7,3,10,2,-1,-1,-1,-1,9,8,2,9,2,1,8,7,2,10,2,5,7,5,2,-1,1,3,5,3,7,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,8,7,0,7,1,1,7,5,-1,-1,-1,-1,-1,-1,-1,9,0,3,9,3,5,5,3,7,-1,-1,-1,-1,-1,-1,-1,9,8,7,5,9,7,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5,8,4,5,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,5,0,4,5,11,0,5,10,11,11,3,0,-1,-1,-1,-1,0,1,9,8,4,10,8,10,11,10,4,5,-1,-1,-1,-1,10,11,4,10,4,5,11,3,4,9,4,1,3,1,4,-1,2,5,1,2,8,5,2,11,8,4,5,8,-1,-1,-1,-1,0,4,11,0,11,3,4,5,11,
    2,11,1,5,1,11,-1,0,2,5,0,5,9,2,11,5,4,5,8,11,8,5,-1,9,4,5,2,11,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,5,10,3,5,2,3,4,5,3,8,4,-1,-1,-1,-1,5,10,2,5,2,4,4,2,0,-1,-1,-1,-1,-1,-1,-1,3,10,2,3,5,10,3,8,5,4,5,8,0,1,9,-1,5,10,2,5,2,4,1,9,2,9,4,2,-1,-1,-1,-1,8,4,5,8,5,3,3,5,1,-1,-1,-1,-1,-1,-1,-1,0,4,5,1,0,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8,4,5,8,5,3,9,0,5,0,3,5,-1,-1,-1,-1,9,4,5,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,11,7,4,9,11,9,10,11,-1,-1,-1,-1,-1,-1,-1,0,8,3,4,9,7,9,11,7,9,10,11,-1,-1,-1,-1,1,10,11,1,11,
    4,1,4,0,7,4,11,-1,-1,-1,-1,3,1,4,3,4,8,1,10,4,7,4,11,10,11,4,-1,4,11,7,9,11,4,9,2,11,9,1,2,-1,-1,-1,-1,9,7,4,9,11,7,9,1,11,2,11,1,0,8,3,-1,11,7,4,11,4,2,2,4,0,-1,-1,-1,-1,-1,-1,-1,11,7,4,11,4,2,8,3,4,3,2,4,-1,-1,-1,-1,2,9,10,2,7,9,2,3,7,7,4,9,-1,-1,-1,-1,9,10,7,9,7,4,10,2,7,8,7,0,2,0,7,-1,3,7,10,3,10,2,7,4,10,1,10,0,4,0,10,-1,1,10,2,8,7,4,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,7,1,3,-1,-1,-1,-1,-1,-1,-1,4,9,1,4,1,7,0,8,1,8,7,1,-1,-1,-1,-1,4,0,3,7,4,3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4,8,7,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,9,10,8,10,11,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,11,9,10,-1,-1,-1,-1,-1,-1,-1,0,1,10,0,10,8,8,10,11,-1,-1,-1,-1,-1,-1,-1,3,1,10,11,3,10,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,2,11,1,11,9,9,11,8,-1,-1,-1,-1,-1,-1,-1,3,0,9,3,9,11,1,2,9,2,11,9,-1,-1,-1,-1,0,2,11,8,0,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3,2,11,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,10,8,9,-1,-1,-1,-1,-1,-1,-1,9,10,2,0,9,2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2,3,8,2,8,10,0,1,8,1,10,8,-1,-1,-1,-1,1,10,
    2,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,3,8,9,1,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,9,1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,3,8,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);
