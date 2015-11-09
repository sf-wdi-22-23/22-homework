# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Creature.destroy_all

Creature.create({name: "Luke", description: "Jedi"})
Creature.create({name: "Shadow in the cave", description: "Not actually Darth Vader, but the image of Luke's Fear"})
