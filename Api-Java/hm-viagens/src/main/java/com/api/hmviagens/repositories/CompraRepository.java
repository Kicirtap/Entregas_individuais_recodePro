package com.api.hmviagens.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.api.hmviagens.models.CompraModel;

@Repository
public interface CompraRepository extends JpaRepository<CompraModel, UUID> {
   

}
