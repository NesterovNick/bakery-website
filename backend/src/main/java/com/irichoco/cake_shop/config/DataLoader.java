package com.irichoco.cake_shop.config;

import com.irichoco.cake_shop.entity.Product;
import com.irichoco.cake_shop.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public void run(String... args) throws Exception {
        // Очищаем базу (опционально)
        productRepository.deleteAll();

        // Создаём тестовые товары
        Product product1 = new Product();
        product1.setName("Книга");
        product1.setDescription("Зефирные тюльпаны в коробочке в виде книги");
        product1.setPrice(1500.0);
        product1.setImageUrl("images/Книга.jpg");

        Product product2 = new Product();
        product2.setName("Восьмёрка");
        product2.setDescription("Зефирные тюльпаны в коробочке в виде восьмёрки");
        product2.setPrice(600.0);
        product2.setImageUrl("images/КорзинкаГрибов.jpg");

        Product product3 = new Product();
        product3.setName("Бабочка");
        product3.setDescription("Зефирные тюльпаны в коробочке в виде бабочки");
        product3.setPrice(1200.0);
        product3.setImageUrl("images/Бабочка.jpg");

        // Сохраняем в базу
        productRepository.save(product1);
        productRepository.save(product2);
        productRepository.save(product3);

        System.out.println("Тестовые данные загружены!");
    }
}