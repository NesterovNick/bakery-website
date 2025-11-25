package com.irichoco.cake_shop.controller;

import com.irichoco.cake_shop.entity.Product;
import com.irichoco.cake_shop.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {
    @Autowired
    private ProductRepository productRepository;

    @GetMapping
    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    @GetMapping ("/{id}")
    public Product getProducyById(@PathVariable Long id){
        return productRepository.findById(id).orElse(null);
    }
}