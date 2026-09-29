import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// ======================================================
// 1. ข้อมูล Big 7 สัตว์ป่า
// ======================================================

const BIG_7_DATA = [
  {
    id: '1',
    name: '1. เสือโคร่ง (Tiger)',
    image:
      'https://commons.wikimedia.org/wiki/Special:Redirect/file/Tiger_panthera_tigris.jpg',
    desc:
      'ผู้ล่าสูงสุดบนยอดห่วงโซ่อาหาร เป็นตัวชี้วัดความสมบูรณ์ของระบบนิเวศป่าไม้',
  },

  {
    id: '2',
    name: '2. เสือดาว (Leopard)',
    image:
      'https://commons.wikimedia.org/wiki/Special:Redirect/file/Leopard_panthera_pardus.jpg',
    desc:
      'นักล่าที่มีความคล่องแคล่ว สามารถปีนต้นไม้ได้ดี และล่าเหยื่อได้หลากหลายชนิด',
  },

  {
    id: '3',
    name: '3. ช้างป่า (Asian Elephant)',
    image:
      'https://commons.wikimedia.org/wiki/Special:Redirect/file/Asian_Elephant_(Elephas_maximus)_(7852943934).jpg',
    desc:
      'สัตว์เลี้ยงลูกด้วยนมบนบกขนาดใหญ่ของเอเชีย ช่วยกระจายเมล็ดพันธุ์และสร้างเส้นทางในผืนป่า',
  },

  {
    id: '4',
    name: '4. ควายป่า (Wild Water Buffalo)',
    image:
      'https://commons.wikimedia.org/wiki/Special:Redirect/file/Wild_water_buffalo_(Bubalus_arnee)_at_Koshitappu_01.jpg',
    desc:
      'สัตว์ป่าหายาก มีเขาขนาดใหญ่โค้งเป็นเอกลักษณ์ และมักอาศัยอยู่ใกล้พื้นที่ชุ่มน้ำและแหล่งน้ำ',
  },

  {
    id: '5',
    name: '5. กระทิง (Gaur)',
    image:
      'https://commons.wikimedia.org/wiki/Special:Redirect/file/Gaur-Bos_gaurus.jpg',
    desc:
      'สัตว์เคี้ยวเอื้องขนาดใหญ่ ลำตัวสีเข้ม มีขาสีอ่อนคล้ายสวมถุงเท้า',
  },

  {
    id: '6',
    name: '6. วัวแดง (Banteng)',
    image:
      'https://commons.wikimedia.org/wiki/Special:Redirect/file/Banteng_Jawa_(Bos_javanicus).jpg',
    desc:
      'สัตว์ป่าหายาก ลำตัวมีสีน้ำตาลแดงถึงน้ำตาลเข้ม และมีบริเวณขาสีอ่อน',
  },

  {
    id: '7',
    name: '7. สมเสร็จ (Malayan Tapir)',
    image:
      'https://commons.wikimedia.org/wiki/Special:Redirect/file/A_Malayan_tapir.jpg',
    desc:
      'สัตว์ป่าสงวนที่มีลักษณะโดดเด่น ลำตัวสีดำสลับขาว และมีจมูกยื่นคล้ายงวงช้าง',
  },
];

// ======================================================
// 2. หน้าหลัก Home Screen
// ======================================================

function HomeScreen({ navigation }) {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >

      {/* หัวข้อ */}
      <Text style={styles.mainTitle}>
        🌳 Big 7 สัตว์ป่าสำคัญ
      </Text>

      <Text style={styles.subTitle}>
        สำรวจ 7 ผู้ยิ่งใหญ่แห่งผืนป่า
      </Text>

      {/* รายการสัตว์ */}
      {BIG_7_DATA.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.card}
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate('Detail', {
              animal: item,
            })
          }
        >

          {/* รูปภาพ */}
          <Image
            source={{ uri: item.image }}
            style={styles.cardImage}
            resizeMode="cover"
          />

          {/* ข้อมูล */}
          <View style={styles.cardContent}>

            <Text style={styles.cardTitle}>
              {item.name}
            </Text>

            <Text
              style={styles.cardDesc}
              numberOfLines={2}
            >
              {item.desc}
            </Text>

            <Text style={styles.readMore}>
              กดเพื่อดูรายละเอียด ➜
            </Text>

          </View>

        </TouchableOpacity>
      ))}

    </ScrollView>
  );
}

// ======================================================
// 3. หน้า Detail Screen
// ======================================================

function DetailScreen({ route }) {

  const { animal } = route.params;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.detailContainer}
    >

      {/* รูปภาพขนาดใหญ่ */}
      <Image
        source={{ uri: animal.image }}
        style={styles.detailImage}
        resizeMode="cover"
      />

      {/* กล่องรายละเอียด */}
      <View style={styles.detailCard}>

        <Text style={styles.detailTitle}>
          {animal.name}
        </Text>

        <Text style={styles.detailText}>
          {animal.desc}
        </Text>

      </View>

    </ScrollView>
  );
}

// ======================================================
// 4. Navigation
// ======================================================

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>

      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#166534',
          },

          headerTintColor: '#ffffff',

          headerTitleStyle: {
            fontWeight: 'bold',
          },

          headerTitleAlign: 'center',
        }}
      >

        {/* หน้าหลัก */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Big 7 Wildlife App',
          }}
        />

        {/* หน้ารายละเอียด */}
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={({ route }) => ({
            title: route.params.animal.name,
          })}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

// ======================================================
// 5. Styles
// ======================================================

const styles = StyleSheet.create({

  // พื้นหลัง
  container: {
    flex: 1,
    backgroundColor: '#f0fdf4',
  },

  contentContainer: {
    padding: 15,
    paddingBottom: 30,
  },

  // หัวข้อหลัก
  mainTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#14532d',
    textAlign: 'center',
    marginTop: 10,
  },

  // หัวข้อรอง
  subTitle: {
    fontSize: 13,
    color: '#16a34a',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 20,
  },

  // Card สัตว์
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 15,
    overflow: 'hidden',
    flexDirection: 'row',

    elevation: 3,
  },

  // รูปภาพในการ์ด
  cardImage: {
    width: 110,
    height: 110,
  },

  // ส่วนข้อความในการ์ด
  cardContent: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },

  // ชื่อสัตว์
  cardTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#0f172a',
  },

  // คำอธิบาย
  cardDesc: {
    fontSize: 12,
    color: '#475569',
    marginTop: 5,
    lineHeight: 18,
  },

  // ปุ่มดูรายละเอียด
  readMore: {
    fontSize: 11,
    color: '#16a34a',
    fontWeight: 'bold',
    marginTop: 6,
  },

  // รูปหน้า Detail
  detailImage: {
    width: '100%',
    height: 260,
    borderRadius: 12,
  },

  detailContainer: {
    padding: 15,
    paddingBottom: 30,
  },

  // กล่องรายละเอียด
  detailCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 18,
    marginTop: 15,

    elevation: 3,
  },

  // ชื่อสัตว์หน้า Detail
  detailTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#14532d',
    marginBottom: 10,
  },

  // รายละเอียด
  detailText: {
    fontSize: 14,
    lineHeight: 23,
    color: '#334155',
  },

});