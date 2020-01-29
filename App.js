import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
	defaultBlack: {
		color: 'black',
		fontSize: 33,
		fontFamily: 'sans-serif-light',
	},
});

const timetable = [
	431,
	477,
	524,
	596,
	619,
	659,
	699,
	759,
	819,
	879,
	909,
	946,
	984,
	1015,
	1024,
	1036,
	1054,
	1083,
	1106,
	1120,
	1166,
	1217,
	1249,
	1302,
	1362,
	1423,
];

const art = [
	require('./assets/0.jpg'),
	require('./assets/1.jpg'),
	require('./assets/2.jpg'),
	require('./assets/3.jpg'),
	require('./assets/4.jpg'),
	require('./assets/5.jpg'),
	require('./assets/6.jpg'),
	require('./assets/7.jpg'),
	require('./assets/8.jpg'),
	require('./assets/9.jpg'),
	require('./assets/10.jpg'),
	require('./assets/11.jpg'),
	require('./assets/12.jpg'),
	require('./assets/13.jpg'),
	require('./assets/14.jpg'),
	require('./assets/15.jpg'),
	require('./assets/16.jpg'),
	require('./assets/17.jpg'),
	require('./assets/18.jpg'),
	require('./assets/19.jpg'),
	require('./assets/20.jpg'),
	require('./assets/21.jpg'),
	require('./assets/22.jpg'),
	require('./assets/23.jpg'),
	require('./assets/24.jpg'),
	require('./assets/25.jpg'),
	require('./assets/26.jpg'),
	require('./assets/27.jpg'),
	require('./assets/28.jpg'),
	require('./assets/29.jpg'),
	require('./assets/30.jpg'),
	require('./assets/31.jpg'),
	require('./assets/32.jpg'),
	require('./assets/33.jpg'),
	require('./assets/34.jpg'),
	require('./assets/35.jpg'),
	require('./assets/36.jpg'),
	require('./assets/37.jpg'),
	require('./assets/38.jpg'),
	require('./assets/39.jpg'),
	require('./assets/40.jpg'),
	require('./assets/41.jpg'),
	require('./assets/42.jpg'),
	require('./assets/43.jpg'),
	require('./assets/44.jpg'),
	require('./assets/45.jpg'),
	require('./assets/46.jpg'),
	require('./assets/47.jpg'),
	require('./assets/48.jpg'),
	require('./assets/49.jpg'),
	require('./assets/50.jpg'),
	require('./assets/51.jpg'),
	require('./assets/52.jpg'),
	require('./assets/53.jpg'),
	require('./assets/54.jpg'),
	require('./assets/55.jpg'),
	require('./assets/56.jpg'),
	require('./assets/57.jpg'),
	require('./assets/58.jpg'),
	require('./assets/59.jpg'),
	require('./assets/60.jpg'),
	require('./assets/61.jpg'),
];

const names = [
	"0",
	"I Love Kanye",
	"money machine",
	"Pink and Blue",
	"Fucking Money Man",
	"Dancing On My Own",
	"HIADTFAWLMTHBIHI",
	"Honey",
	"Cool and Collected",
	"Runaway",
	"Venice Bitch",
	"Donnie Darko",
	"Vroom Vroom",
	"Last Call",
	"Season 1",
	"Make My Bed",
	"KILL THIS LOVE",
	"EP1",
	"Citrine EP",
	"search result",
	"Heavy Rules Mixtape",
	"When I Was Young EP",
	"DAYTONA",
	"1000 gecs",
	"KIDS SEE GHOSTS",
	"RINA",
	"PRODUCT",
	"Metropolis",
	"E•MO•TION: Side B",
	"dont smile at me",
	"PC Music, Vol. 1",
	"Sway",
	"Flamboyant",
	"Time 'n' Place",
	"Paradise",
	"Charlie's Angels OST",
	"Camila",
	"Bloom",
	"Number 1 Angel",
	"Clarity",
	"Hot Pink",
	"Pop 2",
	"Melodrama",
	"Late Night Feelings",
	"ANTI",
	"The Pains Of Growing",
	"Golden Hour",
	"Pang",
	"Manic",
	"1989",
	"1992 Deluxe",
	"Charli",
	"Graduation",
	"808s & Heartbreak",
	"Pure Heroine (Extended)",
	"E•MO•TION (Deluxe)",
	"Dangerous Woman",
	"Amala (Deluxe)",
	"Night Time, My Time",
	"Pink Friday",
	"Blonde",
	"Lover",
];

const artists = [
	"0",
	"Kanye West's",
	"100 gecs'",
	"Hannah Diamond's",
	"Rosalía's",
	"Robyn's",
	"Lana Del Rey's",
	"070 Shake's",
	"Let's Eat Grandma's",
	"Kanye West's",
	"Lana Del Rey's",
	"Let's Eat Grandma's",
	"Charli XCX's",
	"Kanye West's",
	"Nasty Cherry's",
	"King Princess'",
	"BLACKPINK's",
	"FKA twigs'",
	"Hayley Kiyoko's",
	"umru's",
	"ALMA's",
	"MØ's",
	"Pusha T's",
	"100 gecs'",
	"Kanye West & Kid Cudi's",
	"Rina Sawayama's",
	"SOPHIE's",
	"Janelle Monae's",
	"Carly Rae Jepsen's",
	"Billie Eilish's",
	"A.G. Cook's",
	"Tove Styrke's",
	"Dorian Electra's",
	"Kero Kero Bonito's",
	"Lana Del Rey's",
	"Ariana Grande's",
	"Camila Cabello's",
	"Troye Sivan's",
	"Charli XCX's",
	"Kim Petras'",
	"Doja Cat's",
	"Charli XCX's",
	"Lorde's",
	"Mark Ronson's",
	"Rihanna's",
	"Alessia Cara's",
	"Kacey Musgraves'",
	"Caroline Polachek's",
	"Halsey's",
	"Taylor Swift's",
	"Princess Nokia's",
	"Charli XCX's",
	"Kanye West's",
	"Kanye West's",
	"Lorde's",
	"Carly Rae Jepsen's",
	"Ariana Grande's",
	"Doja Cat's",
	"Sky Ferreira's",
	"Nicki Minaj's",
	"Frank Ocean's",
	"Taylor Swift's",
];

class Train extends Component {
	render() {	
		if (this.props.number == 0)
		return (
			<View style={{alignItems: 'center', top: 250}}>
				<Text style={styles.defaultBlack}>There's a train now</Text>
			</View>
		)
		if (this.props.number != 1)
		this.one = "s";
		return (
			<View style={{alignItems: 'center', top: 60}}>
				<Text style={styles.defaultBlack}>The next train is in</Text>
				<Text style={styles.defaultBlack}>{this.props.number} minute{this.one}</Text>
				<Text style={styles.defaultBlack}>at {this.props.time}</Text>
			</View>
		);
	}
}

class Album extends Component {
	render() {
		if (this.props.number == 0) return null;
		return (
			<View style={{alignItems: 'center', top: 80}}>
				<Text style={styles.defaultBlack}>I'd recommend</Text>
				<Text style={styles.defaultBlack}>{artists[this.props.number]}</Text>
				<Text style={styles.defaultBlack}>{names[this.props.number]}</Text>
				<Image source={art[this.props.number]} style={{ top: 40, height: 200, width: 200 }} />
			</View>
		);
	}
}

export default class Main extends Component {
	render() {
		this.time = (new Date().getHours() * 60) + new Date().getMinutes();
		var i = 0;
		while (this.time > timetable[i])
			i += 1;
		this.nexttrain = (~~(timetable[i] / 60)).toString() + ":" + (timetable[i] % 60);
		this.minutes = timetable[i] - this.time;
		return (
			<View>
				<Train number={this.minutes} time={this.nexttrain}/>
				<Album number={this.minutes} />
			</View>
		);
	}
}
