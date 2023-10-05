import { StyleSheet, ImageBackground, ScrollView, View } from 'react-native'
import Banner from './Banner';
import Menu from './Menu';
import ReserveTable from './ReserveTable';
import Review from './Review';
import Footer from './Footer';
const bg = require("../assets/bg.jpg");

const Home = () => {
  return (
    <ImageBackground style={styles.bgImage} source={bg}>
      <View style={styles.container}>
        <ScrollView>
          <Banner />
          <Menu />
          <ReserveTable />
          <Review />
          <Footer />
        </ScrollView>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.6)',
  },
  bgImage: {
    height: "100%",
  }
})

export default Home