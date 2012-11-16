#!/bin/env ruby
# encoding: utf-8

require 'json'

hash = Hash.new

#politica
hash["politica"] = Hash.new
hash["politica"]["semantics"] = ["politico, governo, estado, politica"]
hash["politica"]["party"] = Hash.new
hash["politica"]["party"]["semantics"] = ["partido", "sindicato"]
hash["politica"]["party"]["objects"] = Hash.new

hash["politica"]["party"]["objects"]["PS"] = Hash.new
hash["politica"]["party"]["objects"]["PS"]["semantics"] = ["PS","partido socialista"]
hash["politica"]["party"]["objects"]["PS"]["people"] = Hash.new
hash["politica"]["party"]["objects"]["PS"]["people"]["objects"] = Hash.new
hash["politica"]["party"]["objects"]["PS"]["people"]["objects"]["seguro"] = Hash.new
hash["politica"]["party"]["objects"]["PS"]["people"]["objects"]["seguro"]["semantics"] = ["antónio seguro","antónio josé seguro"]
hash["politica"]["party"]["objects"]["PS"]["people"]["objects"]["zorrinho"] = Hash.new
hash["politica"]["party"]["objects"]["PS"]["people"]["objects"]["zorrinho"]["semantics"] = ["vasco zorrinho"]
hash["politica"]["party"]["objects"]["PS"]["people"]["objects"]["ant_costa"] = Hash.new
hash["politica"]["party"]["objects"]["PS"]["people"]["objects"]["ant_costa"]["semantics"] = ["antónio costa"]

hash["politica"]["party"]["objects"]["PSD"] = Hash.new
hash["politica"]["party"]["objects"]["PSD"]["semantics"] = ["PSD","partido social democrata"]
hash["politica"]["party"]["objects"]["PSD"]["people"] = Hash.new
hash["politica"]["party"]["objects"]["PSD"]["people"]["objects"] = Hash.new
hash["politica"]["party"]["objects"]["PSD"]["people"]["objects"]["pacos"] = Hash.new
hash["politica"]["party"]["objects"]["PSD"]["people"]["objects"]["pacos"]["semantics"] = ["paços coelho"]
hash["politica"]["party"]["objects"]["PSD"]["people"]["objects"]["relvas"] = Hash.new
hash["politica"]["party"]["objects"]["PSD"]["people"]["objects"]["relvas"]["semantics"] = ["miguel relvas"]
hash["politica"]["party"]["objects"]["PSD"]["people"]["objects"]["gaspar"] = Hash.new
hash["politica"]["party"]["objects"]["PSD"]["people"]["objects"]["gaspar"]["semantics"] = ["vitor gaspar"]

hash["politica"]["party"]["objects"]["CDS"] = Hash.new
hash["politica"]["party"]["objects"]["CDS"]["semantics"] = ["CDS","CDS/PP","PP","CDS PP","partido popular"]
hash["politica"]["party"]["objects"]["CDS"]["people"] = Hash.new
hash["politica"]["party"]["objects"]["CDS"]["people"]["objects"] = Hash.new
hash["politica"]["party"]["objects"]["CDS"]["people"]["objects"]["portas"] = Hash.new
hash["politica"]["party"]["objects"]["CDS"]["people"]["objects"]["portas"]["semantics"] = ["paulo portas"]

hash["politica"]["party"]["objects"]["PC"] = Hash.new
hash["politica"]["party"]["objects"]["PC"]["semantics"] = ["PC","partido comunista","comunista", "comuna"]
hash["politica"]["party"]["objects"]["PC"]["people"] = Hash.new
hash["politica"]["party"]["objects"]["PC"]["people"]["objects"] = Hash.new
hash["politica"]["party"]["objects"]["PC"]["people"]["objects"]["jeronimo"] = Hash.new
hash["politica"]["party"]["objects"]["PC"]["people"]["objects"]["jeronimo"]["semantics"] = ["jeronimo de sousa"]

hash["politica"]["party"]["objects"]["BE"] = Hash.new
hash["politica"]["party"]["objects"]["BE"]["semantics"] = ["BE","bloco de esquerda","comunista", "comuna"]
hash["politica"]["party"]["objects"]["BE"]["people"] = Hash.new
hash["politica"]["party"]["objects"]["BE"]["people"]["objects"] = Hash.new
hash["politica"]["party"]["objects"]["BE"]["people"]["objects"]["louca"] = Hash.new
hash["politica"]["party"]["objects"]["BE"]["people"]["objects"]["louca"]["semantics"] = ["francisco louça"]

file = File.new("data.json", "w")
file.write(hash.to_json)
file.close