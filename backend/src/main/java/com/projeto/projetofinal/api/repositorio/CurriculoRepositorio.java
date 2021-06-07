package com.projeto.projetofinal.api.repositorio;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projeto.projetofinal.domain.model.Curriculo;

@Repository
public interface CurriculoRepositorio extends JpaRepository<Curriculo, Long> {

	List<Curriculo> findByNome(String nome);

	List<Curriculo> findByNomeContaining(String nome);

	Optional<Curriculo> findByEmail(String email);
}
