package com.projeto.projetofinal.api.model.service;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;

import com.projeto.projetofinal.api.model.exception.NegocioException;
import com.projeto.projetofinal.api.repositorio.CurriculoRepositorio;
import com.projeto.projetofinal.domain.model.Curriculo;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Service
public class CurriculoService {
	
	
private CurriculoRepositorio curriculoRepository;	
	
	
	
	@Transactional
	public Curriculo salvar(Curriculo curriculo) {
		boolean emailEmUso = curriculoRepository.findByEmail(curriculo.getEmail()).stream()
				.anyMatch(curriculoExistente -> !curriculoExistente.equals(curriculo));
		
		if(emailEmUso ) {
			throw new NegocioException("Já existe um curriculo cadastrado com este e-mail.");
		}
		
		return curriculoRepository.save(curriculo);
		
	}

	public void excluir(Long curriculoId) {
		
		curriculoRepository.deleteById(curriculoId);
		
	}
	

}
