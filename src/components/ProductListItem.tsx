import { StyleSheet, Image, Text, Pressable } from 'react-native';
import Colors from '../constants/Colors';
import { Product } from '../types';
import { Link } from 'expo-router';

type ProductListItemProps = {
    product: Product;
}

const IMAGE_DEFAULT_FAIL_LOAD = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png'

const ProductListItem = ({ product }: ProductListItemProps) => {
    return (
        <Link href={`menu/${product.id}`} asChild>
            <Pressable style={styles.container}>
                <Image
                    source={{ uri: product.image || IMAGE_DEFAULT_FAIL_LOAD }}
                    style={styles.image}
                    resizeMode="contain"
                />
                <Text style={styles.title}>{product.name}</Text>
                <Text style={styles.price}>${product.price.toFixed(2)}</Text>
            </Pressable>
        </Link>
    )
}

export default ProductListItem


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        aspectRatio: 1,
        alignSelf: 'center',
    },
    title: {
        fontWeight: '600',
        fontSize: 18,
        marginVertical: 10,
    },
    price: {
        color: Colors.light.tint,
        fontWeight: 'bold',
        marginTop: 'auto',
    },
});