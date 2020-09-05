const defaultState = {
	0:{
		id:0,
		title: 'Death World',
		description: "....",
		effects: ['modifiers', 'skills', 'hardened', 'bleed','paranoid','survivor', 'wounds', 'fate'], // effects and choices at the end of the object
		modifiers:{
			title:'Character Modifiers',
			description:'You gain ...',
		},
		hardened:{
			title:'hardened',
			description:'...',
			choice: ['jaded, poison'],
		},
		jaded:{
			title:'Talent: Jaded',
			description: '...'
		}
	},
	1:{
		id:1,
		title: 'Void Born',
	},
	2:{
		id:2,
		title:'Forge World',
	},
	3:{
		id:3,
		title:'Hive World',
	},
	4:{
		id:4,
		title:'Imperial World',
	},
	5:{
		id:5,
		title:'Noble Born'
	}
}

export default function reducer(state = defaultState, action) {
	switch (action.type) {
	  default:
		return state;
	}
  }
  