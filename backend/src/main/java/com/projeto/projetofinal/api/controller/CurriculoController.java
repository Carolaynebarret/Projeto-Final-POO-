package com.projeto.projetofinal.api.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.projeto.projetofinal.api.model.service.CurriculoService;
import com.projeto.projetofinal.api.repositorio.CurriculoRepositorio;
import com.projeto.projetofinal.domain.model.Curriculo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/curriculo")
public class CurriculoController {

	private CurriculoRepositorio curriculoRepository;

	private CurriculoService curriculoService;

	@GetMapping
	public List<Curriculo> listar() {
		return curriculoRepository.findAll();

	}

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Curriculo adicionar(@Valid @RequestBody Curriculo curriculo) {
		return curriculoService.salvar(curriculo);

	}

	@DeleteMapping("/{curriculoId}")
	public ResponseEntity<Void> remover(@PathVariable Long curriculoId) {
		if (!curriculoRepository.existsById(curriculoId)) {
			return ResponseEntity.notFound().build();
		}

		curriculoService.excluir(curriculoId);

		return ResponseEntity.noContent().build();

	}

	@PutMapping("/{curriculoId}")
	public ResponseEntity<Curriculo> atualizar(@PathVariable Long curriculoId,
			@Valid @RequestBody Curriculo curriculo) {

		if (!curriculoRepository.existsById(curriculoId)) {
			return ResponseEntity.notFound().build();
		}

		curriculo.setId(curriculoId);
		curriculo = curriculoService.salvar(curriculo);

		return ResponseEntity.ok(curriculo);
	}

	@GetMapping("/{curriculoId}")
	public ResponseEntity<Curriculo> buscar(@PathVariable Long curriculoId) {
		return curriculoRepository.findById(curriculoId).map(ResponseEntity::ok)
				.orElse(ResponseEntity.notFound().build());

	}

}
