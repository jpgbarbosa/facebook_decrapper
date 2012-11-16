#!/bin/env ruby
# encoding: utf-8

require 'json'

hash = Hash.new

#politic
hash["politic"] = Hash.new
hash["politic"]["semantics"] = ["politico, governo, estado, politica"]
hash["politic"]["party"] = Hash.new
hash["politic"]["party"]["semantics"] = ["partido", "sindicato"]
hash["politic"]["party"]["objects"] = Hash.new

hash["politic"]["party"]["objects"]["PS"] = Hash.new
hash["politic"]["party"]["objects"]["PS"]["semantics"] = ["PS","partido socialista"]
hash["politic"]["party"]["objects"]["PS"]["people"] = Hash.new
hash["politic"]["party"]["objects"]["PS"]["people"]["objects"] = Hash.new
hash["politic"]["party"]["objects"]["PS"]["people"]["objects"]["seguro"] = Hash.new
hash["politic"]["party"]["objects"]["PS"]["people"]["objects"]["seguro"]["semantics"] = ["antónio seguro","antónio josé seguro"]
hash["politic"]["party"]["objects"]["PS"]["people"]["objects"]["zorrinho"] = Hash.new
hash["politic"]["party"]["objects"]["PS"]["people"]["objects"]["zorrinho"]["semantics"] = ["vasco zorrinho"]
hash["politic"]["party"]["objects"]["PS"]["people"]["objects"]["ant_costa"] = Hash.new
hash["politic"]["party"]["objects"]["PS"]["people"]["objects"]["ant_costa"]["semantics"] = ["antónio costa"]

hash["politic"]["party"]["objects"]["PSD"] = Hash.new
hash["politic"]["party"]["objects"]["PSD"]["semantics"] = ["PSD","partido social democrata"]
hash["politic"]["party"]["objects"]["PSD"]["people"] = Hash.new
hash["politic"]["party"]["objects"]["PSD"]["people"]["objects"] = Hash.new
hash["politic"]["party"]["objects"]["PSD"]["people"]["objects"]["pacos"] = Hash.new
hash["politic"]["party"]["objects"]["PSD"]["people"]["objects"]["pacos"]["semantics"] = ["paços coelho"]
hash["politic"]["party"]["objects"]["PSD"]["people"]["objects"]["relvas"] = Hash.new
hash["politic"]["party"]["objects"]["PSD"]["people"]["objects"]["relvas"]["semantics"] = ["miguel relvas"]
hash["politic"]["party"]["objects"]["PSD"]["people"]["objects"]["gaspar"] = Hash.new
hash["politic"]["party"]["objects"]["PSD"]["people"]["objects"]["gaspar"]["semantics"] = ["vitor gaspar"]

hash["politic"]["party"]["objects"]["CDS"] = Hash.new
hash["politic"]["party"]["objects"]["CDS"]["semantics"] = ["CDS","CDS/PP","PP","CDS PP","partido popular"]
hash["politic"]["party"]["objects"]["CDS"]["people"] = Hash.new
hash["politic"]["party"]["objects"]["CDS"]["people"]["objects"] = Hash.new
hash["politic"]["party"]["objects"]["CDS"]["people"]["objects"]["portas"] = Hash.new
hash["politic"]["party"]["objects"]["CDS"]["people"]["objects"]["portas"]["semantics"] = ["paulo portas"]

hash["politic"]["party"]["objects"]["PC"] = Hash.new
hash["politic"]["party"]["objects"]["PC"]["semantics"] = ["PC","partido comunista","comunista", "comuna"]
hash["politic"]["party"]["objects"]["PC"]["people"] = Hash.new
hash["politic"]["party"]["objects"]["PC"]["people"]["objects"] = Hash.new
hash["politic"]["party"]["objects"]["PC"]["people"]["objects"]["jeronimo"] = Hash.new
hash["politic"]["party"]["objects"]["PC"]["people"]["objects"]["jeronimo"]["semantics"] = ["jerónimo de sousa"]

hash["politic"]["party"]["objects"]["BE"] = Hash.new
hash["politic"]["party"]["objects"]["BE"]["semantics"] = ["BE","bloco de esquerda","comunista", "comuna"]
hash["politic"]["party"]["objects"]["BE"]["people"] = Hash.new
hash["politic"]["party"]["objects"]["BE"]["people"]["objects"] = Hash.new
hash["politic"]["party"]["objects"]["BE"]["people"]["objects"]["louca"] = Hash.new
hash["politic"]["party"]["objects"]["BE"]["people"]["objects"]["louca"]["semantics"] = ["francisco louçã"]

#music
hash["music"] = Hash.new
hash["music"]["semantics"] = ["música, videoclip, artistas, concertos"]

hash["music"]["genre"] = Hash.new
hash["music"]["genre"]["semantics"] = ["género", "estilo"]
hash["music"]["genre"]["objects"] = Hash.new
hash["music"]["genre"]["objects"]["pimba"] = Hash.new
hash["music"]["genre"]["objects"]["pimba"]["semantics"] = ["pimba","partido socialista"]
hash["music"]["genre"]["objects"]["pimba"]["artists"] = Hash.new
hash["music"]["genre"]["objects"]["pimba"]["artists"]["objects"] = Hash.new
hash["music"]["genre"]["objects"]["pimba"]["artists"]["objects"]["quim"] = Hash.new
hash["music"]["genre"]["objects"]["pimba"]["artists"]["objects"]["quim"]["semantics"] = ["Quim Barreiros"]
hash["music"]["genre"]["objects"]["pimba"]["artists"]["objects"]["agata"] = Hash.new
hash["music"]["genre"]["objects"]["pimba"]["artists"]["objects"]["agata"]["semantics"] = ["Ágata"]
hash["music"]["genre"]["objects"]["pimba"]["artists"]["objects"]["romana"] = Hash.new
hash["music"]["genre"]["objects"]["pimba"]["artists"]["objects"]["romana"]["semantics"] = ["Romana"]
hash["music"]["genre"]["objects"]["pimba"]["artists"]["objects"]["emanuel"] = Hash.new
hash["music"]["genre"]["objects"]["pimba"]["artists"]["objects"]["emanuel"]["semantics"] = ["Emanuel"]
hash["music"]["genre"]["objects"]["pimba"]["artists"]["objects"]["toy"] = Hash.new
hash["music"]["genre"]["objects"]["pimba"]["artists"]["objects"]["toy"]["semantics"] = ["Toy"]
hash["music"]["genre"]["objects"]["pimba"]["artists"]["objects"]["malhoa"] = Hash.new
hash["music"]["genre"]["objects"]["pimba"]["artists"]["objects"]["malhoa"]["semantics"] = ["José Malhoa","Ana Malhoa", "Zé Malhoa", "Malhoa"]
hash["music"]["genre"]["objects"]["dubstep"] = Hash.new
hash["music"]["genre"]["objects"]["dubstep"]["semantics"] = ["Panados Com Pão","dubstep"]
hash["music"]["genre"]["objects"]["dubstep"]["artists"] = Hash.new
hash["music"]["genre"]["objects"]["dubstep"]["artists"]["objects"] = Hash.new
hash["music"]["genre"]["objects"]["dubstep"]["artists"]["objects"]["skrillex"] = Hash.new
hash["music"]["genre"]["objects"]["dubstep"]["artists"]["objects"]["skrillex"]["semantics"] = ["Skrillex"]

hash["music"]["genre"] = Hash.new
hash["music"]["genre"]["semantics"] = ["género", "estilo"]
hash["music"]["genre"]["objects"] = Hash.new


file = File.new("data.json", "w")
file.write(hash.to_json)
file.close