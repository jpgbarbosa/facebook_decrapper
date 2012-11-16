#!/bin/env ruby
# encoding: utf-8

require 'json'

hash = Hash.new

#politica
hash["politica"] = Hash.new
hash["politica"]["semantics"] = ["politico, governo, politica"]
hash["politica"]["objects"] = Hash.new
hash["politica"]["objects"]["party"] = Hash.new
hash["politica"]["objects"]["party"]["semantics"] = ["partido", "sindicato"]
hash["politica"]["objects"]["party"]["objects"] = Hash.new

hash["politica"]["objects"]["party"]["objects"]["PS"] = Hash.new
hash["politica"]["objects"]["party"]["objects"]["PS"]["semantics"] = ["PS","partido socialista"]
hash["politica"]["objects"]["party"]["objects"]["PS"]["objects"] = Hash.new
hash["politica"]["objects"]["party"]["objects"]["PS"]["objects"]["people"] = Hash.new
hash["politica"]["objects"]["party"]["objects"]["PS"]["objects"]["people"]["objects"] = Hash.new
hash["politica"]["objects"]["party"]["objects"]["PS"]["objects"]["people"]["objects"]["seguro"] = Hash.new
hash["politica"]["objects"]["party"]["objects"]["PS"]["objects"]["people"]["objects"]["seguro"]["semantics"] = ["antónio seguro","antónio josé seguro"]
hash["politica"]["objects"]["party"]["objects"]["PS"]["objects"]["people"]["objects"]["zorrinho"] = Hash.new
hash["politica"]["objects"]["party"]["objects"]["PS"]["objects"]["people"]["objects"]["zorrinho"]["semantics"] = ["vasco zorrinho"]
hash["politica"]["objects"]["party"]["objects"]["PS"]["objects"]["people"]["objects"]["ant_costa"] = Hash.new
hash["politica"]["objects"]["party"]["objects"]["PS"]["objects"]["people"]["objects"]["ant_costa"]["semantics"] = ["antónio costa"]

hash["politica"]["objects"]["party"]["objects"]["PSD"] = Hash.new
hash["politica"]["objects"]["party"]["objects"]["PSD"]["semantics"] = ["PSD","partido social democrata"]
hash["politica"]["objects"]["party"]["objects"]["PSD"]["objects"] = Hash.new
hash["politica"]["objects"]["party"]["objects"]["PSD"]["objects"]["people"] = Hash.new
hash["politica"]["objects"]["party"]["objects"]["PSD"]["objects"]["people"]["objects"] = Hash.new
hash["politica"]["objects"]["party"]["objects"]["PSD"]["objects"]["people"]["objects"]["pacos"] = Hash.new
hash["politica"]["objects"]["party"]["objects"]["PSD"]["objects"]["people"]["objects"]["pacos"]["semantics"] = ["paços coelho"]
hash["politica"]["objects"]["party"]["objects"]["PSD"]["objects"]["people"]["objects"]["relvas"] = Hash.new
hash["politica"]["objects"]["party"]["objects"]["PSD"]["objects"]["people"]["objects"]["relvas"]["semantics"] = ["miguel relvas"]
hash["politica"]["objects"]["party"]["objects"]["PSD"]["objects"]["people"]["objects"]["gaspar"] = Hash.new
hash["politica"]["objects"]["party"]["objects"]["PSD"]["objects"]["people"]["objects"]["gaspar"]["semantics"] = ["vitor gaspar"]

hash["politica"]["objects"]["party"]["objects"]["CDS"] = Hash.new
hash["politica"]["objects"]["party"]["objects"]["CDS"]["semantics"] = ["CDS","CDS/PP","PP","CDS PP","partido popular"]
hash["politica"]["objects"]["party"]["objects"]["CDS"]["objects"] = Hash.new
hash["politica"]["objects"]["party"]["objects"]["CDS"]["objects"]["people"] = Hash.new
hash["politica"]["objects"]["party"]["objects"]["CDS"]["objects"]["people"]["objects"] = Hash.new
hash["politica"]["objects"]["party"]["objects"]["CDS"]["objects"]["people"]["objects"]["portas"] = Hash.new
hash["politica"]["objects"]["party"]["objects"]["CDS"]["objects"]["people"]["objects"]["portas"]["semantics"] = ["paulo portas"]

hash["politica"]["objects"]["party"]["objects"]["PC"] = Hash.new
hash["politica"]["objects"]["party"]["objects"]["PC"]["semantics"] = ["partido comunista","comunista", "comuna"]
hash["politica"]["objects"]["party"]["objects"]["PC"]["objects"] = Hash.new
hash["politica"]["objects"]["party"]["objects"]["PC"]["objects"]["people"] = Hash.new
hash["politica"]["objects"]["party"]["objects"]["PC"]["objects"]["people"]["objects"] = Hash.new
hash["politica"]["objects"]["party"]["objects"]["PC"]["objects"]["people"]["objects"]["jeronimo"] = Hash.new
hash["politica"]["objects"]["party"]["objects"]["PC"]["objects"]["people"]["objects"]["jeronimo"]["semantics"] = ["jeronimo de sousa"]

hash["politica"]["objects"]["party"]["objects"]["BE"] = Hash.new
hash["politica"]["objects"]["party"]["objects"]["BE"]["semantics"] = ["BE","bloco de esquerda","comunista", "comuna"]
hash["politica"]["objects"]["party"]["objects"]["BE"]["objects"] = Hash.new
hash["politica"]["objects"]["party"]["objects"]["BE"]["objects"]["people"] = Hash.new
hash["politica"]["objects"]["party"]["objects"]["BE"]["objects"]["people"]["objects"] = Hash.new
hash["politica"]["objects"]["party"]["objects"]["BE"]["objects"]["people"]["objects"]["louca"] = Hash.new
hash["politica"]["objects"]["party"]["objects"]["BE"]["objects"]["people"]["objects"]["louca"]["semantics"] = ["francisco louça"]

file = File.new("data.json", "w")
file.write(hash.to_json)
file.close