import React from "react";
import {
	Image,
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import * as Linking from 'expo-linking';
export function Reminder({ date, title, content,buttonText1,buttonText2,onPress1, onPress2}) {
	return (
		<View style={styles.card}>
			<Text style={styles.date}>{date}</Text>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.content}>{content}</Text>
			<TouchableOpacity
				onPress={onPress1}
				style={styles.button}>
				<Text style={styles.buttonText}>{buttonText1}</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={onPress2}
				style={styles.button}>
				<Text style={styles.buttonText}>{buttonText2}</Text>
			</TouchableOpacity>
		</View>
	);
}
export function MakeBallot({ date, title, content, buttonText1, buttonText2,onPress1, onPress2}) {
	return (
		<View style={styles.MakeBallotCard}>
			<Text style={styles.date}>{date}</Text>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.content}>{content}</Text>
			<View style={styles.container}>
				<TouchableOpacity
					onPress={onPress1}
					style={styles.MakeballotButton}>
					<Text style={styles.BallotbuttonText}>{buttonText1}</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={onPress2}
					style={styles.MakeballotButton}>
					<Text style={styles.BallotbuttonText}>{buttonText2}</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
export function GoToCandidate({ date, title, content, buttonText, onPress }) {
	return (
		<View style={styles.GoToCandidateCard}>
			<Text style={styles.date}>{date}</Text>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.content}>{content}</Text>
			<TouchableOpacity
				onPress={onPress}
				style={styles.button}>
				<Text style={styles.GoToCandidatebuttonText}>{buttonText}</Text>
			</TouchableOpacity>
		</View>
	);
}
export function Ballot({ date, title, content, imageTitle, name, onPress, buttonText }) {
	return (
		<View style={styles.Ballotcard}>
			<Text style={styles.date}>{date}</Text>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.content}>{content}</Text>
			<Text style={styles.imageTitle}>{imageTitle}</Text>
			<View style={styles.rectangle}></View>
			<Text style={styles.name}>{name}</Text>
			<TouchableOpacity
				onPress={onPress}
				style={styles.ballotButton}>
				<Text style={styles.Ballotbutton2Text}>{buttonText}</Text>
			</TouchableOpacity>
		</View>
	);
}
export function ElectionDayCard({ date, title, content, imageTitle, name }) {
	return (
		<View style={styles.ElectionDaycard}>
			<Text style={styles.date}>{date}</Text>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.content}>{content}</Text>
			<Text style={styles.imageTitle}>{imageTitle}</Text>
			<View style={styles.rectangle}></View>
			<Text style={styles.name}>{name}</Text>
		</View>
	);
}
export function Voting({ title}) {
	return (
		<View style={styles.votingCard}>
			
			<Text style={styles.title}>{title}</Text>
			<TouchableOpacity
				onPress={() => alert('navigated to Quiz page')}
				style={styles.button}>
				<Text style={styles.VotingButtonText}>Take The Quiz!</Text>
			</TouchableOpacity>
		</View>
	);
}


const styles = StyleSheet.create({
	card: {
		marginTop: 18,
		paddingHorizontal: 18,
		paddingVertical: 14,
		backgroundColor: "#2F80ED",
		borderRadius: 8,
	},
	votingCard: {
		marginTop: 18,
		paddingHorizontal: 18,
		paddingVertical: 14,
		backgroundColor: "#219653",
		borderRadius: 8,
	},
	ElectionDaycard: {
		marginTop: 18,
		paddingHorizontal: 18,
		paddingVertical: 14,
		backgroundColor: "#9B51E0",
		borderRadius: 8,
	},
	rectangle: {
		position: "absolute",
		width: 40,
		height: 40,
		left: 18,
		top: 145,
		backgroundColor: "#F2F2F2",
		borderRadius: 8,
	},
	Ballotcard: {
		marginTop: 18,
		paddingHorizontal: 18,
		paddingVertical: 14,
		backgroundColor: "#EB5757",
		borderRadius: 8,
	},
	MakeBallotCard: {
		marginTop: 18,
		paddingHorizontal: 18,
		paddingVertical: 14,
		backgroundColor: '#219653',
		borderRadius: 8,
	},
	GoToCandidateCard: {
		marginTop: 18,
		paddingHorizontal: 18,
		paddingVertical: 14,
		backgroundColor: '#101433',
		borderRadius: 8,
	},
	button:
	{
		backgroundColor: '#FFFFFF',
		borderRadius: 8,
		left: 8,
		height: 15,
		width: 312
	},
	MakeballotButton:
	{
		backgroundColor: '#FFFFFF',
		position: 'relative',
		borderRadius: 8,
		height: 32,
		width: 140,
		top: 5
	},
	ballotButton:
	{
		backgroundColor: '#FFFFFF',
		position: 'relative',
		borderRadius: 8,
		height: 32,
		width: 138,
		top: 5,
		left: 150
	},
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	buttonContainer: {
		flex: 1,
	},
	date: {
		fontFamily: "Roboto",
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: 16,
		lineHeight: 19,
		color: "rgba(239, 239, 239, 0.55)",
		marginBottom: 8,
	},
	alternativeLayoutButtonContainer: {
		margin: 20,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	election: {
		fontFamily: "Roboto",
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: 16,
		lineHeight: 19,
		color: "rgba(239, 239, 239, 0.55)",
		marginBottom: 8,
	},
	title: {
		fontFamily: "Roboto",
		fontStyle: "normal",
		fontWeight: "900",
		fontSize: 22,
		lineHeight: 26,
		color: "#FFFFFF",
		marginBottom: 10,
	},
	buttonText:
	{
		position: 'relative',
		top: 5,
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 16,
		color: '#2F80ED',
		lineHeight: 19
	},
	BallotbuttonText:
	{
		position: 'relative',
		top: 5,
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 16,
		color: '#219653',
		lineHeight: 19
	},
	Ballotbutton2Text:
	{
		position: 'relative',
		top: 5,
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 16,
		color: '#EB5757',
		lineHeight: 19
	},
	VotingButtonText:
	{
		position: 'relative',
		top: 5,
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 16,
		color: '#219653',
		lineHeight: 19
	},
	GoToCandidatebuttonText:
	{
		position: 'relative',
		top: 5,
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 16,
		color: '#101433',
		lineHeight: 19
	},

	content: {
		fontFamily: "Roboto",
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: 18,
		lineHeight: 21,
		color: "rgba(255, 255, 255, 0.75)",
		marginTop:10
	},
	imageTitle: {
		fontFamily: "Roboto",
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: 14,
		lineHeight: 16,
		color: "rgba(255, 255, 255, 0.75)",
		marginTop:10
	},
	name: {
		fontStyle: "normal",
		fontWeight: "bold",
		fontSize: 15,
		lineHeight: 18,
		color: "rgba(255, 255, 255, 0.75)",
		marginTop: 60
	},
	button: {
		marginTop: 11,
		height: 32,
		backgroundColor: "#FFF",
		color: "#2F80ED",
		borderRadius: 8,
	},
});
