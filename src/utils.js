import { nanoid } from 'nanoid';

const chillHop = () => [
	{
		id: nanoid(),
		name: 'Kinsfolk',
		cover: 'https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg',
		artist: 'Aarigod',
		audio: 'https://mp3.chillhop.com/serve.php/?mp3=12997',
		color: ['#6C8D45', '#2C2A1D'],
		active: true,
	},
	{
		id: nanoid(),
		name: 'Desire',
		cover: 'https://chillhop.com/wp-content/uploads/2020/10/b879702e76f573e03ce60da9237ded86b4a3ebd7-1024x1024.jpg',
		artist: 'Psalm Trees, Guillaume Muschalle',
		audio: 'https://mp3.chillhop.com/serve.php/?mp3=10554',
		color: ['#FBF4E9', '#EEBC7D'],
		active: false,
	},
	{
		id: nanoid(),
		name: 'Home Court',
		cover: 'https://chillhop.com/wp-content/uploads/2021/02/08cbb0848f669e1bd8b5a5152c4b7d20edf1b499-1024x1024.jpg',
		artist: 'Blue Wednesday, Shopan',
		audio: 'https://mp3.chillhop.com/serve.php/?mp3=11233',
		color: ['##B6473F', '##BB836B'],
		active: false,
	},
	{
		id: nanoid(),
		name: 'Flashback',
		cover: 'https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg',
		artist: 'Blue Wednesday, Shopan',
		audio: 'https://mp3.chillhop.com/serve.php/?mp3=11225',
		color: ['#222D62', '#B2A8DC'],
		active: false,
	},
	{
		id: nanoid(),
		name: 'Lax Incense',
		cover: 'https://chillhop.com/wp-content/uploads/2021/01/6b1bb8736ee3e972747bc11f312e31cf7f5823e4-1024x1024.jpg',
		artist: 'Mama Aiuto, Daphné',
		audio: 'https://mp3.chillhop.com/serve.php/?mp3=12125',
		color: ['#773738', '#1B5562'],
		active: false,
	},
	{
		id: nanoid(),
		name: 'Sugarless',
		cover: 'https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg',
		artist: 'The Field Tapes, Aviino',
		audio: 'https://mp3.chillhop.com/serve.php/?mp3=11243',
		color: ['#282C47', '#5E362E'],
		active: false,
	},
	// {
	// 	id: nanoid(),
	// 	name: '',
	// 	cover: '',
	// 	artist: '',
	// 	audio: '',
	// 	color: [],
	// 	active: false,
	// },
];

export default chillHop;
