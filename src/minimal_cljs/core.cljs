(ns minimal-cljs.core
  (:require [cljsjs.three.deps]))

(defn -main []
  (enable-console-print!)
  (println "Hello world!"))

(set! (.-onload js/window) -main)
