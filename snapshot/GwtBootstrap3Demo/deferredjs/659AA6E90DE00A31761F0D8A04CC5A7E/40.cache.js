$wnd.GwtBootstrap3Demo.runAsyncCallback40("function HUc(){}\nfunction LUc(){}\nfunction NUc(){}\nfunction OUc(){OUc=gib;KUc=new NUc}\nfunction Oyc(a){Fzb.call(this,a);Nyc(this)}\nfunction GUc(){RKb.call(this);PKb(this,IUc(new JUc))}\nfunction AUc(a,b,c){bKb();zKb.call(this,a,b,c,(fzc(),ezc))}\nfunction JUc(){this.a=(new LUc,OUc(),KUc);MUc(this.a)}\nfunction VZc(a){var b;if(!a.M){b=new GUc(new HUc);a.M=b}return a.M}\nfunction UZc(a){var b;if(!a.L){b=new AUc(CJb(eLb(a.a)),VZc(a),TZc(a));VJb((hLb(a.a),b),tLb(hLb(a.a)));a.L=b}return a.L}\nfunction MUc(a){if(!a.a){a.a=true;Rx((UD(),'.GPBYFDEEM{background-color:#fcf2f2;border-color:#dfb5b4;}.GPBYFDEFM{margin-top:0 !important;}.GPBYFDEGM{margin-left:5px;}'));return true}return false}\nfunction IUc(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A,B,C,D,F,G;a=new J6b;Y_b(a,(b=new v2b(SPd),Y_b(b,(c=new n5b,c.a='Offline',m5b(c),c)),Y_b(b,(d=new i1b,Y_b(d,(e=new h3b((nfc(),kfc)),kmb((Itb(),e.eb),'GPBYFDEFM',true),azc(e.b,XVd),Z_b(e,e.b,0),e)),Y_b(d,new Wyc((j=new jRb,j.a+='To use Offline, you must first add the extras module to your project. In Maven:',new akb(j.a)).a)),Y_b(d,(f=new d4c,y6b(f,(k=new jRb,k.a+=YVd,new akb(k.a)).a),kmb(f.eb,XPd,true),f)),Y_b(d,new Wyc((l=new jRb,l.a+=ZVd,new akb(l.a)).a)),Y_b(d,(g=new d4c,y6b(g,(m=new jRb,m.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;',new akb(m.a)).a),kmb(g.eb,XPd,true),g)),kmb(d.eb,'GPBYFDEEM',true),d)),Y_b(b,(h=new A5b,Y_b(h,(n=new P5b,Y_b(n,(o=new h3b(jfc),azc(o.b,'What is Offline?'),Z_b(o,o.b,0),o)),n)),Y_b(h,(p=new C5b,Y_b(p,new Oyc((q=new jRb,q.a+=\"<p>Web applications consist of web pages that need to be downloaded from a network and for this to happen there must be a network connection. However there are many instances when users cannot connect to a network due to reasons beyond their control. HTML5 provides the ability to access the web application even without a network connection using the<b>cache manifest<\\/b>. <br> <a href='http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5'> http://en.wikipedia.org/wiki/Cache_manifest_in_HTML5 <\\/a> <\\/p> <p>The entire web application (css, javascript, resources etc) can be downloaded and stored locally so that offline support is possible - in addition this may improve perceived speed of your web application by making all resources instantly available from local storage. <\\/p> <p>Unfortunately, the GWT compiler automatically generates lots of css and javascript files that are different after every compile (the file names are crypto hashed) and so the <b>cache manifest<\\/b> needs to reflect this new set of files each time. <\\/p> <p>The Offline linker performs this task of generating a valid cache manifest every time you compile. <\\/p>\",new akb(q.a)).a)),p)),Y_b(h,new M5b),h)),Y_b(b,(i=new A5b,Y_b(i,(r=new P5b,Y_b(r,(s=new h3b(jfc),azc(s.b,'How to configure?'),Z_b(s,s.b,0),s)),r)),Y_b(i,(t=new C5b,Y_b(t,new Wyc((u=new jRb,u.a+='Static resources that are needed (outside of the compile unit) require specific inclusion. These files would typically be index.html, css files or any resources not included within the GWT application. These files are included through the cachemanifest_static_files property added to your module.gwt.xml file.',new akb(u.a)).a)),Y_b(t,(v=new d4c,y6b(v,(w=new jRb,w.a+='&lt;extend-configuration-property name=\"cachemanifest_static_files\" value=\"index.html\" /&gt;\\\\n',new akb(w.a)).a),kmb(v.eb,XPd,true),v)),Y_b(t,new Wyc((A=new jRb,A.a+='To activate the linker, the following configuration is included in your GWT module definition (module.gwt.xml file) as follows:',new akb(A.a)).a)),Y_b(t,(B=new d4c,y6b(B,(C=new jRb,C.a+='&lt;inherits name=\"org.gwtbootstrap3.extras.cachemanifest.Offline\"/&gt;\\\\n &lt;add-linker name=\"offline\" /&gt;',new akb(C.a)).a),kmb(B.eb,XPd,true),B)),Y_b(t,new Wyc((D=new jRb,D.a+='Finally, include the cache manifest file within the html page that loads your GWT application, as follows:',new akb(D.a)).a)),Y_b(t,(F=new d4c,y6b(F,(G=new jRb,G.a+='&lt;!doctype html&gt;\\\\n &lt;html manifest=\"&lt;modulename&gt;/appcache.manifest\"&gt;\\\\n ....\\\\n &lt;/html&gt;\\\\n',new akb(G.a)).a),kmb(F.eb,XPd,true),F)),t)),Y_b(i,new M5b),i)),b));return a}\nfib(409,233,EMd,Oyc);fib(1016,44,QMd,AUc);var t6=zPb(IPd,'OfflinePresenter',1016);fib(1255,47,RMd,GUc);var y6=zPb(IPd,'OfflineView',1255);fib(1530,1,{},HUc);var x6=zPb(IPd,'OfflineView_BinderImpl',1530);fib(1531,1,{},JUc);var u6=zPb(IPd,'OfflineView_BinderImpl/Widgets',1531);fib(1880,1,{},LUc);var KUc;var w6=zPb(IPd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator',1880);fib(1881,1,{},NUc);_.a=false;var v6=zPb(IPd,'OfflineView_BinderImpl_GenBundle_en_InlineClientBundleGenerator/1',1881);fib(938,1,cPd);_.Sb=function u$c(){MMb(this.b,UZc(this.a.a))};lKd(vp)(40);\n//# sourceURL=GwtBootstrap3Demo-40.js\n")
